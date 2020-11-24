function changeMe(arr) {
    let data = [];
    let num = 1;
    for (let i = 0; i < arr.length; i++) {
        let isi = {};
        for (let j = 0; j < arr[0].length; j++) {
            if (j==0) {
                isi.firstName = arr[i][j];
            }
            else if (j==1) {
                isi.lastName = arr[i][j];
            }
            else if (j==2) {
                isi.gender = arr[i][j]
            }
            else if (j==3) {
                isi.age = 2020-arr[i][j]
                if (arr[i][j]===undefined) {
                    isi.age = "Invalid Birth Year";
                }
            }
        }
        data.push(num,isi);
        num++;
    }
    console.log(data);
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