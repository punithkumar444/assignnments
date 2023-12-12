/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

// function isAnagram(str1, str2) {
//   let n1 = str1.length;
//   let n2 = str2.length;
//   if(n1!=n2){
//     return false;
//   }
//     str1.sort();
//     str2.sort();
//   for(let i = 0; i <n1 ;i++){
//     if(str1[i]!=str2[i]){
//       return false;
//     }
//   }return true;
// }
function isAnagram(str1, str2) {
  const cleanString = (str) => str.replace(/\s/g, '').toLowerCase();

  const cleanStr1 = cleanString(str1);
  const cleanStr2 = cleanString(str2);

  const sortedStr1 = cleanStr1.split('').sort().join('');
  const sortedStr2 = cleanStr2.split('').sort().join('');

  return sortedStr1 === sortedStr2;
}
// let a = rap;
// let b = par;
 console.log(isAnagram('listen','silent'));

module.exports = isAnagram;

module.exports = isAnagram;
