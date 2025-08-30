// function filterArray(numbers, value) {
//   const total = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > value) {
//       total.push(numbers[i]);
//     }
//   }
//   return total;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]



const profile = {
  username: "Jacob",
  playTime: 300,
}

changeUsername(newName)
updatePlayTime(hours)
getInfo() `${username} has ${playTime} active hours!,`



console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"
 
profile.updatePlayTime(20); 
console.log(profile.getInfo()); // "Marco has 320 active hours!"








