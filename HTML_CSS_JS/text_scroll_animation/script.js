window.addEventListener("wheel",(e)=>{
    if(e.deltaY > 0){
       gsap.to(".merque",{
            transform:"translateX(-200%)",
            duration:3,
            repeat:-1,
            ease:"none"
        })

        gsap.to(".merque img",{
            rotate:180,
            duration:0.5
        })
    }else{
        gsap.to(".merque",{
            transform:"translateX(0%)",
            duration:3,
            repeat:-1,
            ease:"none"
        })

        gsap.to(".merque img",{
            rotate:0,
            duration:0.2
        })
    }
})