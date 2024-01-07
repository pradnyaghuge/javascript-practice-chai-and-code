// console.log("Date in javascript")

const myDate= new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());
// console.log(myDate.toISOString());

// let myCreatedDate =new Date(2024,0,7,5,3)

let myCreatedDate =new Date("06-15-1999")
// console.log(myCreatedDate.toLocaleString());
let myTimeStammp=Date.now()
// console.log(myTimeStammp);
// console.log(myCreatedDate.getTime());
// console.log();

// console.log(myTimeStammp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));
// console.log(Date.now()/1000);
// console.log(Math.ceil(Date.now()/1000));

const nDate=new Date()
// console.log(nDate);
// console.log(nDate.getMonth()+1);
// console.log(nDate.getFullYear());
// console.log(nDate.getDay()+1);

// `new date is the ${nDate.getDay()}`

nDate.toLocaleString("default",{
weekday:'long',
timeZone:''
})











