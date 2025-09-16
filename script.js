let menu = document.getElementById("menu");
let hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
  let closeBtn = document.createElement("div");
  closeBtn.textContent = "☰";
  closeBtn.classList.add("closeBtn");
  menu.appendChild(closeBtn);
  closeBtn.addEventListener("click", () => {
    menu.classList.remove("active");
    closeBtn.remove();
  });
});
