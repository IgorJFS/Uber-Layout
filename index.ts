const sections = document.querySelectorAll(".hover-section");

sections.forEach(section => {
  section.addEventListener("mouseenter", () => {
    document.querySelectorAll(".underline-line").forEach(line => {
      (line as HTMLElement).style.opacity = "0";
    });

    const underline = section.querySelector(".underline-line") as HTMLElement;
    underline.style.opacity = "1";
  });

  section.addEventListener("mouseleave", () => {
    const underline = section.querySelector(".underline-line") as HTMLElement;
    underline.style.opacity = "0";
  });
});
