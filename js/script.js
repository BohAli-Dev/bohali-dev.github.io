// JavaScript to toggle the navbar on mobile devices
function toggleDrawer() {
  const drawer = document.getElementById("drawer");
  drawer.classList.toggle("open");
}

// Animate drawer button
const menuBtn = document.getElementById("menu-btn");
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
});
