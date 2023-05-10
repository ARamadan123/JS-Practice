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
        return sum
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


async function computeResult(num1,num2,num3,num4)
{
    try{
        const result = await new Promise((resolve, reject) => add_op(resolve, reject, num1, num2));
        const result2 = await new Promise((resolve, reject) => modulus_op(resolve,reject,result,num3))
        const result3 = await new Promise((resolve, reject) => multiply_op(resolve,reject,result2,num4))
        console.log(result3)
    } 
    catch(error)
    {
        console.error(error)
    }
}

computeResult(x,y,w,z)