const myData = {
    category: "Food",
    items: [
        {
            name: "Pizza",
            price: 10,
            ingredients: {
                dough: "Wheat",
                cheese: "Mozzarella",
                toppings: ["Pepperoni", "Olives"]
            }
        },
        {
            name: "Burger",
            price: 8,
            ingredients: {
                bun: "Sesame",
                cheese: "Cheddar",
                toppings: ["Lettuce", "Tomato", "Onion"]
            }
        },
        {
            name: "Pasta",
            price: 12,
            ingredients: {
                pastaType: "Penne",
                sauce: "Tomato",
                extras: ["Parmesan", "Basil"]
            }
        }
    ]
};


// array desstructuring 
const [x , y , z] = myData.items;

// console.log(x,y,z);


// Object destructuring 

// const {name ,price} = z ;
// const {name ,price} = y ;
// const {name ,price} = x ;
// const {name ,price} = myData.items[0] ;
// const {name ,price} = myData.items[1] ;
const {name ,price} = myData.items[0] ;
// console.log(name , price)/


const {bun , cheese , toppings} = y.ingredients;
console.log(bun , cheese)
