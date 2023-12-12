function isAnagram(str1, str2) {
    let n1 = str1.length;
    let n2 = str2.length;
    if(n1!=n2){
      return false;
    }
    for(let i = 0; i <n1 ;i++){
      if(str1[i]!=str2[n1-i-1]){
        return false;
      }
    }return true;
  }

  console.log('hell0');
  console.log(isAnagram('rap','par'));