const publicInfo = [
    { id: 1, name: "John", age: 25, city: "New York" },
    { id: 2, name: "Sara", age: 22, city: "London" },
    { id: 3, name: "Mike", age: 30, city: "Toronto" },
    { id: 4, name: "Emma", age: 28, city: "Paris" },
    { id: 5, name: "David", age: 35, city: "Berlin" },
    { id: 6, name: "Sophia", age: 21, city: "Rome" },
    { id: 7, name: "James", age: 40, city: "Tokyo" },
    { id: 8, name: "Olivia", age: 27, city: "Sydney" },
    { id: 9, name: "Liam", age: 32, city: "Dubai" },
    { id: 10, name: "Isabella", age: 26, city: "Amsterdam" },
    { id: 11, name: "Noah", age: 23, city: "Barcelona" },
    { id: 12, name: "Ava", age: 29, city: "San Francisco" }
];

// arrayOfObjects.forEach((items)=>console.log(items))  

let myArray = publicInfo.filter((items) => {
    if (items.age > 27) {
        return items
    }
})

// myArray.forEach((myItems) => console.log(myItems.name));


// we can use map() , when creates a new array by transforming each element in the original array.

let myName = myArray.map((items) => `${items.name}`)
// console.log(myName);

let myAge = myArray.map((items) => items.age)
// console.log(myAge);


// Reduces the array to a single value by applying a function to each element. we can normal oparation with reduces.

let totalAge = myAge.reduce((add, item) => add + item, 0)
// console.log(totalAge)




// Finds and returns the first element that satisfies a condition.

let findItem = publicInfo.find((item) => {
    if (item.name.includes('Emma')) {
        return item
    }
})

// console.log("find value = " , findItem)

// Sorts the elements of the array based on a comparison function.

// To sort a JavaScript array, you can use the sort() method. This method sorts the elements of an array in place, meaning it changes the original array. The default sort order is in ascending order, which is suitable for sorting strings. For sorting numbers, you need to provide a compare function.


let sortAge = publicInfo.sort((info1, info2) => info1.age - info2.age);
console.log(sortAge)

let sortId = publicInfo.sort((id1 , id2)=> id2.id - id1.id);

console.log(sortId)

