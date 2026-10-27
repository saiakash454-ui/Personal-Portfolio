```javascript


const hiddenElements = document.querySelectorAll(
    ".section, .skill-card, .project-card, .education-card, .contact"
);

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.1  
    }
);

hiddenElements.forEach((element) => {
    element.classList.add("hidden");
    observer.observe(element);
});



const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});


/* ================================
   NAVBAR SCROLL EFFECT
================================ */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 70) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


/* ================================
   SMOOTH NAVIGATION
================================ */

navLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        const targetId = link.getAttribute("href");

        if (targetId.startsWith("#")) {

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }

    });

});


/* ================================
   PAGE LOADED
================================ */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});
```
