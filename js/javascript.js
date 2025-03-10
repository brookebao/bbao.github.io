document.addEventListener("DOMContentLoaded", function () {
    // Get references to the filter buttons
    const btnProjects = document.getElementById("btn-projects");
    const btnArts = document.getElementById("btn-arts");
    const btnResearch = document.getElementById("btn-research");
    const btnAll = document.getElementById("btn-all");

    // Variable to store the currently selected category
    let currentCategory = "all";

    // Add event listeners for each button
    btnProjects.addEventListener("click", function () {
        toggleFilter("project-item");
    });

    btnArts.addEventListener("click", function () {
        toggleFilter("art-item");
    });

    btnResearch.addEventListener("click", function () {
        toggleFilter("research-item");
    });

    btnAll.addEventListener("click", function () {
        toggleFilter("all");
    });

    // Function to toggle the filtering of boxes by category
    function toggleFilter(category) {
        // If clicking the same category again, reset to "all"
        if (currentCategory === category) {
            category = "all";
            currentCategory = "all";
        } else {
            currentCategory = category;
        }

        filterBoxes(category);
    }

    // Function to filter boxes by category
    function filterBoxes(category) {
        console.log("Filtering category:", category);
        // Corrected query selector
        const boxes = document.querySelectorAll(".project-buttons");

        boxes.forEach((box) => {
            if (category === "all") {
                box.classList.remove("grayed-out");
            } else if (box.classList.contains(category)) {
                box.classList.remove("grayed-out");
            } else {
                box.classList.add("grayed-out");
            }
        });
    }
});
