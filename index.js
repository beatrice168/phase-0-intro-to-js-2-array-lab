// Write your solution here
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
  }
  

  function destructivelyRemoveLastCat(cats) {
    cats.pop();
  }
  function destructivelyRemoveLastCat() {
    if (cats !== undefined) {
      cats.pop();
    }
  }
  function destructivelyRemoveFirstCat(cats) {
    if (cats !== undefined)
    cats.shift(); // Removes the first element from the cats array
    return cats;
    
  }

  function destructivelyRemoveFirstCat() {
  cats.shift();
}
function appendCat(name){
let newCat =[...cats, name ]
return newCat;
}
function prependCat(name) {
    return [name, ...cats]
}


function removeLastCat(cats) {
    const newCats = cats.slice( cats.length - 1);
    return newCats;
  }
  function removeLastCat() {
    return cats.slice(0, -1);
  }
  
const newCats = removeFirstCat(cats);
console.log(newCats); 


   
  
function removeFirstCat(cats) {
    const newCats = [...cats];
    newCats.shift();
    return newCats;
  }
  function removeFirstCat(cats) {
    if (!cats || !cats.length) {
      return [ "Otis", "Garfield"]; // return an empty array if cats is undefined or empty
    }
  
    // create a new array with all elements of cats except the first one
    const newCats = cats.slice(1);
  
    return newCats;
  }
  

  