function getCountNumOfSheep(arr){
    let count = 0;
    if(arr !== null && arr !== undefined){
      for(let i = 0; i <arr.length ; i++){
        if(arr[i] === true)
        count++;    
      }
      console.log("count= ",count);
    }
    
}
const ar = [] ;
  getCountNumOfSheep(ar);