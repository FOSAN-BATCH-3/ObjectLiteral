function shoppingTime(memberId, money) {
    if (!memberId) {
        return `Mohon maaf, toko X hanya berlaku untuk member saja`
    }
    if (money < 50000) {
        return `Mohon maaf, uang tidak cukup`
    }
        let produk = [
            { item: 'Sepatu Stacattu', harga: 1500000 },
            { item: 'Baju Zoro', harga: 500000 },
            { item: 'Baju H&N', harga: 250000 },
            { item: 'Sweater Uniklooh', harga: 175000 },
            { item: 'Casing Handphone', harga: 50000 },
        ]
        let tampung = {}       
        tampung.memberId = memberId
        tampung.money = money
        let barang = []
        for (let i = 0; i < produk.length; i++) {
            if (money >= produk[i].harga) {
                barang.push(produk[i].item)
                money -= produk[i].harga
            }
        }
        tampung.listPurchased = barang
        tampung.changeMoney = money
        return tampung
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
