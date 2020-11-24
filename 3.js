function countProfit(shoppers) {
    let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                       ['Baju Zoro', 500000, 2],
                       ['Sweater Uniklooh', 175000, 1]
                     ];
    // you can only write your code here!
    let x = []
    let z = []
    for(let i = 0; i < listBarang.length; i++)
    {
      // console.log(listBarang[i])
      let y = {product: '',
               shoppers: [],
               leftOver: 0,
               totalProfit: 0
              }
      y.product = listBarang[i][0]
      let a = 0
      let b = 0
      for (let j = 0; j < shoppers.length; j++)
      {
        // console.log(shoppers[j])
        // console.log(listBarang[i][0])
        // console.log(shoppers[j].product + '<<<<<')
        if (listBarang[i][0] === shoppers[j].product && listBarang[i][2] >= shoppers[j].amount && (b += shoppers[j].amount) <= listBarang[i][2])
        {
          y.shoppers.push(shoppers[j].name)
          a += shoppers[j].amount
        }
        if (listBarang[i][2] >= a)
        {
          y.leftOver = listBarang[i][2] - a
          y.totalProfit = listBarang[i][1] * a
        }
      }
        // console.log(y)
        if (shoppers.length === 0)
        {
          return x
        } else
        {
          x.push(y)
        }
    } return x
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
  