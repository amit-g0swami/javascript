let cal = require("child_process");
console.log("trying to open calculator");
// cal.execSync("calc");
// cal.execSync("code");
// cal.execSync("start chrome https://www.google.com");
let output = cal.execSync("node abc.js");
console.log("output is " + output);
console.log("calculator opened");
