let a = 5;
let b = 10;
let c = 15;
// function phepCong(c,e){
//     // let tong=c+e;
//     // return tong;
//     return c+e
// }
// let d=phepCong(15,10);
// console.log(d)
// const phepTru=(c,d)=>{
//     // let hieu=c-d;
//     // return hieu;
//     return c-d;
// }
// const phepChia=

// console.log((a,b)=>a/b)
function phepTinh(a, b, c, pt="CONG") {
    let d = 666;
    switch (pt) {

        case "CONG":
            d = a + b - c;
            break;
        case "TRU":
            d = a - b + c;
            break;
        case "NHAN":
            d = a * b / c ;
            break;
        default:
            d = a / b * c;
            break;
    }
    return d
}
// console.log(phepTinh(a,b,c,"TRU"));