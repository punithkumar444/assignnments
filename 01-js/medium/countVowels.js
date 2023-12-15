/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    const clrstr = str.toLowerCase(); 
    const vowels = ["a","e","i","o","u"];
    let vowelcount =0;
    for (let i = 0;i<str.length;i++){
      if(vowels.includes(clrstr[i])){
        vowelcount++;
      } 
   }return vowelcount;
}

console.log(countVowels('hello'));
module.exports = countVowels;