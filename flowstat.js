//**condition**//
//if elseif else, untuk membuat kondisi yg di tentukan atau untuk filter masuk kondisi if/else(jika / jika selainnya / selainnya)
function test(a){
    let result;
    if(a>0){
        result="benar"
    }else(result="salah")
    return result
}console.log(test(6))//hasil benar

//switch sama mirip if else tapi lebih mencocokan hasilny untuk dijadikan result
const buah = "mangga"
switch(buah){
    case"jeruk":
    console.log("jeruk harganya 2000")
    break;
    case"melon":
    break;
    case"apel":
    console.log("melon dan aepl harganya 9000")
    break;
    default:
        console.log(`maaf stoke, ${buah} habis.`)
}
//**looping**//