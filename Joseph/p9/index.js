function update(){
    const now = new Date()
    h=now.getHours().toString().padStart(2,'0')
    m=now.getMinutes().toString().padStart(2,'0')
    s=now.getSeconds().toString().padStart(2,'0')
    document.getElementById("clock").textContent=h+":"+m+":"+s
}

update()
setInterval(update,100)
