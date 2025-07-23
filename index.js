let hamburger = document.getElementById("hamburger")
let navmenu = document.querySelector(".nav-links")

hamburger.addEventListener('click', ()=>{
    navmenu.classList.toggle('open')
})

