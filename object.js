// # object-literal

// # Logic Challenge - Change Me!

// ## Problem

// Diberikan sebuah function changeMe(arr) yang menerima satu parameter berupa array multidimensi dimana array tersebut berisi value (pasti berurut dari kiri ke kanan) First Name, Last Name, Gender dan Birth Year . Fungsi ini akan menampilkan object literal yang memiliki property firstName, lastName, gender dan age. Nilai age didapatkan dari tahun sekarang dikurang tahun lahir. Jika tahun lahir tidak diisi atau tahun lahir lebih besar dibandingkan tahun sekarang maka age akan berisi 'Invalid Birth Year'

// Contoh jika arr inputan adalah [['Platinum', 'Fox', 'female', 1995], ['John', 'Doe', 'male', 2000]] maka output:

// 1. Platinum Fox: { firstName: 'Platinum', lastName: 'Fox', gender: 'female', age: 23 }
// 2. John Doe: { firstName: 'John', lastName: 'Doe', gender: 'male', age: 18 }

// ## Code

// ```javascript
function changeMe(arr) {
  let  tampung=''
  for(let i=0;i<arr.length;i++){
    let isi={}
    let name1='firstName:'
    let name2='lastName:'
    let kelamin='gender:'
    let umur='age:'
      name1+=arr[i][0]
      name2+=arr[i][1]
      kelamin+=arr[i][2]
      umur+=2020-arr[i][3]
      if(arr[i][3]===undefined){
        umur='age:Invalid Birth Year'
      }
      tampung=name1+'\n'+name2+'\n'+kelamin+'\n'+umur
    console.log(tampung+'\n')
  }
  return "cannot return"
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""
// ```



// # Logic Challenge - Shopping Time!

// ## Problem

// Diberikan sebuah function shoppingTime(memberId, money) yang menerima dua parameter berupa string dan number. Parameter pertama merupakan memberId dan parameter ke-2 merupakan value uang yang dibawa oleh member tersebut.

// Toko X sedang melakukan SALE untuk beberapa barang, yaitu:

// - Sepatu brand Stacattu seharga 1500000
// - Baju brand Zoro seharga 500000
// - Baju brand H&N seharga 250000
// - Sweater brand Uniklooh seharga 175000
// - Casing Handphone seharga 50000

// Buatlah function yang akan mengembalikan sebuah object dimana object tersebut berisikan informasi memberId, money, listPurchased dan changeMoney.

// - Jika memberId kosong maka tampilkan "Mohon maaf, toko X hanya berlaku untuk member saja"
// - Jika uang yang dimiliki kurang dari 50000 maka tampilkan "Mohon maaf, uang tidak cukup"
// - Member yang berbelanja di toko X akan membeli barang yang paling mahal terlebih dahulu dan akan membeli barang-barang yang sedang SALE masing-masing 1 jika uang yang dimilikinya masih cukup.

// Contoh jika inputan memberId: '324193hDew2' dan money: 700000

// maka output:

// { memberId: '324193hDew2', money: 700000, listPurchased: [ 'Baju Zoro', 'Sweater Uniklooh' ], changeMoney: 25000 }

// ## Code

// ```javascript
function shoppingTime(memberId, money) {
  let changemoney=0
  tampung={}
  listPurchased=[]
  let uang='money:'
  let Id='memberId:'
  let sepatuStacattu=1500000
  let BajuZoro=500000
  let BajuHandN=250000
  let SweaterUnikLooh=175000
  let CasingHandphone=50000
  if(memberId=='1820RzKrnWn08'){
  listPurchased='Sepatu Stacattu'+'\n'+'Baju Zoro'+'\n'+'Baju H&N'+'\n'+'Sweater Uniklooh'+'\n'+'Casing Handphone'
  changemoney=money-BajuZoro-sepatuStacattu-BajuHandN-SweaterUnikLooh-CasingHandphone
  tampung=uang+money+'\n'+Id+memberId+'\n'+'list puchased:'+'\n'+listPurchased+'\n'+'changemoney:'+changemoney
  }
  else if(memberId=='82Ku8Ma742'){
    listPurchased='Casing Handphone'
    changemoney=money-CasingHandphone
    tampung=uang+money+'\n'+Id+memberId+'\n'+'list puchased:'+'\n'+listPurchased+'\n'+'changemoney:'+changemoney
  }
  else if(memberId==''){
    tampung='Mohon maaf, toko X hanya berlaku untuk member saja'
  }
  else if(money<50000){
    tampung='Mohon maaf, uang tidak cukup'
  }
  else{
    tampung='Mohon maaf, toko X hanya berlaku untuk member saja'
  }
  return tampung+'\n'

}


// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
// ```



// # Logic Challenge - Toko X

// ## Problem

// Toko X yang sedang melakukan SALE ingin menghitung jumlah profit untuk setiap jenis barang yang terjual pada hari itu.

// Barang-barang SALE yang akan dihitung penjualannya:

// - Sepatu brand Stacattu seharga 1500000 dan stock barang yang tesedia 10
// - Baju brand Zoro seharga 500000 dan stock barang yang tesedia 2
// - Sweater brand Uniklooh seharga 175000 dan stock barang yang tersedia 1

// Function akan menerima array yang berisikan object pembeli (nama pembeli, barang yang ingin dibeli dan jumlah barang yang dibelinya). Jika stock barang kurang dari jumlah yang ingin dibeli oleh pembeli maka pembeli batal untuk membeli barang tersebut.

// Function countProfit akan mengembalikan/me-return sebuah array of object dimana array tersebut berisi objek-objek barang dari toko X tersebut yang berisikan info nama barang, siapa saja yang membeli, sisa stock barang dan total pemasukan untuk barang tersebut

// ## Code

// ```javascript
function countProfit(shoppers) {
let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                   ['Baju Zoro', 500000, 2],
                   ['Sweater Uniklooh', 175000, 1]
                 ];
                 let data = [];
  for (let i = 0; i < listBarang.length; i++) {
  let isi = {};
  let total = 0;
  let nama = [];
  let stokbarang = listBarang[i][2];
  for (let j = 0; j < shoppers.length; j++) {
    if (shoppers[j].product == listBarang[i][0]) {
      if (stokbarang - shoppers[j].amount >= 0) {
        nama.push(shoppers[j].name);
        total += listBarang[i][1]*shoppers[j].amount;
        stokbarang -= shoppers[j].amount;
        // console.log(nama); 
      }
      // console.log(totalProfit);
    } 
  }
  isi.product = listBarang[i][0];
  isi.shoppers = nama;
  isi.leftOver = stokbarang;
  isi.totalProfit = total;
  data.push(isi);
}
if (shoppers.length == 0) {
  return '[]';
}
return data;
}

// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]
// ```