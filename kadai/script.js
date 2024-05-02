//ページ読み込まれたら
document.addEventListener("DOMContentLoaded",()=>{
    //詳細表示エアリアを隠す
    const dataDetail = document.querySelector(".dataDetail");
    //一覧表示エリア
    const dataTable = document.querySelector("#dataTable");
    //データ表示エリア
    const dataTableBody = document.querySelector("#dataTableBody");
    //GPSボタン
    const getGps = document.querySelector("#getGps");

    //GPSボタンがクリックされたら
    getGps.addEventListener("click",()=>{
        //GPSを取得する
        navigator.geolocation.getCurrentPosition((position)=>{
            console.log(`緯度:${position.coords.latitude}/経度:${position.coords.longitude}`);
            //ショップ情報を取得
            getShopInfo(position.coords.latitude,position.coords.longitude);
        });
    });

    //HotPepperと通信
    const getShopInfo = (lat,lng) => {
        //axiosで通信
        axios.get('https://takujiozaki.com/geolocations/hotpepper_open.php',{
            params: {
                key:'',
                lat: lat,
                lng: lng,
                range:5, //範囲
                genre:"G014",//ジャンル
                count:15,//取得数
            }
        })
        // 成功した時
        .then((response)=>{
            console.log(response);
            //TABLE作成
            makeTable(response.data.results.shop,dataTableBody,dataTable)
        })
        // 失敗した時
        .catch((error)=>{
            console.log(error);
        });
    }
    //一覧表示テーブル
    const makeTable = (data,dataTableBody,dataTable) =>{
        while( dataTableBody.firstChild ){
            dataTableBody.removeChild( dataTableBody.firstChild );
        }
        data.forEach((shop) => {
            const trElement = document.createElement("tr");
            const tdElement = document.createElement("td");
            tdElement.innerText = shop.name;
            const tdElement2 = document.createElement("td");
            const detailBtn = document.createElement("button");
            detailBtn.innerText="詳細";
            detailBtn.addEventListener("click",()=>{
                //クリックされたら詳細画面に移動
                showDetail(shop,dataDetail,dataTable);
                //一覧を隠す
                dataTable.classList.add("d-none");
            });
            tdElement2.appendChild(detailBtn);
            trElement.appendChild(tdElement);
            trElement.appendChild(tdElement2);
            dataTableBody.appendChild(trElement);  
        });
    }
    //詳細画面表示
    const showDetail = (shop,dataDetail,dataTable) =>{
        //ulタグを削除
        while( dataDetail.firstChild ){
            dataDetail.removeChild( dataDetail.firstChild );
        }
        //見出しタグを追加(例はh2)
        const hElement = document.createElement("h2");
        hElement.innerText = "お店の詳細"
        dataDetail.appendChild(hElement);
        //お店の詳細を箇条書きで追加
        //ulタグを作成
        const ulElement = document.createElement("ul");
        //liタグを作成(3個)
        const liElement1 = document.createElement("li");
        liElement1.innerText = shop.id;//shopid
        ulElement.appendChild(liElement1);
        const liElement2 = document.createElement("li");
        liElement2.innerText = shop.name;//店名
        ulElement.appendChild(liElement2);
        const liElement3 = document.createElement("li");
        liElement3.innerText = shop.address;//住所
        ulElement.appendChild(liElement3);
        dataDetail.appendChild(ulElement);
        //Map領域を表示
        const mapArea = document.createElement("div");
        mapArea.setAttribute("id",'map');
        mapArea.style.height = "180px";
        mapArea.style.width = "360px";
        mapArea.style.border = "solid 1px #666";
        dataDetail.appendChild(mapArea);
        //読み込み中を表示
        const loading = document.createElement("div");
        loading.setAttribute("id","loading");
        loading.classList.add("spinner-border");
        loading.classList.add("text-primary"); 
        dataDetail.appendChild(loading);
        setTimeout(()=>{
            //読み込み中を消す
            const loadingDiv = document.querySelector("#loading");
            loadingDiv.remove();
            //地図を読み込む
            const map = L.map('map').setView([shop.lat, shop.lng], 13);
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);
            map.invalidateSize();
            L.marker([shop.lat, shop.lng]).addTo(map);
        },1000);
        
        //閉じるボタン
        const closeBtn = document.createElement("button");
        closeBtn.innerText = "閉じる";
        closeBtn.addEventListener("click",()=>{
            dataDetail.classList.add("d-none");
            dataTable.classList.remove("d-none");
        });
        dataDetail.appendChild(closeBtn);
        //表示を切り返る
        dataDetail.classList.remove("d-none");
    }
    //初回表示用(詳細画面を隠す)
    dataDetail.classList.add("d-none");
});