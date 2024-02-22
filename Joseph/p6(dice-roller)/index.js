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