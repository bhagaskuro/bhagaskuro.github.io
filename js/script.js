//Start your JS here
const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button
            .closest("[data-carousel]")
            .querySelector("[data-slides]")

        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})

document.getElementById("bhome").onclick = function () { myHome() };
function myHome() {
    // var x = document.getElementById("home");
    // if (x.style.display === "none") {
    //   x.style.display = "block";

    var home = document.getElementById("home");
    var series = document.getElementById("series");
    var movie = document.getElementById("movie");
    if (home.style.display === "none") {
        home.style.display = "block";
        series.style.display = "none";
        movie.style.display = "none";
    }
}

document.getElementById("bseries").onclick = function () { mySeries() };
function mySeries() {
    var home = document.getElementById("home");
    var series = document.getElementById("series");
    var movie = document.getElementById("movie");
    if (series.style.display === "none") {
        home.style.display = "none";
        series.style.display = "block";
        movie.style.display = "none";
    }
}

document.getElementById("bmovie").onclick = function () { myMovie() };
function myMovie() {
    var home = document.getElementById("home");
    var series = document.getElementById("series");
    var movie = document.getElementById("movie");
    if (movie.style.display === "none") {
        home.style.display = "none";
        series.style.display = "none";
        movie.style.display = "block";
    }
}

function tooglePopup() {
    document.getElementById('popup1').classList.toggle('active');
    document.getElementById('pidio').style.display = "block";
}

document.getElementsByClassName("close-btn").onclick = function () { closed() };
function closed() {
    document.getElementById('popup1').classList.toggle('active');
    document.getElementById('pidio').style.display = "none";
}

function toogleLogin() {
    document.getElementById('popup2').classList.toggle('active');
}
function closet() {
    document.getElementById('popup2').classList.toggle('active');
}

function lojin(){
    var name = document.getElementById("uname").value
    var sendi = document.getElementById("sendi").value
    if (name == 'kamu' && sendi == 'asd')
    {
        alert("P unten, "+ name);
        document.getElementById("blogin").style.display ='none';
        document.getElementById("bmovie").style.display ='block';
        document.getElementById('popup2').classList.toggle('active');
    }
    else{
        alert("salah");
    }
}