# モバイルアプリ実習資料
創造社デザイン専門学校　モバイルアプリ実習資料

## モバイルアプリとWEBアプリの違い
- モバイルアプリ(ネイティブアプリ)  
App StoreやGoogle Playなどのアプリケーションストア経由でインストールして使用するアプリ  
カメラやGPS、OSの機能を最大限に活用可能  
開発言語...
Flutter, React Native
iOS: Swift, Objective-C
Android: Kotlin, Java

- Webアプリ
Webブラウザ上で動作するアプリ(インストール不要)  
カメラやGPSを制限付きで利用可能 
HTML・CSS・JavaScriptで開発

## JavaScriptの総復習
- サーバーサイドプログラミングとクライアントサイドプログラミング
- JavaScriptどこに書く
- jQueryを使うメリットとデメリット
### JavaScriptのデータ型

| 名称    | 型       | 例                       | 
| ------- | -------- | ------------------------ | 
| string  | 文字列型 | "創造社デザイン専門学校" | 
| number  | 数値型   | 1, 100, 0.5, -99         | 
| boolean | 論理型   | true, false              | 
| Null | null型   | null              | 
| Undefined | undefined型   | undefined              | 

nullはオブジェクトがない事を示し、undefinedは値がない事を示します。

### 変数の宣言
- let 再代入可
- const 再代入不可
```
//letで宣言した変数は再代入してもエラーにならない
let index = 0;
index = 1;

//constで宣言した変数は再代入するとエラー(TypeError)になる
const students = ['山田', '田中', '太田'];
students =  ['大河', '島田', '杉山'];
```

### 算術演算子

| 演算子 | 意味 | 例 |
| ---------------- | ---------------- | ---------------- |
| + | 足し算(加算) | 100 + 50 |
| - | 引き算(減算) | 100 - 50 |
| * | 掛け算(乗算) | 100 * 50 |
| / | 割り算(除算) | 100 / 50 | 
| % | 余り算(剰余) | 100 % 50 | 
| ** | べき乗 | 100 ** 2 | 

### 配列
```
//配列を定義
const fruits = [];
//末尾に要素を追加
fruits.push("バナナ");
fruits.push("リンゴ","イチゴ");
console.log(fruits);
//要素は0から始まる添え字で取得
console.log(fruits[0]);
//要素の数はlengthで取得
console.log(fruits.length);
```

## オブジェクト
```
//オブジェクトの定義
const scores = {
    math: 80,
    english: 75,
    sience: 85,
    history: 60,
}
console.log(scores);
//要素の呼び出し
console.log(scores.math);
//要素の追加
scores.japanese = 90;
//要素の変更
scores.math = 85;
console.log(scores);
```

### 関数
- 繰り返し呼び出したい処理を登録する
- 関数には引数リストを使って値を渡すことができる
- return 文で呼び出し元に結果を渡すことができる
- function 関数名(引数リスト){処理}
```
function square(number) {
  return number * number;
}
console.log(square(4));
```
- 無名関数(名前を持たない関数)
```
//上の例は下記のようにも書ける
const square = function(number){
    return number * number;
}
```
### 条件分岐
```
const num = 90;
if （num > 80） {
    console.log("numは80より大きいです。");
}

const num2 = 70;
if （num2 > 80） {
  console.log（"num2は80より大きいです。"）;
} else {
  console.log（"num2は80以下です。"）;
}

const num3 = 70;
if （num3 > 80） {
  console.log("num3は80より大きいです。");
} else if （num3 >= 60） {
  console.log（"num3は60～80の間です。"）;	
} else {
  console.log（"num3は60未満です。"）;
}

```

### 繰り返し
- 条件を満たすまで処理を繰り返す
- for (カウンター変数; 条件; 増減の設定 )
```
let str = '';

for (let i = 0; i < 9; i++) {
  str = str + i;
}

console.log(str);
```

## イベント
JavaScriptではブラウザ上でユーザーが起こすさまざまなイベントにより、プログラムが呼び出され実行される
-ページ読み込み
-マウスボタンのクリック
-キーボード入力

ページが読み込まれました
```
//JS
document.addEventListener("DOMContentLoaded", (event) => {
  console.log("Webページが読み込まれました");
});
```
ドロップダウンが変更されました。
```
<!--HTML-->
<select name="" id="choice">
  <option value="">A</option>
  <option value="">B</option>
  <option value="">C</option>
</select>
```
```
//JS
dropdownEle = document.querySelector("#choice");
dropdownEle.addEventListener("change",(event)=>{
    console.log(event.target.value);
});
```
inputタグが変更されました
```
<!--HTML-->
<input type="text" name="" id="myname">
```

```
//JS
inputEle = document.querySelector("#myname");
inputEle.addEventListener("change",(event)=>{
    console.log(event.target.value);
});
```
ボタンクリック
```
<!--HTML-->
<button id="handle">実行</button>
```
```
//js
button = document.querySelector("#handle");
button.addEventListener('click',()=>{
  alert("clickされました");
}
```

## モダンJavaScript
主にES6以降に導入された新しい文法を学ぶ

### テンプレート文字列
文字列全体をはバッククォートで囲む、内包される変数は${}で囲む
```
const name = "山本";
//従来の書き方
const element1 = "<p class=\"profile\">"+name+"</p>";
//テンプレート文字列を使う
const element2 = `<p class="profile">${name}</p>`;
```
### アロー関数
```
// 従来の無名関数
(function (a) {
  return a + 100;
});

// 1. "function" を削除し、引数と本体の開始中括弧の間に矢印を配置する
(a) => {
  return a + 100;
};

// 2. 内容がreturnのみの場合、中括弧と "return" を削除可能。
(a) => a + 100;

// 3. 引数が１つのみの場合、引数リストの括弧を削除可能。
a => a + 100;
```

### 分割代入
```
//配列の分割代入
const array = [1, 2, 3, 4];
let [x, y] = array;

//オブジェクトの分割代入
const obj = { b: 2, c: 3, d: 4 }
let {a, b, c } = obj;
```

### forEach map filter 構文
- foreachメソッド
```
const array1 = ['a', 'b', 'c'];
//foreachメソッドはリストを全て出力する
array1.forEach((element) => console.log(element));
```
- mapメソッド
```
const array1 = [1, 4, 9, 16];
//mapメソッドは新しいリストを作成する
const map1 = array1.map((x) => x * 2);
console.log(map1);
```
- filterメソッド
```
const words = ['dog', 'rabbit', 'elephant', 'giraffe', 'rhinoceros'];
//filterメソッドは条件に合格した値だけをリストとして複製する
const result = words.filter((word) => word.length > 6);
console.log(result);
```

### サンプル
HTML
```
<div>
    <ul id="main"></ul>
</div>
<button id="handle">実行</button>
```

JavaScript
```
const subjects = ['グラフィック専攻','イラストレーション専攻','インテリア専攻','Web専攻']
//ボタンを取得
button = document.querySelector("#handle");
//ULタグを取得
ulElement = document.querySelector("#main");
console.log(ulElement)
button.addEventListener('click',()=>{
    subjects.forEach((subject)=>{
        li_element = document.createElement('li')
        li_element.innerHTML = subject;
        ulElement.appendChild(li_element);
    });
});
```

## CSS フレームワーク

- [Bootstrap5](https://getbootstrap.jp/) 
- [Bootstrap 5 CheatSheet](https://bootstrap-cheatsheet.themeselection.com/) 

## Bootstrap with JavaScript
HTML
```
<div>
    <label for="myName" class="form-label">氏名</label>
    <input type="text" name="myName" id="myName" class="form-control">
</div>
<button class="btn btn-primary disabled" id="submitBtn">送信</button>
```

JS
```
//inputタグを取得する
myName = document.querySelector('#myName');
//buttonタグを取得する
submitBtn = document.querySelector('#submitBtn');
//inputが変更されたら
myName.addEventListener('change',(e)=>{
    //4文字以上入力されたら
    if(e.target.value.length > 4){
        myName.classList.remove('is-invalid');
        myName.classList.add('is-valid');
        submitBtn.classList.remove('disabled');
    }else{
        myName.classList.remove('is-valid');
        myName.classList.add('is-invalid');
        submitBtn.classList.add('disabled');
    }
});
```

## JSONデータ活用
-　[Dog API](https://dog.ceo/dog-api/)

## GPS(Geo Location)
```
console.log(navigator);
//navigator内にgeolocationの有無を確認
```

```
// 現在位置の取得
navigator.geolocation.getCurrentPosition((position)=>{
    console.log(`緯度:${position.coords.latitude}`);
    console.log(`経度:${position.coords.longitude}`);
});
```

```
//地図サービスで位置座標を反映
https://www.openstreetmap.org/#map=18/緯度/経度
```
- [GPS動作例](https://studioham.net/sozosha_gps/)

<img src="GPS/QR.png" width="200px">

## 提出課題のテンプレート
kadaiディレクトリを確認してください。