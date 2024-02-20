i=document.getElementById('i')
r=document.getElementById('r')
d=document.getElementById('d')
num=document.getElementById('num')
n=Number(num.textContent)

i.onclick=function(){
    n++
    num.textContent=n
}
d.onclick=function(){
    n--
    num.textContent=n
}
r.onclick=function(){
    n=0
    num.textContent=n
}