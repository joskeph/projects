

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



let fruits=['apple','orange',"jackfruit","banana"]
console.log(fruits)
console.log(fruits[3])

fruits[4]="coconut"
console.log(fruits)

fruits.push("grapes")
console.log(fruits)
fruits.pop()
fruits.unshift("mango")


console.log(fruits)
fruits.shift()
console.log(fruits.length)
let i = fruits.indexOf("coconut")
console.log(i)
console.log(fruits.indexOf("karikku"))
console.log(fruits)

let fruits= [1,2,2,3,4]

for(let i=0; i<fruits.length;i++){
    console.log(fruits[i])
}

let fruits = ['orange', 'apple',"bananna"]
for(let i in fruits){
    console.log(i)
}

for(let fruit of fruits){
    console.log(fruit)
}





let fruits = ['orange', 'apple',"bananna"]
fruits.sort()
fruits.sort().reverse()
console.log(fruits)




let numbers = [1,2,3,4,5]
// let max = Math.max(numbers) // NaN
let max = Math.max(...numbers)
let min = Math.min(...numbers)
console.log(min)
console.log(max)


let username = "joseph Sony";

let arr1= [...username]

let arr1= [...username].join("-")

console.log(arr1)



let fruits= ["apple","orange","banana"]


let newfr = [...fruits]
console.log(fruits,newfr)



let fruits= ["apple","orange","banana"]
let veg = ["carrots","celery","potato"]

let foods = [...fruits,...veg,"water","eggs"]
console.log(foods)


//Rest parameter

const food1="pizza"
const food2="sushi"
const food3="al-faham"
const food4="butter-chicken"

function printfood(...arr){//rest-paramater
    console.log(...arr)//spread operator
}
printfood(food1,food2,food3,food4)

let f1='egg'
let f2="noodle"
let f3="food3"
let f4= "food4"
function pack(...params){
    return(params)
}

let t=pack(f1,f2,f3,f4)
console.log(t)




//sum of n numbers

function sum(...nums){
    let s=0
    for(let i of nums){
        s+=i
    }
    return s
}
console.log(sum(1,2,3,4,5,6))



//get avg
function avg(...nums){
    let s=0
    for(let i of nums){
        s+=i
    }
    return s/nums.length
}
console.log(avg(1,2,3,4,5,))



//rest to cmbine strings

function combine(...stringArr){

    
    let s=""
    for(let i of stringArr){
        s+=i+" "
    }
    return s
}
console.log(combine("Mr","Joseph","Sony","III"))


//rest to cmbine strings

function combine(...stringArr){


    return stringArr.join(" ")
}
console.log(combine("Mr","Joseph","Sony","III"))




function roll(){
    const nDice= document.getElementById("inp").value

    const dRes=document.getElementById("res")
    const dImage=document.getElementById("img")
    const values=[]
    const images=[]

    for(let i = 0;i<nDice;i++){
        const value= Math.ceil(Math.random()*6)
        values.push(value)
        images.push(`<img src="${value}.png" alt="${value}">`)
    }
    console.log(values)
    dRes.textContent=`dice: ${values.join(", ")}`
    dImage.innerHTML=images.join()
}   





//callback

function hello(callback){
    setTimeout(function(){
        console.log("hello world")
        
    callback()
    },3000)
    
}
function goodbye(callback){
    console.log("goodbye")
    callback();
}


function wait(){
    console.log("wait!")
}
hello(wait)


function leave(){
    console.log("Just leave")
}






function sum(callback,x,y){
    let result=x+y
    callback(result)
}

function display(result){
    console.log(result)
}

sum(display,3,4)




function sum(method,x,y){
    method(x+y)
}
function display(num){
    console.log(num)
}
function displayPage(num){
    document.body.innerHTML = `<h1> ${num} </h1>`
}
sum(displayPage,8,5)








//.foreach()

let nums=[1,2,3,4,5]

function display(e,i,l){
    console.log(e,i,l) // return element, index, and array itself
}

function double(e,i,a){
    a[i]=e*2
}
function triple(e,i,a){
    a[i]=e**2
}
nums.forEach(triple)
nums.forEach(display)




a=[1,2,3,4,5]
a.forEach(function(e,i,a){
    a[i]**=2
})
console.log(a)




let fruits=["apple","ornage","banana","mango","papaya","watermelon"]


function display(e){
    console.log(e)
}
function capitalize(e, i,a){
    a[i]=a[i].charAt(0).toUpperCase()+a[i].slice(1)
}
fruits.forEach(capitalize)
fruits.forEach(display)

// x='hello'.sp




n=[1,2,3,4,5,6]
function cube(x){
    return x*x*x
}
console.log(n.map(cube))




a=[1,2,3,4,5,6,7]

x=a.map(function(e){
    return e*2
})
console.log(x)





//map 
s=[
    "Spongebob","Patrick","Squidward","Mr.Krabs"
]
function up(e){
    return e.toUpperCase();
}
console.log(s.map(up))


const dates= ["2024-02-12","2023-04-12"]

function format(date){
    let t = date.split("-")
    return (`${t[2]} ${t[1]} ${t[0]}`)
}
console.log(dates.map(format))




//.filter() fiter out and create new array fucntion should return true to keep

n=[1,2,3,4,5,6,7]
function isEven(e){
    return e%2==0
}
console.log(n.filter(isEven))


a=[1,2,3,4,5,6,7]

x=a.filter(function(e){
    if(e%2==0){
        return true
    }
})
console.log(x)





const ages =[16,17,18,17,18,18,17,19,20,45]

function adults(p){
    return p>=18
}
function minor(p){
    return p<18
}
console.log(ages.filter(adults))
console.log(ages.filter(minor))



const words=["hello","world","heavens","mars","Jupiter","Saturn"]
function moreThan6(w){
    return w.length>=6
}
console.log(words.filter(moreThan6))



//.reduce() reduce elements of array to singel value 
const prices =[1,2,20,30,440,550,100]

const total =prices.reduce(sum);
function sum(accumulator,element){
    return accumulator+element
}

console.log(total)



const grades = [10,90,80,60,10,70,70,60,65]

function max(a,e){
    return e>a?e:a
}
console.log(grades.reduce(max))




const hello = function(){
    console.log("hello")
}
hello()


//setTimeout 
setTimeout(function(){
    console.log("hello")
},3000)

test


const nums= [1,2,3,4,5,6]
console.log(nums.map(function(i,e,a){
    return i**3
}))




/// Arrow function 

let helloOther = function(){
    console.log('hello')
}

const hello = () => console.log("hello")
hello()






let call = (name,age)=>{
    console.log(`hello ${name}, you are ${age} years old`)
}
call("hello",10)



setTimeout(()=>{console.log("Done")},3000)


setTimeout(fnName,3000)

function fnName(){
    console.log("Hello")
}

//arrow with mapt filter and reduce
const numbers = [1,2,3,4,5,6]

const squares = numbers.map((element,index,array)=>element**2)
const even = numbers.filter((element)=>element%2==0)
const sum = numbers.reduce((a,e)=>a+e)

console.log(squares)
console.log(even)
console.log(sum)



// .method( (argumen1,argument2,argument3) => return argumen1+argument2+argument3 )

/// Javascript objects

const person = {
    Fname : "Spongebob",
    Lname: "Squarepants",
    age : 30,
    isEmployed:true
}

console.log(person.Fname)

const person2 = {
    fName : "Patrick",
    lName : "Star",
    age:42,
    isEmployed: false
}
console.log(person2.fName)
console.log(person2.lName)
console.log(person2.age)
console.log(person2.isEmployed)


//methods
const fns = {
    add : (a,b) => a+b,
    sub : (a,b )=> a-b
}
console.log(fns.sub(7,3))
console.log(fns.add(10,20))


/// This

const person1 ={
    name :"Spongebob",
    favFood: "Hamburgers",
    sayHello:function(){console.log(this.name)}

}
person1.sayHello();

// ---------------
const person1 ={
    name :"Spongebob",
    favFood: "Hamburgers",
    eat: function(){console.log(` ${this.name} is eating ${this.favFood}`)}

}
const person2 ={
    name :"patric",
    favFood: "Pizza",
    eat: function(){console.log(` ${this.name} is eating ${this.favFood}`)}

}


person2.eat();
///-----------------------------------


// this keyword does not work with arrow function , because it refrrences window object






//// Constructors

function Car(make,model,year,color){
    this.make = make;
    this.model = model;
    this.year= year;
    this.color= color;
    this.drive = function (){
        console.log(`You are driving the ${this.make} ${this.model}`)
    }
}

car1 = new Car("ford","mustang",2000,"red")
console.log(car1)
car2 = new Car("Chevy","Blazor",2024,"Blue")
console.log(car2)
const car3 = new Car("Dodge","Charger",2026,"silver")
console.log(car3.model,car3)

car2.drive()




//// Classes


class Product{
    constructor(name,price){
        this.name =name;
        this.price = price
    }
    displayProduct(){
        console.log(this.name,this.price.toFixed(2))
    }
    total(salesTax){
        return this.price+this.price*salesTax/100
    }
}

const p1 = new Product("Shirt",19.99)
p1.displayProduct()
const p2 = new Product("pants",22.50)
p2.displayProduct()
const p3 = new Product("Underwear",100)
p3.displayProduct()
console.log(p2.total(30))


// static
// belongs ot the class object not any children made from it
class utils{
    static PI = 3.14159
}

// let util1 = new utils();

console.log(utils.PI)



// -----------------
class meth{
    static PI = 3.14159;
    static dia(rad){
        return rad*2
    }
    static circ(rad){
        return 2*this.PI*rad
    }
    static area( rad){
        return this.PI*rad*rad
    }
}

console.log(meth.dia(10))
console.log(meth.circ(10))
console.log(meth.area(10))




// -------------------------------------
class User{
    static count = 0;
    constructor(username){
        this.username = username
        User.count+=1
    }
}

const u1 = new User("Joseph")
console.log(u1.username)
// console.log(u1.count)
console.log(User.count)




// --------------------------
class User{
    static count = 0;
    static names =[]
    constructor(username){
        this.username = username
        User.count+=1
        User.names.push(username)
    }
}

const u1 = new User("Joseph")
console.log(u1.username)
// console.log(u1.count)
console.log(User.count)
const u2 = new User("patrick")
const u3 = new User("Spongebob")
console.log(User.names,User.count)
//----------------------------------




/// Inheritence new class inhertts properteis and methods from parent


class Animal{
    alive= true

    eat(){
        console.log(`${this.name} is Eating`)
    }
    sleep(){
        console.log(`${this.name} is sleeping`)
    }
}

class Rabbit extends Animal{
    name = "Rabbit"
    run(){
        console.log(`${this.name } is running`)
    }
}
class Fish extends Animal{
    name = "Fish"
    swim(){
        console.log(`${this.name } is swimming`)
    }
}
class Hawk extends Animal{
    name = "Hawk"
    fly(){
        console.log(`${this.name } is flying`)
    }
}

const rabbit = new Rabbit()
const fish = new Fish()
const hawk = new Hawk()

console.log(rabbit.alive)

rabbit.alive= false
rabbit.eat()
rabbit.sleep()

console.log(fish.alive)
fish.sleep()
fish.eat()

rabbit.run()
fish.swim()
hawk.fly()




// Super 
//  this => that object
//  super => the parent object


class Animal{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    move(speed){
        console.log(`${this.name} moves at a speed of ${speed} km/hr `)
    }
}
class Rabbit extends Animal{
    constructor(name, age, rs){
        super(name,age);
        this.runSpeed = rs
    }
    run(){
        super.move(this.runSpeed)
        console.log(`${this.name} can Run`)
    }
}
class Fish extends Animal{
    constructor(name, age, ss){
        super(name,age);
        this.swimSpeed = ss
    }
    swim(){
        super.move(this.swimSpeed)
        console.log(`${this.name} can Swim`)
    }
}
class Hawk extends Animal{
    constructor(name, age, fs){
        super(name,age);
        this.flySpeed = fs
    }
    fly(){
        super.move(this.flySpeed)
        console.log(`${this.name} can Fly`)
    }
}

const rabbit1 = new Rabbit("Bugs Bunny",1, 20)
const fish1 = new Fish("Nemo",2, 45)
const hawk1 = new Hawk("McQueen",5, 90)

fish1.swim()
rabbit1.run()

///--------------------

// Getters and Setters
// getter makes property readable
// setter make property writable

class Rectangle{
    constructor(width,height){
        this.width = width
        this.height = height
    }
}

// const rect1 = new Rectangle(-1000,"pizza")
// console.log(rect1.width,rect1.height)

// this should not be possible

// therefore setters


class Rectangle{
    constructor(width,height){
        this.width = width
        this.height = height
    }
    set width(newWidth){
            if (newWidth>=0){
                this._width = newWidth //._ is private tell other dont change it
            }else{
                console.error("Width must be positive number")
            }
    }
    set height(newHeight){
        if (newHeight>=0){
            this._height = newHeight //._ is private tell other dont change it
        }else{
            console.error("Height must be positive number")
        }
}
}

const rect1 = new Rectangle(10,10)
console.log(rect1.height) // undefinied still

///Setter

class Rectangle{
    constructor(ww,hh){
        this.width = ww
        this.height = hh
    }
    set width(newWidth){
            if (newWidth>=0){
                this._width = newWidth //._ is private tell other dont change it
            }else{
                console.error("Width must be positive number")
            }
    }
    set height(newHeight){
        if (newHeight>=0){
            this._height = newHeight //._ is private tell other dont change it
        }else{
            console.error("Height must be positive number")
        }
    }
    get width(){
        return this._width
    }get height(){
        return this._height
    }

    get area(){
        return this._height * this._width
    }
}


const rect1 = new Rectangle(10,10)
console.log(rect1.height,rect1.width)

rect1.height= 100;
console.log(rect1.height)

rect1.width= "pizza" //not possible // retains values

console.log(rect1.area)

//--------------------------------

class Rectangle{
    constructor(ww,hh){
        this.width = ww
        this.height = hh
    }
    set width(newWidth){
            if (newWidth>=0){
                this._width = newWidth //._ is private tell other dont change it
            }else{
                console.error("Width must be positive number")
            }
    }
    set height(newHeight){
        if (newHeight>=0){
            this._height = newHeight //._ is private tell other dont change it
        }else{
            console.error("Height must be positive number")
        }
    }
    get width(){
        return ` ${this._width.toFixed(1)} cms`
    }get height(){
        return `${this._height.toFixed(1)} cms`
    }

    get area(){
        return `${(this._height * this._width).toFixed(2)} cm^2`
    }
}


const rect1 = new Rectangle(10,10)
console.log(rect1.height,rect1.width)

rect1.height= 100;
console.log(rect1.height)

rect1.width= "pizza" //not possible // retains values

console.log(rect1.area)

//  ----------------------------------------
// EXAMPLE 2
class Person{
    constructor(fn,ln,age){
        this.fn = fn;
        this.ln= ln;
        this.age = age;
    }
}
const person1 = new Person(42, 30, "pizza")
console.log(person1.fn,person1.ln,person1.age)

// this should not be possible

// Solution
class Person{
    constructor(fn,ln,age){
        this.fn = fn;
        this.ln= ln;
        this.age = age;
    }
    set fn(t){
        if(typeof t === "string" &&  t.length>0){
            this._fn= t
        }else{
            console.error("Fistname must a non empty string")
        }
    }
    set ln(t){
        if(typeof t === "string" &&  t.length>0){
            this._ln= t
        }else{
            console.error("LastName should be a non empty string")
        }
    }
    set age(t){
        if(typeof t === "number" &&  t>0){
            this._age= t
        }else{
            console.error("Age should be a Number greater than 0")
        }
    }


    get fn(){
        return this._fn
    }
    get ln(){
        return this._ln
    }
    get age(){
        return this._age
    }
    get fullName(){
        return `${this._fn} ${this._ln}`
    }
}
const person1 = new Person("Spongebob","Squarepants",30)
console.log(person1.fn,person1.ln,person1.age)
console.log(person1.fullName)


// destructuring
// [] array destructuring
// {} object destructuring

// Example 1
// Swapping variables
let a =1;
let b = 2;
[a,b]=[b,a]

console.log(a)
console.log(b)

//Example 2
// exchange values in arrays
const colors = ['red', "green", "blue","black","white"];

[colors[0],colors[4]] = [colors[4],colors[0]];
console.log(colors)


// Example 3
// Get values from array
const colors = ['red', "green", "blue","black","white"];
const [ c1,c2,c3,...extra] =colors;
console.log(c1,c2,c3)
console.log(extra)


//  Example 4

const person1 = {
    fn:"Sbob",
    ln:"Sqp",
    age :30,
    job:"cook"
}
const person2 = {
    fn:"Patrick",
    ln:"Star",
    age :34
}

const {fn,ln,age,job} = person1
console.log(fn,ln,age,job)



const {fn,ln,age,job="jobless"} = person2
console.log(fn,ln,age,job)

/// Example 5
const person1 = {
    fn: "Sbob",
    ln: "Sqp",
    age: 30,
    job: "cook"
};
const person2 = {
    fn: "Patrick",
    ln: "Star",
    age: 34
};

function displayPerson({ fn, ln, age, job = "jobless" }) {
    console.log(fn, ln, age, job);
}
displayPerson(person1)
displayPerson(person2);

// Nested objects 
// Nested objects


const person = {
    fullName : "sheldon Cooper",
    age:30,
    isStudent: true,
    hobbies: ["fishing","cooking","coding"],
    address:{
        street:"104/202",
        city:"Pasadena",
        state:"California"
    }
}

console.log(person.address.city)

for(let prop in person.address){
    console.log(person.address[prop])
}

// ----------------
class Address{
    constructor(st,city,country){
        this.street= st;
        this.city = city;
        this.country= country;
    }
}
class Person{
    constructor(name, age, ...address){
        this.name = name;
        this.age= age;
        this.address= new Address(...address)
    }
}

const p1 = new Person("Spng",30, "124 conch st,","bikini Bottom","intl waters")
const p2 = new Person("Sheldon",45,"02/4","Pasadena","United States")


console.log(p1.address)
console.log(p1.address.country)
console.log(p1)



//------------------------------
// Arrays of objects
const fruits = [
    {name:"apple",color:"Red",calories:45},
    {name:"orange", color:'Orange', calories: 30},
    {name:"banana", color:"Yellow", calories: 90},
    {name:"coconut", color:"White", calories: 36},
    {name:"Pineapple", color:"Yellow", calories: 10}
    ]
    

// console.log(fruits[1].color)

for(i in fruits){
    console.log(fruits[i])
}
fruits.push({name:"grapes",color:"Purple",calories:10})

// console.log(fruits)

// fruits.splice(1,2)
// console.log(fruits)
console.log("")
fruits.forEach((f)=>{console.log(f.name)})


const fruitNames = fruits.map((fruit)=>fruit.name)

console.log(fruitNames)

const yelloF= fruits.filter((f) => f.color==="Yellow")
console.log(yelloF)


    
// console.log(fruits.reduce((a,e)=>e.calories>a.calories?e:a))
const maxCal = fruits.reduce((a,e)=>e.calories>a.calories?e:a)
console.log(maxCal)





/// Sorting
//in lexicographic order

let fruits = ["orange","banana","apples","melon","grapes"]

fruits.sort()

console.log(fruits)



let nums = [1,20,1,40,10, 30,3]
nums.sort()
console.log(nums)   //[1, 1, 10, 20, 3, 30, 40] lexicographic



//Sorting

let nums = [1,20,1,40,10, 30,3]
nums.sort((a,b)=>a-b)

console.log(nums)//[1, 1, 3, 10, 20, 30, 40]

nums.sort((a,b)=>b-a)
console.log(nums) // descending [40, 30, 20, 10, 3, 1, 1]

// -----

const people = [{name:"Sp",age:30,gpa:1.5},
{name:"Pat",age:34,gpa:0.7},
{name:"sandy",age:20,gpa:4.0}]

people.sort((a,b)=>a.gpa-b.gpa) //for numerical comparison
console.log(people) 

people.sort((a,b)=>a.name.localeCompare(b.name)) ///for alpahbetical comparision
console.log(people)




// --------------------
//Shuffling
//Shuffling and aray

const deck = ["A",1,2,3,4,5,6,7,8,9,20,"J","Q","K"]


// To shuffle:
deck.sort(() => Math.random()-0.5)
console.log(deck)
//but very inefficient



//Shuffling and aray

const deck = ["A",1,2,3,4,5,6,7,8,9,10,"J","Q","K"]

//Fisher-Yates algorithm
shuffle(deck)

function shuffle(array){
    for(let i = array.length -1;i>0;i--){
        const random = Math.floor((Math.random()*i))
        [array[i],array[random]]=[array[random],array[i]]
    }
}
console.log(deck)




/// Date

// Dates 

const date = new Date()

console.log(date)

//custom 
// const date1 = new Date(year, month, day, hour, minute, second , ms)

const date1 = new Date(2023)
console.log(date1)

// or time in ms since epyc

const date2 = new Date(0)
console.log(date2)

const date23 = new Date(1700000000000)
console.log(date23)
//or in str 

const date4 = new Date("2023-12-30")
console.log(date4)




// -----------------
const date = new Date();


const year = date.getFullYear();
const month = date.getMonth(); //month  no -1 
console.log(month)
const dayte = date.getDate()
console.log(dayte)


const hours = date.getHours() //plural
console.log(hours)
const mins = date.getMinutes() 
console.log(mins)
const s = date.getSeconds() 
console.log(s)

const dayOfWeek = date.getDay()
console.log(dayOfWeek) //sunday0-monday1 sat 6


/// Alter date 
let date = new Date();
date.setFullYear(2026)
date.setMonth(3) // 0 is jan
date.setDate(27)
console.log(date)

//date comparison

const date1 = new Date('2024-01-01')
const date2 = new Date('2023-01-01')

console.log(date2>date1) //false
console.log(date1>date2) //true
