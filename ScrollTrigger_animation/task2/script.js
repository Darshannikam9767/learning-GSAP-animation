// gsap.from("#page1 #box",{
//     opacity:0,
//     duration:0.6,
//     scale:0,
//     delay:1,
//     borderRadius:"50%",
//     y:300
// })


// gsap.from("#page2 #box",{
//     opacity:0,
//     duration:2,
//     scale:0,
//     borderRadius:"50%",
//     rotate:360,
//     scrollTrigger:{
//         trigger:"#page2 #box",
//         scroller:"body",
//         markers:true,
//         start:"top 65%",
//         end:"top 30%",
//         scrub:1,
//         pin:true
//     }
// })


gsap.to("#page2 h1",{
    transform: "translateX(-225%)",
    scrollTrigger:{
        trigger:"#page2 ",
        scroller:"body",
        scrub:2,
        pin:true,
        start:"top 0%",
        end:"top -150%",
        
    }
})

gsap.from("#page3 #circle",{
    scale:0.5,
    height:"300px",
    width:"300px",
    borderRadius:"100%",
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        scrub:2,
        pin:true,
        start:"top 0%",
        end:"top -100%",
        markers:true
    }
})
gsap.to("#circle h2",{
    opacity:1,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        scrub:2,
        start:"top 0%",
        end:"top -100%"
    }
})
