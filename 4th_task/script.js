const tl = gsap.timeline()

tl.to("#box1",{
    x:400,
    duration:1.5,
    delay:1,
    rotate:360,
    borderRadius:100,
    scale:1.2,
    backgroundColor:"purple",
    y:20
})

tl.to("#box2",{
    x:400,
    duration:1.5,
    
    rotate:360,
    borderRadius:100,
    scale:1.2,
    backgroundColor:"yellow",
    y:70
})

tl.to("#box3",{
    x:400,
    duration:1.5,
    
    rotate:360,
    borderRadius:100,
    scale:1.2,
    backgroundColor:"orange",
    y:120
})

