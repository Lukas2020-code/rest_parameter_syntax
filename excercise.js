// 1. Create a variable named: moreMixedLetters using the keyword let
// 2. Assign an array to the variable moreMixedLetters which should be a copy of the array mixedLetters and then the following values: 'h', 'k', 'g', 'j', 'i', 'l'  (note steps 1 and 2 should be done on a single line) 
// 3. log out moreMixedLetters
// 4. Create a variable named: updateSortReverse using the keyword const
// 5. Assign the variable updateSortReverse an arrow function 
// 6. The arrow function should take two parameters one named: arr and another named: letters which should use the rest parameter syntax 
// 7. This arrow function should combine all the argument passed in into a single array and sort them and reverse them and then return this array
// 8. Create a variable named reverseSort using the keyword let
// 9. Variable reverseSort should be assigned the return value from calling the updateSortReverse function passing in the moreMixedLetters array and the string values: 'n', 'm', 'o'
// 10. log out the variable reverseSort to see its value
// 11. log out the variable mixedLetters to see that it has not been changed if you have done everything correctly

let mixedLetters = ['b', 'd', 'a', 'c', 'f', 'e'];
let moreMixedLetters = [...mixedLetters, 'h', 'k', 'g', 'j', 'i', 'l']
console.log(moreMixedLetters)

const updateSortReverse = (arr, ...letters) => {
    let chars = arr
    for (let i of letters) {
        let char = i
        chars.push(char)
    }

    chars.sort();
    chars.reverse();
    return chars
}

let reverseSort = updateSortReverse(moreMixedLetters, 'n', 'm', 'o');
console.log(reverseSort)
console.log(mixedLetters)



let mixedLetters2 = ['b', 'd', 'a', 'c', 'f', 'e'];

let moreMixedLetters2 = [...mixedLetters, 'h', 'k', 'g', 'j', 'i', 'l'];

console.log(moreMixedLetters2);

/* How i envision students doing this challenge 

const updateSortReverse =  (arr, ...letters) => {
    let copy = [...arr];
    for(let i of letters) {
        copy.push(i);
    }
    
    return copy.sort().reverse();
};
*/

const updateSortReverse2 = (arr, ...letters) => [...arr, ...letters].sort().reverse();

let reverseSort2 = updateSortReverse2(moreMixedLetters2, 'n', 'm', 'o');
console.log(reverseSort2);
console.log(mixedLetters);