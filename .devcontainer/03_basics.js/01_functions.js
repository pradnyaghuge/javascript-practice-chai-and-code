

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
 
// console.log(loginUserMessage("Pradnya"));

function loginUserMessage(username="kanu"){  //default print this value otherwise new value will ovewrite while calling a function
    if(!username){
        console.log("please enter valid user name");
        return
        }
        return `${username} just logged in`
    }
     
    // console.log(loginUserMessage());

    function calculateCartPrice(...num1){
      return num1  
    }

    // console.log(calculateCartPrice("200,400,500,7000"));


    const user={
        username:"Pradnya R. Ghuge",
        price:588
    }

    // function handleObject(anyobject){
    //     console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    // }

    // console.log(user);// compulsary object hi pass krna hai


//alternate code

// passing object to function

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject({
//     username: "kanu",
//     price:878
// });


//passing array to a function

const myNewArray=[450,242,454,23244,]

function returnSecondValue(getNewArray){
    return getNewArray[1]
}
console.log(returnSecondValue(myNewArray));//one method
console.log(returnSecondValue([500,63,765,878]));// another method



    










