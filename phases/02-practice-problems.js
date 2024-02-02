
function anagrams(str1, str2) {
  if(str1.length !== str2.length) return false;
  let obj = {};
  let obj2 = {};
  for (let i = 0; i < str1.length; i++) {
    if (str1[i].includes(obj)) {
      obj[str1[i]]++;
    } else {
      obj[str1[i]] = 1; 
    }
  }

  for(let i = 0; i < str2.length; i++) {
    obj2[str2[i]] = (obj[str2[i]] || 0) + 1
  }

  let sorted = Object.keys(obj).sort();
  let sorted2 = Object.keys(obj2).sort();

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] !== sorted2[i]) return false;
    

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
