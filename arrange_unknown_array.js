let dataone = [
    { name : "Bob", age : 21, job : ""},
    { name : "John", age : 24, job : "Developer"},
    { name : "Sam", age : 25, job: "Designer"}
];

let datatwo = [
    { name : "Bob", address : "South A"},
    { name : "Sam", address : "South B"},
    { name : "John", address : "South C"},
    { name : "Sow", address : "South D"}
];

let howTo = [ "name", "age", "job", "address" ];// how to arange the result

//_______________METHOD ONE___________________________//________By ME______
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
          }
        }
  
        finalData.push(combinedUser);
      }
    }
  
    return finalData;
  }

  console.log(arrangeDataMethodTwo(dataone, datatwo, howTo));