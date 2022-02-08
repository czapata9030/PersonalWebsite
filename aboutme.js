function darkmode() {
    var dark = localStorage.getItem("dark");
    console.log("Initial Variable Val:");
    console.log(dark);
    var header = document.getElementById("nav");
    var footer = document.getElementById("foot");
    header.classList.toggle("dark-background");
    footer.classList.toggle("dark-background");
    if(dark == 1) {
        dark = 0;
        console.log(dark);
        localStorage.setItem("dark", 0);
    } else {
        dark = 1;
        console.log(dark);
        localStorage.setItem("dark", 1);
    }
    darkmodeAB();
}

function darkmodeAB() {
        var text = document.getElementById("text1");
        text.classList.toggle("dark-background");
        text.classList.toggle("dark-text");
        var text = document.getElementById("text2");
        text.classList.toggle("dark-background");
        text.classList.toggle("dark-text");
        var text = document.getElementById("text3");
        text.classList.toggle("dark-background");
        text.classList.toggle("dark-text");
        let buttons = document.getElementsByClassName("button-Q");
        for(let i = 0; i < buttons.length; i++ ) {
            buttons[i].classList.toggle("dark-background-button");
        }
}

window.onload = function(){
    var dark = localStorage.getItem("dark");
    console.log(dark);
    if(dark == 1) {
        var header = document.getElementById("nav");
        var footer = document.getElementById("foot");
        footer.classList.toggle("dark-background");
        header.classList.toggle("dark-background");
        darkmodeAB();
    }
}

