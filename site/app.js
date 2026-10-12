const STORAGE_KEY = "azure-novice-to-expert-progress";
const checkboxes = [...document.querySelectorAll("[data-progress]")];
const progressBar = document.querySelector("#progress-bar");
const progressValue = document.querySelector("#progress-value");
const resetButton = document.querySelector("#reset-progress");
const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector("#site-nav");

function readProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [];
  } catch {
    return [];
  }
}

function updateProgress() {
  const completed = checkboxes.filter((checkbox) => checkbox.checked);
  const percentage = Math.round((completed.length / checkboxes.length) * 100);
  progressBar.style.width = `${percentage}%`;
  progressValue.textContent = `${percentage}%`;
  progressBar.parentElement.setAttribute("aria-label", `${percentage}% of credentials complete`);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(completed.map((checkbox) => checkbox.dataset.progress)));
}

const savedProgress = new Set(readProgress());
checkboxes.forEach((checkbox) => {
  checkbox.checked = savedProgress.has(checkbox.dataset.progress);
  checkbox.addEventListener("change", updateProgress);
});
updateProgress();

resetButton.addEventListener("click", () => {
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
  updateProgress();
});

menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

navigation.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }
});
