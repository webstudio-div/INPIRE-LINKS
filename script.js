document.addEventListener("contextmenu",function(e){
    e.preventDefault()
})
var themeBtn = document.getElementById("themeBtn");

var icon = themeBtn.querySelector("i");


themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("light");


    if (document.body.classList.contains("light")) {

        icon.classList.remove("fa-moon");

        icon.classList.add("fa-sun");

        localStorage.setItem("theme", "light");

    } else {

        icon.classList.remove("fa-sun");

        icon.classList.add("fa-moon");

        localStorage.setItem("theme", "dark");

    }

});



/* =========================
    GET SAVED THEME
========================= */

var savedTheme = localStorage.getItem("theme");


if (savedTheme === "light") {

    document.body.classList.add("light");

    icon.classList.remove("fa-moon");

    icon.classList.add("fa-sun");

}