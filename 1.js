function changeMe(arr) {
    // you can only write your code here!
    let y = {}
    for (let i = 0; i < arr.length; i++)
    {
        console.log(`${i + 1}. ${arr[i][0]} ${arr[i][1]}:`)
        y.firstName = arr[i][0]
        y.lastname = arr[i][1]
        y.gender = arr[i][2]
        y.age = 2020 - arr[i][3]
        if (arr[i][3] === undefined)
        {
            y.age = 'Invalid birth year'
        } 
        console.log(y)
    } 
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);
  // 1. Christ Evans:
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