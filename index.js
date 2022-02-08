function darkmode() {
    var dark = localStorage.getItem("dark");
    // console.log("Initial Variable Val:");
    // console.log(dark);
    var header = document.getElementById("nav");
    var footer = document.getElementById("foot");
    let buttons = document.getElementsByClassName("button");
    header.classList.toggle("dark-background");
    footer.classList.toggle("dark-background");
    for(let i = 0; i < buttons.length; i++ ) {
        buttons[i].classList.toggle("dark-background-button");
    }
    if(dark == 1) {
        dark = 0;
        console.log(dark);
        localStorage.setItem("dark", 0);
    } else {
        dark = 1;
        console.log(dark);
        localStorage.setItem("dark", 1);
    }
}

window.onload = function(){
    var dark = localStorage.getItem("dark");
    console.log(dark);
    if(dark == 1) {
        var header = document.getElementById("nav");
        var footer = document.getElementById("foot");
        let buttons = document.getElementsByClassName("button");
        footer.classList.toggle("dark-background");
        header.classList.toggle("dark-background");
        for(let i = 0; i < buttons.length; i++ ) {
            buttons[i].classList.toggle("dark-background-button");
        }
    }
}

