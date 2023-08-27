let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');

    navMenu.classList.remove('active');
}

let navMenu = document.querySelector('.nav-menu');
document.querySelector('#menu-btn').onclick = () => {
    navMenu.classList.toggle('active');

    searchForm.classList.remove('active');
}

window.onscroll = () => {
    searchForm.classList.remove('active');
    navMenu.classList.remove('active');
}

// Pop ups

myButton.addEventListener("click", function () {
    myPopup.classList.add("show");
});
closePopup.addEventListener("click", function () {
    myPopup.classList.remove("show");
});
window.addEventListener("click", function (event) {
    if (event.target == myPopup) {
        myPopup.classList.remove("show");
    }
});
