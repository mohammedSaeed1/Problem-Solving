//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function numberToReversedArr(number){
    if(number >= 0){
    let reversedArrNumber = Array.from(String(number),Number).reverse();
    return reversedArrNumber;        
    }
}
numberToReversedArr(1234);
