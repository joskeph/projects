

console.log(`hello world`);
window.alert(`This is an alert`);


document.getElementById("h1").textContent = "Hello World This is Joseph";
document.getElementById('p').textContent = "I like pizza";

console.log(document.getElementById('h1').textContent)



let x
x= 123
console.log(x)

myAge=25
price =10.99
gpa= 4.0

console.log(`you are ${myAge} years old, your price is ${price} Dollars and your GPA is ${gpa}`)
console.log(typeof gpa)





let fn = "John"
let ln = "Doe"

console.log(typeof fn)
console.log(`your name is ${fn} ${ln}`)
let email = "bro1234@gmail.com"
console.log(`your email is ${email}`)


let online = true
console.log(typeof online)
console.log(`online: ${online}`)



let forSale = false
console.log(`is this car for sale: ${forSale}`)
let isEnrolled = false
console.log(`Enrolled: ${isEnrolled}`)

let fullName = "John Doe";
let age= 25;
let student = true;
document.getElementById('p1').textContent= `Your name is ${fullName}`;
document.getElementById('p2').textContent= `Your age is ${age}`;
document.getElementById('p3').textContent=`Enrolled ${student}`;

// Arithematic operators

x= Math.random()*100
t = x *100;
console.log(t)

let students = 25
students = students+1;
students = students-1;
students = students*2;
students = students/3;
students = students ** 2;
x = students%2;
console.log(students)
//Augemnted assignment


students = 30
students**=2;
students*=2;
students/=2;
students+=2;
students-=2;
students%=123;

students++
student--

console.log(students)

let username = window.prompt("What is your name?");
console.log(username)
let username
document.getElementById("submit").onclick=function(){
    username=document.getElementById('inp').value;
    console.log(username)
}
let username
document.getElementById("submit").onclick=function(){
    username=document.getElementById('inp').value;
    document.getElementById('h1').textContent=`Hello ${username}`
}

//Type conversion
let age = window.prompt("How old are you ?")
age= Number(age)
age+=1
console.log(age,typeof age)

// type casting 
let x
y=x
z=x

x= Number(x)
y= String(y)
z=Boolean(z)
console.log(x,typeof x)
console.log(y,typeof y)
console.log(z,typeof z)

const PI = 3.14159
let radius ;

document.getElementById('btn').onclick = function(){
    radius = document.getElementById('inp').value
    radius=Number(radius)
    let circumference = 2*PI*radius
    document.getElementById('h3').textContent=`${circumference} cms`
}



console.log(Math.E)
console.log(Math.PI)


x=3.21
y=4.73
z=Math.round(x)
console.log(z)
console.log(Math.floor(x))
console.log(Math.ceil(x))
console.log(Math.trunc(y))


x= 3
y=2
z= 10
console.log(Math.pow(x,y))
console.log(Math.sqrt(x))
console.log(Math.log(10))
console.log(Math.sin(Math.PI/6))
console.log(Math.cos(Math.PI/3))
console.log(Math.abs(-3.21))
console.log(Math.sign(-2342))
console.log(Math.max(x,y,z))
console.log(Math.min(y,z,x))




min = 50
max= 100

console.log(min+Math.random()*(max-min))




document.getElementById("roll").onclick= function(){
    let rand1 = Math.ceil(Math.random()*6)
    let rand2 = Math.ceil(Math.random()*6)
    let rand3 = Math.ceil(Math.random()*6)
    document.getElementById('h1').textContent = `${rand1} ${rand2} ${rand3}`
}


age = 19

if (age>18){
    console.log("yu are old enough")
}
else{
    console.log("you must be 18+ to enter this site")
}



age= 90
if (age>=100){
    console.log("you are too old to enter this site")
}
else if (age>=18){
    console.log("You are old enough to enter this site")
    
}else if (age<0){
    console.log("Age cannot be negative")
}
else{
    console.log("You are not old enough to enter")
}


let age = 11

age>=18?console.log("18+"):console.log("<18")

let age = 11

let message = age>=18?"You are fine to Enter":"You are not fine to enter";

console.log(message)

let time = 6;
let greeting = time<12?"Good Morning":"Good afterNoon";
console.log(greeting)


let isStudent=true
let message = isStudent?"You are a student":"You are not a student";
console.log(message)




let amount= 10

let discount = amount>=100?0.1*amount:0;

console.log(`Your total Amount is $${amount-discount}`)







let day ="pizza"
let dn
switch(day){
    case 1:
        dn="Monday"
        break;

    case 2:
        dn="Tuesday"
        break;
    case 3:
        dn="Wednesday"
        break;
    case 4:
        dn= "Thursday"
        break
    case 5:
        dn="Friday"
        break;
    case 6:
        dn="Saturday"
        break;
    case 7:
        dn="Sunday"
        break;
    default:
        console.log(`${day} is not a day`)
    

}
console.log(dn)








let score= 55
let l
switch(true){
    case score>=90:
        l="A"
        break;
    case score>=80:
        l='B'
        break;
    case score>=70:
        l='C';
        break;
    case score>=60:
        l='D'
        break;
    default:
        l='F'
}
console.log(`Your grade is ${l}`)

let username = "     JosephSony"
console.log(username.charAt(6));
console.log(username.indexOf('S'))
console.log(username.length)
console.log(username.trim())
console.log(username.toLowerCase())
console.log(username.toUpperCase())
console.log(username.repeat(5))
console.log(username.startsWith(" "))
console.log(username.endsWith("y"))

let phone='12312-132';
phone=phone.padEnd(20,'0')
console.log(phone)


let full = "Joseph Sony"
let fn= full.slice(0,(full.indexOf(" ")))
console.log(fn)


let full = "Joseph Sony"
let fn= full.slice((full.indexOf(" ")+1))
console.log(fn)
console.log(full.slice(-2))






let email= "joskeph@gmail.com"
let username=email.slice(0,email.indexOf("@"))
let prov = email.slice(email.indexOf("@")+1)
console.log(email,username,prov)


let un = (window.prompt("Enter Un")).trim()
un=un.charAt(0).toUpperCase()+un.slice(1).toLowerCase()
console.log(un)



const temp = 5

if(temp<0 || temp>=30){
    console.log("weather is bad")
}else{
    console.log("weather is good")
}




let sunny = false
if(!sunny){
    console.log("is cloudy?")
}

let un = ""

do{
    un= window.prompt("Enter username")
}while (un==="" || un===null)
console.log(un)
let un = ""

while (un==="" || un===null){
    un= window.prompt("Enter username")
}
console.log(un)


for(let i=10;i>0;i-=1){
    console.log(i)
}
console.log("Happy new year")


function wish(name,age,times){
    for(let i=0;i<(times+1);i++){
        console.log(`happy birthday ${name}`)
       
    } 
    console.log(`you are ${age } years old`)
}
wish("Joseph",10,10)


function isEven(int){
    return int%2===0?true:false
}
console.log(isEven(11))


let email="bro@fake.com"

function isEmail(e){
    return e.includes('@')?true:false;
}
console.log(isEmail("hi@joskeph.com"))