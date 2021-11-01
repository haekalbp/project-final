function setDarkMode(isDark) {
  if (isDark) {
    document.body.setAttribute('class', 'darkmode');

  } else {
    document.body.setAttribute('class', 'brightmode');
  }
}
