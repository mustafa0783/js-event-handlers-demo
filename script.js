let btn=document.querySelector("button");
let body=document.querySelector("body");

btn.onclick = (evt) => {
    console.log(evt)
    console.log(evt.type)
    console.log(evt.clientX,evt.clientY)
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    body.style.backgroundColor = randomColor;
}

btn.addEventListener("click",()=>{
    console.log("Handler 1")
})
btn.addEventListener("click",()=>{
    console.log("Handler 2")
})

const Handler3=()=>{console.log("Handler 3")
}
btn.addEventListener("click",Handler3)

btn.addEventListener("click",()=>{
    console.log("Handler 4")
})

btn.removeEventListener("click",Handler3)
