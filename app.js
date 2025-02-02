function toogleTheme() {
    var html = document.getElementsByTagName("html");
    var button = document.getElementById("toogle");
    if(html[0].getAttribute("theme") === "dark") {
        html[0].setAttribute("theme", "light");
        button.innerHTML = ("Dark");
    } else {
        html[0].setAttribute("theme", "dark");
        button.innerHTML = ("Light");
    } 
}