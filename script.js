const toggleButton = document.getElementById("toggleButton");
const iconToggle = document.getElementById("iconToggle");
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode");

  // Thay đổi biểu tượng
  if (document.body.classList.contains("dark-mode")) {
    iconToggle.classList.remove("fa-sun");
    iconToggle.classList.add("fa-moon");
  } else {
    iconToggle.classList.remove("fa-moon");
    iconToggle.classList.add("fa-sun");
  }
});

window.onscroll = function () {
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const progress = (scrollTop / scrollHeight) * 100;

  document.getElementById("progressBar").value = progress;
};
