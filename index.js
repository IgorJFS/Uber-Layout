const sections = document.querySelectorAll(".hover-section");
sections.forEach(function (section) {
    section.addEventListener("mouseenter", function () {
        document.querySelectorAll(".underline-line").forEach(function (line) {
            line.style.opacity = "0";
        });
        let underline = section.querySelector(".underline-line");
        underline.style.opacity = "1";
    });
    section.addEventListener("mouseleave", function () {
        let underline = section.querySelector(".underline-line");
        underline.style.opacity = "0";
    });
});
