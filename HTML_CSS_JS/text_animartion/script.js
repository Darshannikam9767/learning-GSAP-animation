function breakTheText() {
    var h1 = document.querySelector("h1")
    var h1Text = h1.textContent

    var finalText = ""


    var splittedText = h1Text.split("")
    var halfText = Math.floor(splittedText.length / 2)
    splittedText.forEach((i,idx) => {
        if(idx < halfText){
            finalText += `<span class ="first">${i}</span>`
        }else{
            finalText += `<span class ="second">${i}</span>`
        }
    })

    h1.innerHTML = finalText


}

breakTheText()

gsap.from(".first",{
    y:150,
    delay:1,
    duration:0.8,
    stagger:0.23,
    opacity:0,
})

gsap.from(".second",{
    y:150,
    delay:1,
    duration:0.8,
    stagger:-0.23,
    opacity:0,
})