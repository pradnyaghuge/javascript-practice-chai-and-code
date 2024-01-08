//singleton


const mysym= Symbol("key1")

const jsUser={
    name:"pradnya",
    age:20,
    location:"london",
    isLoggedIn:true,
    lastoggedIndays:["monday","friday"],
    "full name":"pranya ghuge",
    [mysym]:"mykey"


}

// console.log(jsUser.location)
// console.log(jsUser["full name"])
// console.log(jsUser["name"]);
// console.log(jsUser[mysym]);

jsUser.location="bay area"

// Object.freeze(jsUser)
jsUser.location="CALIFORNIA"
// console.log(jsUser.location);
// console.log(jsUser);

jsUser.greetings=function(){
    console.log("hi jsuser");
}

jsUser.greetingstwo=function(){
    console.log(`hello jsuser, ${this.name}`);
}

console.log(jsUser.greetings());
console.log(jsUser.greetingstwo());






