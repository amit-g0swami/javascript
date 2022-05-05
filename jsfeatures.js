function calculatePrice(price, taxes, description) {
    const total = price * (1 + taxes);
    console.log(`${description} with Tax: ${total}$`);
}
calculatePrice(100, 0.07, "My items");

// set default values
function calculatePriceWithDefault(price, taxes, description) {
    taxes = taxes || .05;
    description = description || "default items";
    const total = price * (1 + taxes);
    console.log(`${description} with Tax: ${total}$`);
}
calculatePriceWithDefault(100, 0, "");

// when you pass 0 in it it will switch to default value due to the operator "||" it will take it as a or

// so use nullish coalescing
// just use ?? insted of ||

function calculatePriceWithDefault(price, taxes, description) {
    taxes = taxes || .05;
    description = description || "default items";
    const total = price * (1 + taxes);
    console.log(`${description} with Tax: ${total}$`);
}
calculatePriceWithDefault(100, 0, "");

// styling your console
console.log("%cHello", "font-weight: bold; color: red");
console.log("%cred %cblue %cskip %cyellow", "color: red", "color: blue", "", "color: yellow");

// optional chaining 
const data = [{
    student: {
        name: "amit",
        roll: "122",
        address: {
            state: "delhi"
        }
    }
}]
// student && student.name && student.name.address
// if(student && student.name && student.name.address){}
// student?.name?.address

// it can also be used on functions
// data.print() --> data.printName?.()

// object shorthand
const name = "amit";
const food = "pizza";

const amit = {
    // name: name,
    // food: food,
    // key and values are same so 
    name,
    food,
}
console.log(amit)

// defer/async loading
// async vs defer 
const button = document.querySelector("button");
button.style.background = "green"

// classes in ts
// class Invoices {
//     name: String;
//     details: String;

//     constructor(a: String, b: String) {
//         this.name = a;
//         this.details = b;
//     }
//     format() {
//         return `${a} and ${b}`
//     }
// }
// const inOne = new Invoices("hello", "amit")

// ts interface vs types

// selectors in css
// div.classname
// div > next - child
// sibling are those who have same level of nesting and those who are on same level
// div.red ~ div target all the div after the div.red
// div.red + div target the only one next div after the div.red
{/* <input type="text" /> input:focus{} */ }
{/* <input required type="text" /> input:required{} */ }
// can't change the checkbox bg-color
{/* <input type="checkbox" /> input:checked{}  input:disabled{}*/ }
// li:first-child{}
// li:last-child{}
// li:nth-child(2n){}
// li:nth-last-child{}
// li:only-child{}
// div:first-of-type{}
// div:last-of-type{}
// div:only-of-type{}
// div:not(.green){}
// div.red::before{}
// div.red::after{}
// [classname]{}
// [classname="true"]{}