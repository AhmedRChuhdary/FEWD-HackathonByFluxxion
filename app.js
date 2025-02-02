function toogleTheme() {
    var html = document.getElementsByTagName("html");
    var button = document.getElementById("toogle");
    if (html[0].getAttribute("theme") === "dark") {
        html[0].setAttribute("theme", "light");
        button.innerHTML = ("Dark");
    } else {
        html[0].setAttribute("theme", "dark");
        button.innerHTML = ("Light");
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            if (name && email && message) {
                alert('Thank you ' + name + '! Your message has been sent.');
                form.reset();
            } else {
                alert('Please fill all fields.');
            }
        });
    }
});
