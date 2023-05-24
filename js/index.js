const a ={
    method1 : () => " from method 1"
}

const b ={
    method2:  () => " from method 2"
}

Object.setPrototypeOf(a,b)

console.log(a.method2())