document.querySelector("body")
.addEventListener("mousemove",(e)=>{
    gsap.to("#cursor",{
    duration:1.5,
    x:e.x,
    y:e.y,
    ease:"back.out",
    scrub:2
    
})
gsap.to("#ring",{
    x:e.x,
    y:e.y,
    duration:1.9,
    ease:"back.out",
    scrub:2
})
})
document.querySelector("body")
.addEventListener("click",()=>{
    gsap.from("#cursor",{
    duration:1,
    scale:1.5,
    
    })
    gsap.from("#ring",{
    duration:1,
    scale:1.5,
    
    })
})



document.addEventListener("DOMContentLoaded",()=>{
    gsap.to("#cursor",{
    duration:0.5,
    x:0,
    y:0
})
})
