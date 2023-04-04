const nav = document.getElementsByClassName("navErisim")

window.addEventListener("load", () => {
    console.log("çalıştım")
})

window.addEventListener("scroll", () => {
    console.log("scrolly " + scrollY)
    console.log("scrollX " + scrollX)
    if(scrollY > 133){
        nav[0].classList.add("sabitOlmayan");
        nav[0].classList.remove("sabit");
    } else{
        nav[0].classList.add("sabit");
        nav[0].classList.remove("sabitOlmayan");
    }
})

