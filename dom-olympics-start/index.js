const h1 = document.createElement("h1");
h1.textContent = "JavaScript made this!!";
document.getElementById("header").appendChild(h1);
h1.className = "header";


const h2 = document.createElement("h2");
h2.innerHTML = '<span class="name">Jared Eaton</span> wrote the JavaScript';
document.getElementById("header").appendChild(h2);
h2.className = "header"


const messages = document.getElementsByClassName("message");
messages[0].textContent = "you're great";
messages[1].textContent = "thanks!";
messages[2].textContent = "no problem"
messages[3].textContent = "anytime";

const btn = document.getElementById("clear-button")
btn.addEventListener('click', function(){
   for (var i = 0; i < messages.length; i++) {
        messages[i].textContent = ''}
})
document.getElementById("click-button").appendChild(btn);
btn.className = "clear-button"

