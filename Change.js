function changeMe(arr) {
    if (!arr.length) console.log('""')

    let d = new Date();
    let y = d.getFullYear()
    for (let i = 0; i < arr.length; i++) {
        let usia = 0
        if (arr[i][3] < y) {
            usia = y - arr[i][3] - 1
        } else {
            usia = 'Invalid Birth Year'
        }
        console.log(i + 1 + '. ' + arr[i][0] + ' ' + arr[i][1] + ':')
        let tampung = {
            firstName: arr[i][0],
            lastName: arr[i][1],
            gender: arr[i][2],
            age: usia
        }
        console.log(tampung)
    }
  }
  
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 

changeMe([]); // ""