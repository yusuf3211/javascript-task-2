// push() menambahkan element array di akhir 
const A = ['apple','banana']
A.push('pineapple')
console.log(A)//hasil [ 'apple', 'banana', 9, 8, 7 ]

// pop() menghapus element array di akhir 
const a = ['apple','banana','pineapple']
const b = a.pop();
console.log(a)//hasil [ 'apple', 'banana' ]

// unshift() menambahkan element array di awal 
const ab = ['banana','cherry']
ab.unshift('apple')
console.log(ab)//hasil [ 'apple', 'banana', 'cherry' ]

// shift() menghapus element array di awal
const bc = ['apple','banana','pineapple']
const ac = bc.shift()
console.log(bc)//hasil [ 'banana', 'pineapple' ]

// includes() menilai element 'true' atau 'false'
const ad = ['apple','banana','pineapple']
const buybanana = ad.includes('banana')
console.log(buybanana)//hasil true

// indexOf() menampilkan urutan dalam element array
const aa = ['apple','banana','pineapple']
const bb = aa.indexOf('pineapple')
console.log(bb)// hasil 2

// concat() menggabungkan 2/lebih ke dalam array sesuai yg ingin di gabungkan
const id = [1,2]
const id2 = [3,4]
const newID = id.concat(id2)
console.log(newID)// hasil [1,2,3,4]

// slice() menampilkan element yang di tampilkan (X banana X X X)
const ba = ['apple','banana','pineapple','cherry']
const ca = ba.slice(1,2)
console.log(ca)// hasil 'banana'

// splice() mengganti element array dengan menghapus,menambahkan atau modify
const dd = ['apple','banana','pineapple','cherry']
dd.splice(1,2, 'grape','cucumber')
console.log(dd)// hasil [ 'apple', 'grape', 'cucumber', 'cherry' ]

// sort() buat urutin angka dari 0 dan digit terkecil (a,b)=> a-b dan digit terkecil 
// sedangkan huruf urutin dari huruf depan di mulai dari A-Z (a, b) => b.localeCompare(a)
const numba = [1,2,3,4,5]
numba.sort((a,b)=> a-b)
console.log(numba)//hasil [ 1, 2, 3, 4, 5 ]

// foreach({()}) looping semua item untuk dikerjakan semua
const bbc = ['apple','banana','pineapple']
bbc.forEach( bbc =>{console.log("saya suka "+bbc)})
//hasil saya suka apple ,saya suka banana ,saya suka pineapple

// map modify dalam array 
const adc = [10000,20000,900000]
const ddc = adc.map(num=>num * 0.9)
console.log(ddc)