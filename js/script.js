console.log("Cześć wszystkim")

let body = document.querySelector(".js-body--dark");
let button = document.querySelector(".js-button");




button.addEventListener("click", () => {
    button.innerText = button.innerText === "Jasny motyw" ? "Ciemny motyw" : "Jasny motyw";

    body.classList.toggle("js-body--dark");

});
  

