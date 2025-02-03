function theme(){
    document.body.classList.toggle("theme_toggle");
    document.getElementsByClassName("bx")[0].classList.toggle("bx-moon");
    document.getElementsByClassName("bx")[0].classList.toggle("bx-sun");
}