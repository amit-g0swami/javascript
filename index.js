console.log("hello js");
// node intro.js for run this file 

// declare  variable 
let a;
// it does not have any type 
console.log(a);
let b = 10;
a = null;
console.log(b);

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i, "is even");
    }
}

let testNumber = 5;
let flag = true;
for (let div = 2; div < testNumber; div++) {
    if (testNumber % div == 0) {
        flag = false;
        break;
    }
} if (flag == true) {
    console.log(testNumber, "is a prime number");
} else {
    console.log(testNumber, "is not prime number");
}

function main() {
    console.log("hello");
}
main();

function addTwonumbers(a, b) {
    console.log(a + b);
}
addTwonumbers(23, 24);

function passParam(param) {
    console.log(param);
}
passParam("this is params");

function returnSomething(param) {
    return param;
}
let r = returnSomething(["this is return"]);
console.log(r)

// any type can be returned 
function noReturnType() {
    let rval = Math.random() > 0.5 ? true : "less than 0.5";
    return rval;
}
let ans = noReturnType();
console.log(ans);

// objects 
let obj = {
    name: "amit",
    sirname: "kumar",
    addName: function addName() {
        console.log(this.name, this.sirname);
    }
}
obj.addName();

obj.name = "amir";
console.log(obj.name)

// add a new key 
console.log(obj);
console.log("...............................................");
obj.address = ["2", "1"];
console.log("...............................................");
console.log(obj);
console.log("...............................................");

// delete from object 
delete obj.sirname;
console.log(obj);
console.log("...............................................");
for (let key in obj) {
    console.log(key, " : ", obj[key])
}

let propKey = "name"
// obj.name and obj["name"] and obj[propKey] are same ;
console.log(obj.name, obj[propKey], obj["name"]);

// arrays 
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(arr, arr.length);

let i = 1;
while (i <= arr.length) {
    console.log("at index ", i, "element is ", arr[i - 1]);
    i++;
}
arr.push(11);
console.log(arr);
// add in front 
arr.unshift(0);
console.log(arr);

// remove from first 
arr.shift();

// remove from last 
arr.pop()
console.log(arr);

// slice 
// from beg to end it print the array 
// does not splice change actual array 
let arr2 = arr.slice(2, 5)
console.log(arr2);

// splice change actual array
// here 5 is the number of count after index 2 which have to be removed 
arr.splice(2, 5);
console.log(arr)

console.log(arr.indexOf(1));

// string : single quote string
let string = 'amit kumar';
let string1 = "hello";
console.log(string, string1);

let charAt = string.charAt(3);
let subString = string1.substring(2, 4);
let asciCode = string.charCodeAt(3);
let split = string.split(" ");
let arrJoin = split.join("$")
console.log(charAt, "asci code is : ", asciCode, subString, split, arrJoin);

let search = "how to google it";
let split1 = search.split(" ");
let join1 = split1.join("+");
console.log(join1);