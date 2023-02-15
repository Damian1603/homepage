{
    const toggleBackground = () => {
        const body = document.querySelector(".js-body");
        const nextColorName = document.querySelector(".nextColorName");
        body.classList.toggle("js-body--dark");
        nextColorName.innerText = body.classList.contains("js-body--dark") ? "jasny" : "ciemny";
    };
    
    const init = () => {
        const button = document.querySelector(".js-button");
        button.addEventListener("click", toggleBackground);
    };
    init();
}