const sub=document.getElementById('sub')
const visa=document.getElementById('visaBtn')
const master=document.getElementById('masterBtn')
const paypal=document.getElementById('paypalBtn')
const subResult=document.getElementById('subResult')
const payResult=document.getElementById('payResult')
const submit=document.getElementById('submit')


submit.onclick = function(){
    if(sub.checked){
        subResult.textContent = `You are Subscribed`
    }else{
        subResult.textContent = `You are not Subscribed`
    }

    if(visa.checked){
        payResult.textContent = "You are paying with visa"
    }else if(master.checked){
        payResult.textContent = `You are paying with Mastercard`
    }else if(paypal.checked){
        payResult.textContent = `You are paying with PayPal`
    }else{
        payResult.textContent = `You must select a paymet type`
    
    }
}