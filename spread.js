let arr1 = [1, 2, 3];
let arr = arr1;
arr.push(4);
console.log(arr, arr1);

let arr1 = [1, 2, 3];
let arr = [...arr1];
arr.push(4);
console.log(arr, arr1);

let obj = {
    name: "amit"
}
let obj2 = obj;
obj2.name = "new";
console.log(obj, obj2);

let obj = {
    name: "amit",
}
let obj2 = { ...obj };
obj2.name = "new";
console.log(obj, obj2);

let obj = {
    name: "amit",
    add: {
        state: "UK"
    }
}
let obj2 = { ...obj };
obj2.name = "new";
obj2.add.state = "USA";
console.log(obj, obj2);

let obj = {
    name: "amit",
    add: {
        state: "UK"
    }
}
let obj2 = { ...obj, add: { ...obj.add } };
obj2.name = "new";
obj2.add.state = "USA";
console.log(obj, obj2);

let obj = {
    name: "amit",
    add: {
        state: "UK",
        country: {
            pin: "xyz"
        }
    }
}
let obj2 = { ...obj, add: { ...obj.add } };
obj2.add.country.pin = "abc";
console.log(obj, obj2);

let obj = {
    name: "amit",
    add: {
        state: "UK",
        country: {
            pin: "xyz"
        }
    }
}
let obj2 = { ...obj, add: { ...obj.add }, country: { ...obj.add.country } };
obj2.add.country.pin = "abc";
console.log(obj);
console.log(obj2);