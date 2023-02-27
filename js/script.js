{
    const toggleBackground = () => {
        const body = document.querySelector(".js-body");
        body.classList.toggle("js-body--dark");
        const nextColorName = document.querySelector(".nextColorName");
        nextColorName.innerText = body.classList.contains("js-body--dark") ? "Jasny" : "Ciemny";
    };
    
    const init = () => {
        const button = document.querySelector(".js-button");
        button.addEventListener("click", toggleBackground);
    };
    init();
}
