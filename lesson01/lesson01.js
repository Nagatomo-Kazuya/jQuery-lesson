
//【課題1】promptで入力した値から「正の数」「負の数」を判定してalertする処理を書いてください。
//【課題2】課題1で数値以外が入力された場合には「数値を入力してください」とalertする処理を追加してください。

var answer1 = prompt('数値を入力してください');
if (answer1 > 0) {
    alert(answer1 + 'は正の数です');
} else if (answer1 < 0) {
    alert(answer1 + 'は負の数です');
} else if (answer1 == 0) {
    alert(answer1 + 'は正の数でも負の数でもありません');
} else {
    alert('数値を入力してください');
};

//-------------------------------------------------------------------------------------------------------


//【課題3】配列に'パンダ', 'ライオン', 'キリン'を定義し、while文ですべて表示する処理を書いてください。
//【課題4】課題3でwhile文より前にpromptでキー入力し、その入力した内容が'ライオン'の場合に処理を中断するように変更してください。
//【課題5】課題4で中断したときの'ライオン'の添字もalertするように変更してください。

var animals1 = ["パンダ", "ライオン", "キリン"];
var i = 0;

var answer2 = prompt("パンダ、ライオン、キリンから１つ選んで入力してください");
if (answer2 !== "ライオン") {
    while (i < animals1.length) {
        alert(animals1[i]);
        i++;
    }
} else {
    alert(animals1.indexOf("ライオン"));
}; 

//-------------------------------------------------------------------------------------------------------



//【課題6】オブジェクト変数の配列の形式で、動物と体重を表現してみましょう。例としてパンダは80(Kg)、ライオンは200(Kg)、キリンは300(Kg)としましょう。
//【課題7】課題6でpromptで入力した動物名の体重をalertするように変更してください。

var getIndex = function(value, array, prop) {
    for (var i = 0; i < array.length; i++) {
        if (array[i][prop] === value) {
            return i;
        }       
    }
}

var animals2 = [
    {"name": "パンダ", "weight": 80},
    {"name": "ライオン", "weight": 200},
    {"name": "キリン", "weight": 300}
];

var answer3 = prompt("パンダ、ライオン、キリンから１つ選んで入力してください");
var result = getIndex(answer3, animals2, 'name');
alert(animals2[result].weight + "Kg");


//-------------------------------------------------------------------------------------------------------



//【課題8】円の半径を入力するとその面積を返す関数をつくり、その結果をalertしましょう。円周率は3.14とします。
var square = function (radius) {
    return radius * radius * 3.14;
} 
var radius = prompt('円の半径を入力してください');
alert(square(radius));

