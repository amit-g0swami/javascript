// let arr = [1, 2, 3];
// console.log(arr[0]);
// let [a, b, c] = arr;
// let [a, , c] = arr;
// let [a, b, c, d] = arr;
// let [a, b, c, d = "extra"] = arr;
// console.log(a, b, c, d);

// in object 
let obj = {
    name: "amit",
    state: {
        add: {
            code: "abc"
        }
    }
}
// let { name, state } = obj;
// let { name: firstname, state: userstate } = obj;
// console.log(firstname, userstate);

let { state: { add: { code: cd } } } = obj;
console.log(cd)
