const gridButton = document.getElementById("grid-view");
const listButton = document.getElementById("list-view");

const projectsGrid = document.querySelector(".projects-grid");
const projectsList = document.querySelector(".projects-list");

listButton.addEventListener("click", () => {

    projectsGrid.style.display = "none";
    projectsList.style.display = "block";

    listButton.classList.add("active");
    gridButton.classList.remove("active");

});

gridButton.addEventListener("click", () => {

    projectsGrid.style.display = "grid";
    projectsList.style.display = "none";

    gridButton.classList.add("active");
    listButton.classList.remove("active");

});