//______________________example data one______________________________
// let dataone = [
//     { name : "Bob", age : 21, job : ""},
//     { name : "John", age : 24, job : "Developer"},
//     { name : "Sam", age : 25, job: "Designer"}
// ];

// let datatwo = [
//     { name : "Bob", address : "South A"},
//     { name : "Sam", address : "South B"},
//     { name : "John", address : "South C"},
//     { name : "Sow", address : "South D"}
// ];

//______________________example data two______________________________
const dataone = [
  { name: "Bob", age: 21 },
  { name: "John", age: 24, job: "Developer" },
  { name: "Sam", age: 25, job: "Designer" },
  { name: "Alice", age: 30, job: "Engineer" },
  { name: "Emily", age: 27, job: "Teacher" },
  { name: "David", age: 35, job: "Manager" },
  { name: "Sarah", age: 29, job: "Doctor" },
  { name: "Tom", age: 32, job: "Salesperson" },
  { name: "Olivia", age: 26, job: "Writer" },
  { name: "Michael", age: 28, job: "Artist" }
];

const datatwo = [
  { name: "Bob", address: "South A" , phone : '0923435'},
  { name: "Sam", address: "South B" },
  { name: "John", address: "South C" , phone : '0923435'},
  { name: "Michael" , phone : '0923435'},
  { name: "Alice", address: "South E" , phone : '0923435'},
  { name: "Emily", address: "South F" , phone : '0923435'},
  { name: "David", address: "South G" , phone : '0923435'},
  { name: "Sarah", address: "South H" , phone : '0923435'},
  { name: "Tom", address: "South I" },
  { name: "Olivia", address: "South J" }
];

// how to arange the result
let howTo = [ "name", "age", "phone", "job", "address" ];

//_______________METHOD ONE___________________________//________By ME______
//__rules is must be arrays for all args(must give)__the third is how to arrange and it's first arg must be common key
function arrangeDataMethodOne(dataone, datatwo, howTo){
    let finalData = [];
    let xKey = howTo[0];
    for( let i = 0; i < dataone.length; i++){
        for(let q = 0; q < datatwo.length; q++){
            if(dataone[i][xKey] === datatwo[q][xKey]){
                let user = {};
                for( let x = 0; x < howTo.length; x++ ){
                    user[howTo[x]] = dataone[i][howTo[x]] ? dataone[i][howTo[x]] : datatwo[q][howTo[x]];
                }
                finalData[i] = user;
            }
        }
    }
    return finalData;
}
//______________try here______________
console.log(arrangeDataMethodOne(dataone, datatwo, howTo));


//_______________METHOD TWO___________________________//___Provided by chat GPT______
function arrangeDataMethodTwo(dataone, datatwo, howToArr) {
    let finalData = [];
  
    const commonKey = howToArr[0];
  
    for (let i = 0; i < dataone.length; i++) {
      const userOne = dataone[i];
      const commonValue = userOne[commonKey];
      const userTwo = datatwo.find(user => user[commonKey] === commonValue);
  
      if (userTwo) {
        let combinedUser = {};
  
        for (let j = 0; j < howToArr.length; j++) {
          const key = howToArr[j];
  
          if (userOne.hasOwnProperty(key)) {
            combinedUser[key] = userOne[key];
          } else if (userTwo.hasOwnProperty(key)) {
            combinedUser[key] = userTwo[key];
          } else {
            combinedUser[key] = "Not summited"; // can be modified what to be shown
          }
        }
  
        finalData.push(combinedUser);
      }
    }
  
    return finalData;
}
// ______________try here________________
// console.log(arrangeDataMethodTwo(dataone, datatwo, howTo));