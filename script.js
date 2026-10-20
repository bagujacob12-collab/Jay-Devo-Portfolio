const navToggle = document.querySelector(".nav__toggle");
const navList = document.querySelector(".nav__menu");

navToggle.addEventListener("click", function () {
    navList.classList.toggle("is-open");

    const isOpen = navList.classList.contains("is-opn");

    navToggle.setAttribute("aria-expanded", isOpen);

    navToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});
