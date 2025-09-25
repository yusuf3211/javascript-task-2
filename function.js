//#1
//function declaration mesin yg bisa di panggil dimana saja(bersifat umum atau universal)
//() dlm function bisa di bilang variable function yg bisa dipakai berulang kali
function y(name){
   return "hello!, " + name + "!"
}//return hasil yg ingin dibuat dari function ,mengembalikan hasil dari function
console.log(y("tamaki"))
// hasil hello!, tamaki!

//#2
//function expression fungsi yg di simpan di data variable
//hanya bisa di panggil setelah di definisikan
let alertlogin = function (username){
    return "selamat datang ," + username + " XD";
}
console.log(alertlogin("tamaki"))
// hasil selamat datang ,tamaki XD

//#3
// sama seperti function expression tapi versi singkat
let login = (user)=>{
    return "selamat datang ,"+ user + " XD";
}
console.log(login("tamaki"))
// hasil selamat datang ,tanaki XD

//#4
//contoh lain short function expression
let a = (b,c)=>{
    return "pertambahan = " +(b + c) 
}
console.log(a(90,80))
// hasil pertambahan = 170

//#5
//Immediately Invoked Function Expression , fungsi yg bisa langsung di eksekusi dan cuman dipakai sekali
{(()=>{
    console.log("selamat datang" + " XD")
})()}//hasil selamat datang XD

