/**
 * const,let等の変数宣言
 */
// var vall = "var変数";
// console.log(vall);

// //bar変数は上書き可能
// vall = "var変数を上書き";

// console.log(vall);

// //var変数は再宣言可能
// var　vall= "var変数を再宣言";
// console.log(vall);

// let val2 = "let変数";
// console.log(val2);

// //letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// //letは再宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数"
// console.log(val3);

// //const変数は上書き不可
// // val3 ="const変数の上書き";

// const val3 = "const 変数を再宣言";
//constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "ジャケぇ",
//   age: 28,
// };
// val4.name ="jal";
// val4.addres = "hiroshima";
// console.log(val4);

//constで定義したオブジェクトは配列の変更が可能
// const val5 = ["dog", "vat"];
// val5[0] = "bird";
// val5.push("monky");
// console.log(val5);
//reactで使われる多くはconst

/**
 * テンプレート文字列
 */
// const name = "seita";
// const age = 18;
// //「私の名前は晟太です。年齢は１８歳です」

// //従来の方法では
// const message1 = "私の名前は"　+ name + "です。年齢は" + age + "です。";
// console.log(message1);

// //テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です`;
// console.log(message2)

/**
 * アロー関数
 */
//従来の関数
// function func1(stb){
//   return stb;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// //アロー関数
// const func2 = (str) =>  str;
// console.log(func2("func2出会う"));

//アロー関数省略できるもの
//①筆記数の括弧をなくすことができる
// const func2 = str => {
//   return str
// };
// console.log(func2(func2 だよ))；
//❷一行で終わる処理には波括弧と処理に必要な文字（exp.return）がいらない
// const func2 = (str) => str;
// console.log(func2("ファンク２だよ"));

// const func3 = (num1,num2) => {
//   return num1 + num2
// };
// console.log(func3(10,30))

/**
 * 分割代入
 */
// 　const myProfile ={
//   name:"seita",
//   age: "18",
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1)

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const myProfile = ["seita , 18"];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です`;
// console.log(message4);

/**
 * デフォルト値,引数など
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello("seita");

/**
 * スプレッド構文 ... ドットを３つかく
 */

//①配列の展開(順番に処理)
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//②一つにまとめる
// const arr2 = [1,2,3,4,5];
// const [num1,num2,...arr3] = arr2;
// console.log(num1);
// console.log(num2)
// console.log(arr3);

//③配列のコピー、結合

// const arr4 = [10,20]
// const arr5 = [30,40]

// const arr6 = [...arr4]
// console.log(arr6)
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4,...arr5];
// console.log(arr7)

//スプレッドを使わなくて＝を使った時の問題点
// const arr8 = arr4
// arr8[0] = 100;
// console.log(arr4)
// console.log(arr8);
//arr4の中身にまでarr8の変更内容が影響を与えている
//全体を通して言えるのは()の中に入っているスプレッドは展開[]の中に入ってるスプレッドはまとめる

/**
 * mapやfilterを使った配列の処理
 */

const nameArr = ["tanaka", "yamada", "seita"];
// //mapが出る前のforを用いて処理
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}desu`);
// }

//mapの処理
//mapの機能というものは配列の中のものを順番に処理する
// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2)
//上としたの違いはconsole.logはいつ使われるのかって話
//nameArr.map((index,name) => console.log(`${index + 1}番目は${name}desu`));

//filterの処理
//条件に一致したものだけで新しい配列を生成する

// const numArr = [1,2,3,4,5];
// const newNumArr =numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr)

/**
 * 三項演算子
 */

// ある条件に対して　? を使えば、条件がtureの時、　:を使えば条件がfalseのとき
// const val1 = 1 > 0 　? 'trueです' : 'falseです';
// console.log(val1);

//数値が来た時にそのままtolocalestringを使えるが数字でない時気づくようにしたい
// const num ="1300";
// console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください'
// console.log(formattedNum)

//関数のreturn部分に三項演算子を使いたい
// const checkSum = (num1,num2) => {
//   return num1 + num2 > 100 ? '100を超えています'　: '許容範囲内です';
// }
// console.log(checkSum(50,60));

/**
 * 論理演算子の本当の意味をしろう　&& ||
 */

//  const flag1 =true
//  const flag2 = true

//  if (flag1 || flag2){
//    console.log("1か２はtureになります")
//  }
//  if (flag1 && flag2){
//   console.log("1か２どちらもtureになります")
// }

//||は左側がfalaseなら右側を返す
//nullはfalse判定
// const num = 100;
// const fee = num || "金額未設定です";
// console.log(fee);

//&&は左側がtrueなら右側を返す
// const num2 = null;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);
