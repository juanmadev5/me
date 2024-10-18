const modeBtn = document.getElementById("mode");
const modeText = document.getElementById("switch-mode");
modeBtn.onchange = (e) => {
  if (modeBtn.checked === true) {
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add("dark");
    modeText.textContent = "Modo oscuro";
    window.localStorage.setItem("mode", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
    modeText.textContent = "Modo claro";
    window.localStorage.setItem("mode", "light");
  }
};

const mode = window.localStorage.getItem("mode");
if (mode == "dark") {
  modeBtn.checked = true;
  modeText.textContent = "Modo oscuro";
  document.documentElement.classList.remove("light");
  document.documentElement.classList.add("dark");
}

if (mode == "light") {
  modeBtn.checked = false;
  modeText.textContent = "Modo claro";
  document.documentElement.classList.remove("dark");
  document.documentElement.classList.add("light");
}
