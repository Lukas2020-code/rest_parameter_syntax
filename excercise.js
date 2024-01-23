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