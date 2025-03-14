document.addEventListener("DOMContentLoaded", function () {
    // Toggle Navigation Menu
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.querySelector("nav ul");

    if (menuToggle) {
        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("show");
        });
    }

    // Smooth Scrolling
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Filter Projects
    function filterProjects(category) {
        const projects = document.querySelectorAll("#projects article");
        projects.forEach(project => {
            if (category === "all" || project.classList.contains(category)) {
                project.style.display = "block";
            } else {
                project.style.display = "none";
            }
        });
    }

    document.querySelectorAll(".filter-button").forEach(button => {
        button.addEventListener("click", function () {
            const category = this.getAttribute("data-category");
            filterProjects(category);
        });
    });

    // Lightbox Effect for Project Images
    const images = document.querySelectorAll("#projects img");
    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    document.body.appendChild(lightbox);

    images.forEach(img => {
        img.addEventListener("click", function () {
            lightbox.classList.add("active");
            const imgElement = document.createElement("img");
            imgElement.src = this.src;
            lightbox.innerHTML = "";
            lightbox.appendChild(imgElement);
        });
    });

    lightbox.addEventListener("click", function () {
        lightbox.classList.remove("active");
    });

    // Form Validation
    document.querySelector("form").addEventListener("submit", function (event) {
        let valid = true;
        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const message = document.getElementById("message");

        if (!name.value.trim()) {
            alert("Please enter your name.");
            valid = false;
        }
        if (!email.value.trim() || !email.value.includes("@")) {
            alert("Please enter a valid email address.");
            valid = false;
        }
        if (!message.value.trim()) {
            alert("Please enter a message.");
            valid = false;
        }

        if (!valid) {
            event.preventDefault();
        }
    });
});
