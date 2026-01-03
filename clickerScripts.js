var doAdd = 1;
var b = 0;
let count = 0;
let Pcount = 0;
const bart = document.getElementById("Bart");

const API = "https://script.google.com/macros/s/AKfycbwCR7SO8HCtZNMorwSHRZwbfEJXkwoDe9usA0NRBJpQu3zPc0OvmBCpPrawbr9MPN1Q/exec";

if(doAdd == 1){
    fetch(API, { method: "POST" })
    .then(r => r.json())
    .then(d => {
        count = d.count;
        document.getElementById("click_count").textContent = d.count;
    });
    doAdd = 0;
}

bart.addEventListener("click", () => {
    fetch(API, { method: "POST" })
    .then(r => r.json())
    count ++;
    document.getElementById("click_count").textContent = count;
});

bart.addEventListener("click", () => {
    Pcount ++;
    document.getElementById("Pclick_count").textContent = Pcount;
});

bart.addEventListener("mouseenter",() => {
    bart.classList.toggle("big");
});

bart.addEventListener("mouseleave",() => {
    bart.classList.remove("big");
});