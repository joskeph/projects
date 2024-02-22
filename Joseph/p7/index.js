
function generate(len, l, u, n, s, ){

    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase =lowercase.toUpperCase();
    const numbers="0123456789";
    const symbols ="!@#$%^&*()_+{}|:";


    let password = "";
    let allowedChars="";
    allowedChars+=l?lowercase:"" ; 
    allowedChars+=u?uppercase:"" ;
    allowedChars+=n?numbers:"";
    allowedChars+=s?symbols:"" ;

    if(len<=0){
        return "Password length must be at least 1"
    }
    if(allowedChars.length===0){
        return "Please choose setting"
    }
    for(let i=0;i<len;i++){
        password+=allowedChars[Math.floor(Math.random()*allowedChars.length)]
    }

    return password
}

const length = 12
const lcase = 0
const ucase = 0
const nums = 0
const syms =0

console.log(generate(length,lcase,ucase,nums,syms));