javascript: (() => {
  fetch(
    'https://raw.githubusercontent.com/xxx/zzz'
  )
    .then((response) => response.text())
    .then((script) => eval(script));
})();
