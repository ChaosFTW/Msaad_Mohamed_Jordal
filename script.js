
let items = document.querySelectorAll(".nav-item");

items.forEach(item => {
    item.addEventListener("click", () => {
        document.querySelector(".active").classList.remove("active");
        item.classList.add("active");
    })
})