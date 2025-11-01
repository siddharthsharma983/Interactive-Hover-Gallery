const elems = document.querySelectorAll(".elem");

elems.forEach((elem) => {
  const img = elem.querySelector("img");

  elem.addEventListener("mousemove", (e) => {
    const rect = elem.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    img.style.left = `${x}px`;
    img.style.top = `${y}px`;
  });

  elem.addEventListener("mouseenter", () => {
    img.style.opacity = 1;
    img.style.transform = "translate(-50%, -50%) scale(1)";
  });

  elem.addEventListener("mouseleave", () => {
    img.style.opacity = 0;
    img.style.transform = "translate(-50%, -50%) scale(0.8)";
  });
});
