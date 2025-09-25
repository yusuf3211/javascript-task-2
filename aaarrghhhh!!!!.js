let number = (search,limit,callback)=>{

  let h = 0//h di sini counter (penghitung).

//Fungsinya: tau berapa banyak hasil yang udah ditemukan.
//Supaya bisa stop kalau sudah mencapai limit.
//Contoh: kalau limit = 4, h akan naik dari 0 → 1 → 2 → 3 → 4.
//Begitu h >= limit, langsung break.

  let data = [1,11,112,123,113,223,332,224,221,212,334,331]

  for(let a=0;a<data.length;a++){
    
     let keyword = true //Flag (bendera) buat nyimpen hasil pengecekan.

// Kalau cocok, tetap true.
// Kalau ada yang beda, diubah jadi false.
// Ini kayak "asumsi awal cocok → kalau ketemu bukti salah, coret".

  for(let b=0;b<data.length;b++){//cocok semua → keyword tetap true
    if(data[a][b] !==search[b]){
      keyword = false
      break;
   }
  }  
  if(keyword){//Kalau hasil pengecekan cocok (keyword == true), maka elemen itu dianggap hasil pencarian.

    callback(data[a])//Di sini kamu kirim hasil keluar.

// Karena parameternya console.log, otomatis hasil ditampilkan di console.
// Tapi nanti bisa juga diganti callback lain (misalnya push ke array).

    h++//Naikkan counter tiap kali ketemu hasil.
    if(h>=limit)break;
    // Kalau sudah mencapai limit, keluar dari loop (break).
    
    // Jadi pencarian berhenti setelah kuota tercapai.
    }
   }
  }
number(1,4,console.log)



// versi perbaikan chatgpt
// let number = (search, limit, callback) => {
//   let h = 0;
//   let data = [1,11,112,123,113,223,332,224,221,212,334,331];

//   for (let a = 0; a < data.length; a++) {
//     let str = String(data[a]);       // ubah angka ke string
//     let key = String(search);        // ubah search juga ke string
//     let keyword = true;

//     for (let b = 0; b < key.length; b++) {
//       if (str[b] !== key[b]) {
//         keyword = false;
//         break;
//       }
//     }

//     if (keyword) {
//       callback(data[a]);
//       h++;
//       if (h >= limit) break;
//     }
//   }
// }

// number(1, 4, console.log);
