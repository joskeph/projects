const display=document.getElementById("display")
let timer = null
let startTime = 0
let elapsed = 0
let running = 0

function start(){

    if(!running){
        startTime = Date.now()-elapsed
        timer = setInterval(update,10)
        console.log(timer)
        running = 1
    }
}

function stop(){
    if(running){
        clearInterval(timer);
        elapsed=Date.now()-startTime
        running = 0
    }
}
function reset(){
        clearInterval(timer);
        startTime=0
        elapsed=0
        display.textContent="00:00:00:00"
        running = 0
}

function update(){
    const current = Date.now()
    elapsed = current - startTime

    h=Math.floor((elapsed/3600000)%60).toString().padStart(2,'0')
    M=Math.floor((elapsed/60000)%60).toString().padStart(2,'0')
    s=Math.floor((elapsed/1000%60)).toString().padStart(2,'0')
    m=Math.floor((elapsed%1000)/10).toString().padStart(2,'0')
    console.log(h,M,s,m)
    display.textContent=h+":"+M+":"+s+":"+m
}