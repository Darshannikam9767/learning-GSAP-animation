var tl = gsap.timeline()

gsap.from("#nav",{
    y:-100,
    delay:1,
    duration:0.4,
    opacity:0
})

tl.to("#full",{
    right:0,
    duration:0.5,
})

tl.from("#full h4",{
    x:100,
    opacity:0,
    stagger:0.2
})

tl.from("#full i",{
    x:100,
    opacity:0,
})

tl.pause()

const menuBtn = document.querySelector("#nav i")

menuBtn.addEventListener("click",()=>{
    tl.play()
})

const closeBtn = document.querySelector("#full i")
closeBtn.addEventListener("click",()=>{
    tl.reverse()
})