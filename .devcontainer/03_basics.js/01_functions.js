

// function sayHi(){
//     console.log("P");
//     console.log("R");
//     console.log("A");
//     console.log("D");
//     console.log("N");
//     console.log("Y");
//     console.log("A");
// }

// sayHi()

// function add(number1,number2){
//     console.log(number1+number2);
// }

function add(number1,number2){
    // const result=number1+number2
    // return result;//  nothing will print after result, return is last keyword for any function
    return number1+number2
}
// let result=add(7,9)
// console.log("result is: "+result);
// add(7,"9") //o/p: 79

// const result=add(7,9)


function loginUserMessage(username){
    if(username===undefined){
    console.log("please enter valid use name");
    return
    }
    return `${username} just logged in`
}
 
// console.log(loginUserMessage());


// improved code
function loginUserMessage(username){
    if(!username){
    console.log("please enter valid user name");
    return
    }
    return `${username} just logged in`
}
 
console.log(loginUserMessage("Pradnya"));





