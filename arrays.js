// Arrays Assignment
var breads = ["Sourdough", "White", "Wheat", "Cinnamon Raisin"];
var years = [1994, 2008, 2018, 2021]
var personsOnline = [true, false, false, true]

// using the pop array method, this will remove the last element on the breads array
breads.pop();
console.log(breads)

//using the push array method, this will add an element to the end of the years array
years.push (2023)
console.log(years)

// using the shift array method, this removes teh first element in the personsOnline array
personsOnline.shift();
console.log(personsOnline)

//Index Positions Explanations + Demostrations
// In javascript or in many coding languages, each element in an array has a designated index position. In most coding languages
// the index positions begin with the first element being 0. To find out what position an element is in, you can use the example down below
// using the breads variable above!

console.log(breads[0])

// This would print out the element with the designated index value of 0 when run in terminal. In this example, the result should be 
// sourdough, since this is in the first position which has an Index number of 0.