
let items = document.querySelectorAll(".nav-item");

items.forEach(item => {
    item.addEventListener("click", () => {
        document.querySelector(".active").classList.remove("active");
        item.classList.add("active");
    })
});


const postBox = document.getElementById("postBox");

postBox.addEventListener("input", () => {
    postBox.style.height = "auto";                     // reset height
    postBox.style.height = postBox.scrollHeight + "px"; // grow based on content
});





