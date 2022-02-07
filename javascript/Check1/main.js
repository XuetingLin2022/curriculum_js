 /* 問１　ここから*/
let numbers = [2, 5, 12, 13, 15, 18, 22];

function isEven(arr) {
    for (let i = 0; i < arr.length; i++) {
        num=arr[i] ;
        if (num % 2 === 0) {
            
            console.log(num + 'は偶数です');
        }
    }
}
isEven(numbers);
 /* 問１　ここまで*/

/* 問２　ここから*/
class car {
    //コンストラクタ
    constructor(gass,num) {
        this.gass = gass;
        this.num = num;
    }

    getNumGas() {
        console.log("ガソリンは" + this.gass + "です。ナンバーは"+this.num+"です");
    }
}
/* 問２　ここまで*/