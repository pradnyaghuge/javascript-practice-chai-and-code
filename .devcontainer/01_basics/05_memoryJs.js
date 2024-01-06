// console.log("stack memory and heap meamory in javascript")

//stack memory

// premitive data types(stack memory)
// non premitive data types(heap memory)

 //stack memory ex

 let myYtname="pradnyaGhuge.com"
 let otherName=myYtname
 otherName="coding_territory"
//  console.log(otherName);
// console.log(myYtname)

let user1={
    email:"abc@google.com",
    employeeId:13315978,
    address:"banglore"
    
}

let user2=user1

user2.email="pradnya@google.com"

console.log(user1.email);
console.log(user2.email);




