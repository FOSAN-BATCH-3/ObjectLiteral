function changeMe(arr) {
if (arr.length== 0){
    console.log ("")
}
for (let i=0; i < arr.length; i++ )
    {   let x = {}
        x.firstname = arr[i][0]
        x.lastname = arr[i][1]
        x.gender = arr[i][2]
        x.age = (2020 - arr[i][3])
        if (arr[i][3] === undefined )
                    { x.age = 'Invalid Birth Year'
                    }
        console.log(`${(i+1)}. ${x.firstname}  ${x.lastname}`)
        console.log(x) 
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
