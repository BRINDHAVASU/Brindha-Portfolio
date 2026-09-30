/* =====================================================
   BRINDHA V PORTFOLIO
   JavaScript
===================================================== */


/* ================= PRELOADER ================= */

window.addEventListener("load", () => {

    const preloader =
        document.getElementById("preloader");

    setTimeout(() => {

        preloader.classList.add("hide");

    }, 700);

});


/* ================= NAVBAR ================= */

const navbar =
    document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* ================= MOBILE MENU ================= */

const menuBtn =
    document.getElementById("menuBtn");

const navMenu =
    document.querySelector(".nav-menu");


menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("open");

    const icon =
        menuBtn.querySelector("i");

    if (navMenu.classList.contains("open")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});


/* CLOSE MOBILE MENU */

document
    .querySelectorAll(".nav-link")
    .forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("open");

            const icon =
                menuBtn.querySelector("i");

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        });

    });


/* ================= ACTIVE NAV LINK ================= */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-link");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {

            link.classList.add("active");

        }

    });

});


/* ================= BACK TO TOP ================= */

const backToTop =
    document.getElementById("backToTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* ================= SCROLL REVEAL ================= */

const revealElements =
    document.querySelectorAll(
        ".skill-card, .project-card, .timeline-item, .experience-card, .about-content, .about-image-wrapper, .contact-wrapper"
    );


revealElements.forEach(element => {

    element.classList.add("reveal");

});


const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* ================= HERO 3D MOUSE EFFECT ================= */

const profileCard =
    document.querySelector(".profile-card");


const heroVisual =
    document.querySelector(".hero-visual");


if (profileCard && heroVisual) {

    heroVisual.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                heroVisual.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateY =
                ((x - centerX) / centerX) * 8;

            const rotateX =
                ((centerY - y) / centerY) * 8;

            profileCard.style.transform =
                `perspective(1000px)
                 rotateY(${rotateY}deg)
                 rotateX(${rotateX}deg)
                 translateY(-5px)`;

        }
    );


    heroVisual.addEventListener(
        "mouseleave",
        () => {

            profileCard.style.transform =
                `perspective(1000px)
                 rotateY(-8deg)
                 rotateX(5deg)
                 translateY(0)`;

        }
    );

}


/* ================= CURRENT YEAR ================= */

const currentYear =
    new Date().getFullYear();

const footer =
    document.querySelector("footer");

if (footer) {

    footer.innerHTML =
        footer.innerHTML.replace(
            "2026",
            currentYear
        );

}


/* ================= CONSOLE ================= */

console.log(
    "👋 Welcome to Brindha V's Portfolio!"
);

console.log(
    "Built with HTML, CSS & JavaScript."
);