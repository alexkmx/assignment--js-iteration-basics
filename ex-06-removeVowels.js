/**
 * removeVowels()
 *
 * Write a function called `removeVowels()`.
 * It should accept a string as input,
 * and it should return a new string without the vowels.
 *
*/
function removeVowels(cadena) {

var newString = []

for(var i = 0; i < cadena.length; i++) {
var vowel = cadena[i]
if (vowel !='a' && vowel !== 'A' && vowel !== 'e' && vowel !== 'E' && vowel !== 'i' && vowel !== 'I' && vowel !== 'o' && vowel !== 'O' && vowel !== 'u' && vowel !== 'U' ) {
newString.push(vowel)
}
}
console.log(vowel);
return newString.join("")
}







//*~*~*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

console.assert( removeVowels('milk') === 'mlk' );
console.assert( removeVowels('christmas') === 'chrstms' )
console.assert( removeVowels('moo shoo pork') === 'm sh prk' )

//should handle capital letters
console.assert( removeVowels('Out of Order') === 't f rdr' )
console.assert( removeVowels('Estados Unidos') === 'stds nds' )
