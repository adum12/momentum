const hello = document.querySelector(".hello:first-child h1")

console.log(hello)
hello.style.color = "tomato"

function titleOnClick(){
    console.log("halo bang")
}

function titleOnHover(){
    //hello.setAttribute("style", "color: magenta")
    hello.style.color = "magenta"
}

function titleOffHover(){
    //hello.setAttribute("style", "color: tomato")
    hello.style.color = "tomato"
}

hello.addEventListener("mouseover", titleOnHover)
hello.addEventListener("mouseout", titleOffHover)
hello.addEventListener("click", titleOnClick)