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