const toggleSwitch = document.querySelector('input[type="checkbox"]');

// Set Theme
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme)
}

// Switch Theme Dynamically
function switchTheme(event) {
  event.target.checked ? setTheme('dark') : setTheme('light');
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);
