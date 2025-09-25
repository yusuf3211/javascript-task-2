const searchName = function (keyword, limit, cb){
let h = 0
const name = [
    "Abigail",
    "Alexandra",
    "Alison",
    "Amanda",
    "Angela",
    "Bella",
    "Carol",
    "Caroline",
    "Carolyn",
    "Deirdre",
    "Diana",
    "Elizabeth",
    "Ella",
    "Faith",
    "Penolope",
  ];
  // for(let a=0;a<name.length;a++){
  //   //ngambilin semua data 1/1
  //   let search = true 
  //   //cocokin data
  // for(let b=0;b<keyword.length;b++){
  //   //ngambilin data perhuruf 
  //   if(name[a][b] !==keyword[b]){
  //     search = false;break

  //   }
  // }
  // if(search){
  //   cb(name[a])
  //   h++
  //   if(h>=limit)break
  // }
  // }
//cara biar search bisa ketemu makai huruf kecil atau besar
  for (let a=0;a<name.length;a++) {
    let search = true;
    for (let b=0;b<keyword.length;b++) {
      if (!sameChar(name[a][b],keyword[b])) {
        search = false;
        break;
      }
    }

    if (search) {
      cb(name[a]);
      h++;
      if (h >= limit) break;
    }
  }
};

function sameChar(a, b) {
  if (a === b) return true;
  if (a === b.toLowerCase()) return true;
  if (a === b.toUpperCase()) return true;
  return false;
}



searchName("a",2,console.log)
//tanpa toLowerCase cari search keyword harus spesifik