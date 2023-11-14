"use strict";

//Links
const sideLInksEl = document.querySelectorAll('.sidebar .side-menu li a:not(.logout)');

sideLInksEl.forEach((links) => {
    const li = links.parentElement;
    links.addEventListener("click", () => {
        sideLInksEl.forEach((i) => {
            i.parentElement.classList.remove("active");
        }); 
        li.classList.add('active');
    });  
});
    