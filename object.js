// change me 

function changeMe (arr){
    let x = {};
    let no = 1;
    for(let i = 0; i < arr.length; i++){
        console.log(`${no++}. ${arr[i][0]} ${arr[i][1]} :`);
        x.firstName = arr[i][0];
        x.lastName = arr[i][1];
        x.gender = arr[i][2];
        if(arr[i][3]){
            x.age = 2020-arr[i][3];
        }
        
        else{
            x.age = 'Invalid Birth Year';
            
        }
        console.log(x);
    }
}



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


// shopping time

function shoppingTime(memberId, money) {
    if(memberId != ''){
        return 'Mohon maaf, Toko X hany berlaku untuk member saja'
    }
    
  }