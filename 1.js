//create array
// var numbers = [1, 2, 3, 4, 5];
//add push to add 6 to array
push("6");
console.log(numbers)
function push(numbersItems){
    numbers[numbers.length] = numbersItems;
}

//create array
var foods = ["pizza", "burger", "taco", "pasta"]
console.log (foods)
foods = pop();
console.log (foods)
function pop() {
    const poparray = [];
    for(let i = 0; i < foods.length - 1; i++) {
    poparray[i] = foods[i];
    }

    return poparray;
}

//define array
var fruits = ["cherry", "apple", 'peach', "orange"];
console.log(fruits);
var fruitsString = toString(fruits);
console.log(fruitsString);

function toString(arr) {
    let fruitsItems = " ";
    //create for loop
    for (let i = 0; i < arr.length; i++) {
        if (i > 0) {
            fruitsItems += ', ';
        }
        fruitsItems += arr[i];
    }
//return variable
    return fruitsItems;
}

var flowers = ["daisy", "rose", "poppy", "lily"];
console.log(flowers.join("/"));

function Join(arr) {
    let fruitsItems = " ";
    //create for loop
    for (let i = 0; i < arr.length; i++) {
        if (i > 0) {
            flowersItems += flowersItems, "/" ;
        }
        flowersItems += arr[i];
    }
//return variable
    return flowersItems;
}

var numbers = [3, 4, 5, 6, 7];
var animals = ["dog", 'cat', "lizard", "cow", "pig"];

function concat(numbersArray, animalsArray) {
    for( let i = 0; i < animalsArray.length; i++){
        push(animalsArray[i]);
    }

}