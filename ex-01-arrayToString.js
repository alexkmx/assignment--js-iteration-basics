/**
 * arrayToString()
 *
 * Write a function called `arrayToString` that takes
 *  an array of values and combines them into one large string.
 *
 * You must use a for-loop to solve this problem.
 **/


function arrayToString(recibirString) {

var arrayString = []
// var arraySp = sentencia.split(" ")
for(var i = 0; i < recibirString.length; i++) {
arrayString.push(recibirString[i])

}
console.log(arrayString.join(""))
return arrayString.join("")
}
  /* Your code below. Look at the console.asserts to se*/



//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
var output1 = arrayToString(["Hello", "how", "are", "you"])

var coolArr = ['cool', 'great', 'nice', 'awesome', 'sweet']
var output2 = arrayToString(coolArr)

var newArray = ['cool', 'great', 'awesome', 'super']
var output3 = arrayToString(newArray)

var coolArr3 = ['wow', 'great', 'wow', 'neat']
var output4 = arrayToString(coolArr3)

console.assert( output1 === "Hellohowareyou" )
console.assert( output2 === 'coolgreatniceawesomesweet' )
console.assert( output3 === 'coolgreatawesomesuper' )
console.assert( output4 === 'wowgreatwowneat' )
