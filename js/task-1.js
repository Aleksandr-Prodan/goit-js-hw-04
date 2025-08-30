// function slugify(title) {
//     return title.toLowerCase().split(" ").join("-");
// };

// console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
// console.log(slugify("English for developer")); // "english-for-developer"
// console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript" 
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"

function isEnoughCapacity(products, containerSize) {
    products це обєкт(назви товарів - значення кількість товарів)
    containerSize це число(максимальна кількість одиниць товарів)
    if (condition) {
        
    }
    return 
}



console.log( isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8) ); // true
console.log( isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12) ); // false
console.log( isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14) ); // true
console.log( isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7) ); // false