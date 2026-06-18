gsap.to("#box1",{
    x:380,
    duration:3,
    delay:1,
    rotate:360,
    borderRadius:100
})

gsap.from("#box2",{
    x:380,
    y:220,
    duration:3,
    delay:1,
    backgroundColor:"red",
   borderRadius:100
})

const btn = document.getElementById("btn")


btn.addEventListener("click",()=>{
    gsap.to(btn,{
        y:-300,
        height:400,
        width:300,
        duration:1,
        delay:0.5,
        borderRadius:40
    })
})