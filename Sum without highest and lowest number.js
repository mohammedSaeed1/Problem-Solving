/*
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
Mind the input validation.
*/
function sumWithoutHighestAndLowest(arr){
  if(arr != null){
    let sum = 0 , max , min;
    for (let i = 0; i < arr.length; i++) {
      max = Math.max(...arr);
      min = Math.min(...arr);
      }        
      const filteredArray = arr.filter(number => number!=max && number!=min);
       for (let i = 0; i < filteredArray.length; i++) {
      sum += filteredArray[i];
       }
       console.log(sum);
  }
  else{
    return 0;
  } 
     
}
const arr = [10,20,30,40];
sumWithoutHighestAndLowest(arr);



