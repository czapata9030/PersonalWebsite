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
    darkmodePO();
}

function darkmodePO() {
    var text = document.getElementById("textQ");
        text.classList.toggle("dark-background");
    var text = document.getElementById("textQ1");
        text.classList.toggle("dark-background");
        text.classList.toggle("dark-text");
        var text = document.getElementById("cardQ1");
        text.classList.toggle("darkcard-background");
        text.classList.toggle("dark-text");
        var text = document.getElementById("cardQ2");
        text.classList.toggle("darkcard-background");
        text.classList.toggle("dark-text");
        var text = document.getElementById("cardQ3");
        text.classList.toggle("darkcard-background");
        text.classList.toggle("dark-text");

        var text = document.getElementById("link1");
        text.classList.toggle("dark-text");
}



window.onload = function(){
    var dark = localStorage.getItem("dark");
    console.log(dark);
    if(dark == 1) {
        var header = document.getElementById("nav");
        var footer = document.getElementById("foot");
        footer.classList.toggle("dark-background");
        header.classList.toggle("dark-background");
        darkmodePO();
    }
}

