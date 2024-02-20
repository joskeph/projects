const min = 10
const max = 20
const answer = Math.ceil(min+Math.random()*(max-min))
let guess,remark
let attempts=0
do{
    if(isNaN(guess)){
        window.alert(`please type a valid number between ${min} and ${max}`)
    }else{
        remark=guess<answer?"(Higher)":"(Lower)";
        console.log(remark)
    }
    guess=window.prompt(`Enter your Guess: `)
    
    attempts++
}while(guess!=answer)

console.log(`You got it right in ${attempts} attempts, the answer was ${answer}`)
