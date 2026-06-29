var initialPath = `M 10 100 Q 95 100  100`

var finalPath = `M 10 100 Q 95 100 990 100`

var string = document.querySelector("#string")

string.addEventListener("mousemove",(e)=>{
    console.log("mouse enterd..");
    let clientx = e.x
    let clienty = e.y

    path = `M 10 100 Q ${clientx} ${clienty} 990 100`

    gsap.to("svg path",{
        attr:{
            d:path
        },
        duration:0.1,
        ease:"power3.out"
    })
    
    
})

string.addEventListener("mouseleave",()=>{
    
    gsap.to("svg path",{
        attr:{
            d:finalPath
        },
        duration:1,
        ease:"elastic.out(1,0.2)"
    })
    
})