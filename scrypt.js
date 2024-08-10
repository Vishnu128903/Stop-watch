let start=document.getElementById("start")
let stop=document.getElementById("stop")
let reset=document.getElementById("reset")
let display=document.getElementById("display")
let h=0
let m=0
let s=0
let ms=0
function add(){
    ms+=1
    if(ms>=100){
        s+=1
        ms=0
    }
    if (s>=60){
        m+=1
        s=0
    }
    if (m>=60){
        m=0
        h+=1
    }
    milis=ms
    sec=s
    min=m
    hrs=h
    milisec=String(ms).padStart(2,"0")
    sec=String(s).padStart(2,"0")
    min=String(m).padStart(2,"0")
    hrs=String(h).padStart(2,"0")

    display.textContent=`${hrs}:${min}:${sec}:${milisec}`
}
start.addEventListener("click",function (){
    time=setInterval(add,10)
    start.disabled=true 
    stop.disabled=false
}
)
stop.addEventListener("click",function(){
    clearTimeout(time)
    start.disabled=false
    stop.disabled=true 
}
)
reset.addEventListener("click",function(){
    ms=0
    s=0
    m=0
    h=0
    milisec=String(ms).padStart(2,"0")
    sec=String(s).padStart(2,"0")
    min=String(m).padStart(2,"0")
    hrs=String(h).padStart(2,"0")
    clearTimeout(time)
    display.textContent=`${hrs}:${min}:${sec}:${milisec}`   
}
)