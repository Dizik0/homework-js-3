const darkLightThemeEl = document.querySelector('#theme-switch-toggle');
const bodyEl = document.querySelector('body');
const themeSwicherEl = localStorage.getItem('Theme');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const addRemoveClass = () => {
  if (darkLightThemeEl.checked) {
    addClass(Theme.DARK);
    removeClass(Theme.LIGHT);
    localValueTheme(Theme.DARK);
  } else {
    addClass(Theme.LIGHT);
    removeClass(Theme.DARK);
    localValueTheme(Theme.LIGHT);
  }
};

const removeClass = theme => {
  bodyEl.classList.remove(theme);
};

const addClass = theme => {
  bodyEl.classList.add(theme);
};

const localValueTheme = value => {
  localStorage.setItem('Theme', value);
};

darkLightThemeEl.addEventListener('click', addRemoveClass);

if (themeSwicherEl === Theme.LIGHT) {
  removeClass(Theme.LIGHT);
} else if (themeSwicherEl === Theme.DARK) {
  addClass(Theme.DARK);

  darkLightThemeEl.checked = true;
}
