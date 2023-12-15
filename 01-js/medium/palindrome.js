/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const clrstr = str.replace(/[^a-zA-z0-9]/g,'').toLowerCase();
  for(let i =0;i<str.length/2;i++){
    if(clrstr[i]!=clrstr[clrstr.length-1-i]){
      return false;
    }
  }
  return true;
}
module.exports = isPalindrome;
