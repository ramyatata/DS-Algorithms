/* Reverse Vowels
 leave the consonents in place and swap the vowels(reverse)
 under linear time and constant space
 if input is ["h", "e", "i", "o", "s", "a"] output should be ["h", "a", "o", "i", "s", "e"]
*/
function ReverseVowels(arr) {
  let left = 0;
  let right = arr.length;
  let vowels = ["a", "e", "i", "o", "u"];

  while(left < right && right > 0){
    while(vowels.indexOf(arr[left]) === -1){
      left++;
    }
    while(vowels.indexOf(arr[right]) === -1){
      right--;
    }
    if(left < right){
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
  return arr;
}
SwapVowels(["h", "e", "i", "o", "s", "a"]])

//time complexity - o(n)
//space complexity - o(1)
