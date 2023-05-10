// solve the equation ( ( 5 + 4 ) % 2 ) * 3

/*
    STEPS:
        1) create a promise which computes 5 + 4
            a) if successful move on to next operation
            b) if fails throw an exception
        2) do % 2 operation and repeat steps a and b
        3) chain the .then
*/


// Global Error Flag
var error = 0;

function add_op(resolve,reject,num1,num2)
{    
    // compute the sum first
    var sum = num1 + num2;
   
    // pass the sum to resolve
    if (!error) {
        resolve(sum);
    } else {
        reject("Cannot Add")
    }
}
function modulus_op(resolve,reject,result,modulu)
{
   // compute the modulus second
    var mod = result % modulu;
    if (!error) {
        resolve(mod)
    } else {
        reject("Cannot Modulus")
    }
}
function multiply_op(resolve,reject,result,operand)
{
    // compute the product last
    var product = result * operand
    if (!error) {
        resolve(product)
    } else {
        reject("Cannot Multiply")
    }
}

// Enter equation numbers
const x = 5, y = 4, w = 2, z = 3;




new Promise((resolve, reject) => {add_op(resolve, reject, x, y)})
.then(  (result) => {
            return new Promise((resolve,reject) => {modulus_op(resolve,reject,result,w)})
        }, 
        // in case of error
        (msg) => console.log(msg))
.then ( (result) => {
            return new Promise((resolve,reject) => multiply_op(resolve,reject,result,z))
        }, 
        // in case of error
        (msg) => console.log(msg))
.then(
    // log final answer
    (answer) => console.log(answer), 
    // in case of error
    (msg) => console.log(msg))
