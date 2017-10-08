// ex-04 makeAcronym()

//
// Write a function called makeAcronym() that converts a name like Portable Network Graphics
// to its acronym (PDF).
//
// makeAcronym('PNG')
//  => 'PDF'



function makeAcronym(outputAcronym) {
//  Primero romper en palabras
// console.log(outputAcronim.charAt(0));
var nuevaCadena = []
var siglas = []

for( var i = 0; i < outputAcronym.length; i++) {
var romper = outputAcronym.split(" ")
}
for(var i = 0; i < romper.length; i++) {
  nuevaCadena.push(romper[i].charAt().toUpperCase())
}
for(var i = 0; i < nuevaCadena.length; i++ ) {
  siglas.push(nuevaCadena[i])
}
// console.log("'" + nuevaCadena.join('').toString() + "'");
return "'" + nuevaCadena.join('').toString() + "'"
}






//*~*~*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

console.assert( makeAcronym('Wortable Document Format Object') === 'WDFO' );
console.assert( makeAcronym('Portable Document Format') === 'PDF' );
console.assert( makeAcronym('be right back') === 'BRB' )
console.assert( makeAcronym('National Broadcasting Company') === 'NBC' )
console.assert( makeAcronym('Department of Defense') === 'DOD' )

//Explorer Mode -- pass the argument a true/false value to
//                 capture prepositions or not.
// ---------------------------------------------------
// console.assert( makeAcronym('president of the United States', true) === 'POTUS' )
// console.assert( makeAcronym('greatest of all time', true) === 'GOAT' )
// console.assert( makeAcronym('earnings before insurance taxes depreciation and amortization', false) === 'EBITDA' )
// console.assert( makeAcronym('National Association for the Advancement of Colored People', false) === 'NAACP' )
