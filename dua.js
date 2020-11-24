let toko = [{nama:'Sepatu brand Stacattu',harga:1500000},
            {nama:'Baju brand Zoro',harga:500000},
            {nama:'Baju brand H&N',harga:250000},
            {nama:'Sweater brand Uniklooh',harga:175000},
            {nama:'Casing Handphone', harga:50000}];
function shoppingTime(memberId, money) {
    let data = {};
    let listPurchased = [];
    let m = money;
    if (memberId == 0 || memberId == undefined) {
        return "Mohon maaf, toko X hanya berlaku untuk member saja";
    }
    if (money < 50000) {
        return "Mohon maaf, uang tidak cukup";
    }
    for (let i = 0; i < toko.length; i++) {
        if (money > toko[i].harga) {
            // console.log(m+' - '+toko[i].harga)
            m-=toko[i].harga;
            listPurchased.push(toko[i].nama);
            // console.log(listPurchased)
        }
    }   
    data.memberId = memberId;
    data.money = money;
    data.listPurchased = listPurchased;
    data.changeMoney = m;
    
    return data;
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
  