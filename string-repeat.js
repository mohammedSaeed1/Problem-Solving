// Write a function that accepts a non-negative integer n and a string s as parameters, and returns a string of s repeated exactly n times.
function stringRepeat(n , s){
     if(n >= 1){
         let cartoona = ``;
       for (let i = 0; i < n; i++)
           cartoona+=s;
       return cartoona;
     }
     return '';
}
stringRepeat(7,"Mohamed");
