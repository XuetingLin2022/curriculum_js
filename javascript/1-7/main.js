class Taiyaki{
    //コンストラクタ
    constructor(nakami) {
        this.nakami = nakami;
    }

    printNakami(){
        console.log("中身は"+this.nakami+"です");
    }
}

let anko=new Taiyaki("あんこ");
anko.printNakami();

let cream=new Taiyaki("クリーム");
cream.printNakami();

let cheese=new Taiyaki("チーズ");
cheese.printNakami();