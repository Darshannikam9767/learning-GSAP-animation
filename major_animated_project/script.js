function page1Animation() {
    var tl = gsap.timeline()
    tl.from("nav, .navbar h4, .navbar button", {
        y: -50,
        duration: 0.4,
        delay: 0.5,
        opacity: 0,
        stagger: 0.15
    })

    tl.from(".center-part1 h1", {
        x: -50,
        duration: 0.5,
        opacity: 0
    }, "-=0.3")

    tl.from(".center-part1 p", {
        x: -30,
        duration: 0.5,
        opacity: 0
    })

    tl.from(".center-part1 button", {
        x: -30,
        duration: 0.4,
        opacity: 0
    })

    tl.from(".center-part2 img", {
        x: 50,
        duration: 0.5,
        opacity: 0,
        rotate:30
    }, "-=1.1")

    tl.from(".section1bottom img", {
        y: 30,
        opacity: 0,
        duration: 0.4,
        stagger: 0.13
    })

}

page1Animation()


function page2Animation(){
    var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".section2",
        scroll: "body",
        duration: 0.7,
        start: "top 50%",
        end: "top 1%",
        scrub: 2
    }
})

tl2.from(".services h3", {
    x: -50,
    duration: 0.8,
    opacity: 0
})

tl2.from(".services p", {
    x: 50,
    duration: 1,
    opacity: 0
})

tl2.from(".left1", {
    x: -200,
    duration: 1.5,
    opacity: 0
}, "cards1")

tl2.from(".right1", {
    x: 200,
    duration: 1.5,
    opacity: 0
}, "cards1")

tl2.from(".left2", {
    x: -200,
    duration: 1.5,
    opacity: 0
}, "cards2")

tl2.from(".right2", {
    x: 200,
    duration: 1.5,
    opacity: 0
}, "cards2")


}

page2Animation()