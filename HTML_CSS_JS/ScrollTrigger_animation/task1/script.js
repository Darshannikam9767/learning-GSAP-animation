gsap.from("#page2 h1",{
    opacity:0,
    x:200,
    // duration:2,
    rotate:180,
    scrollTrigger:{
        trigger:"#page2 h1",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top 40%",
        scrub:1
    }
})

gsap.from("#page2 h2",{
    opacity:0,
    x:-400,
    duration:2,
    scrollTrigger:{
        trigger:"#page2 h2",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 40%",
        scrub:1
    }
})