function changeBackground(){
    let scrollval = window.scrollY;
    let toggleClass = document.getElementById("bnavbar");
    if (scrollval < 200){
        toggleClass.classList.remove("toggleNavbar");
    }
    else{
        toggleClass.classList.add("toggleNavbar");
    }
}

window.addEventListener('scroll',changeBackground);