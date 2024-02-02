
function anagrams(str1, str2) {
  if(str1.length !== str2.length) return false;
  let obj = {};
  let obj2 = {};

  for (char of str1) {
    obj[char] = (obj[char] || 0) + 1
  }

  for(let char of str2) {
    obj2[char] = (obj2[char] || 0) + 1
  }



  for (let key in obj) {
    if (obj[key] !== obj2[key]) return false;
  }
  return true;
    
  
  
  

}


function commonElements(arr1, arr2) {
  // Your code here 
}


function duplicate(arr) {
  // Your code here 
}


function twoSum(nums, target) {
  // Your code here 
}


function wordPattern(pattern, strings) {
  // Your code here 
}


module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];
