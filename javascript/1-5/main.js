/**
 * 「ジュース工場」関数
 * @fruits:入れる果物
 */
function createJuice(fruits){
console.log(fruits+"を受け取りました。ジュースにして返します");
return fruits+"ジュース";
}

let orangeJuice=createJuice("みかん");
console.log(orangeJuice+"が届きました");