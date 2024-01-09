// console.log('hi')

// const myObj=new Object()


const tinderUser={}

tinderUser.id="123ghj"
tinderUser.name="anuv"
tinderUser.city="delhi"
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const bumbleUser={
    email: "abc@123.com",
    fullname:{
        userName:{
            first:"salman",
            last:"khan"
        }
    }
}

// console.log(bumbleUser.fullname.userName.first);

const obj1={ a:"1",b:"2"}
const obj2={ c:"3",d:"4"}
const obj3={ e:"5",f:"6"}

// const obj3= { obj1,obj2}
// const obj=Object.assign({},obj1,obj2,obj3)// {} acts as a target all elemrnt will copy only this target
// console.log(obj);

const obj10= {...obj1,...obj2,...obj3}
// console.log(obj10); // most used method :)

const users=[
    {
        id:"7687gh",
        email:"hotmail.com"
    }, {
        id2:"768gh",
        email2:"hotmail.com"
    }, {
        id3:"7687g",
        emai3:"hotmail.com"
    },
    
]


users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));



console.log(tinderUser.hasOwnProperty("city"));//true
console.log(tinderUser.hasOwnProperty("city"));//false












