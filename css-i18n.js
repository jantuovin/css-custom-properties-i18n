const init = (translations) => {
  const style = document.createElement('style');

  const translationKeyCSSPropertyParts = Object.keys(translations).map((k) => {
    return `--${k}:'${translations[k][document.documentElement.lang || 'en']}'`;
  });
  style.innerHTML = `:root{${translationKeyCSSPropertyParts.join(';')}}`;

  const CSSDataAttributeRules = Object.keys(translations).map((k) => {
    return `*[data-t="${k}"]::after{content: var(--${k});}`;
  });
  style.innerHTML += `${CSSDataAttributeRules.join('')}`;

  document.head.appendChild(style);

  const changeLanguage = (lang = 'en') => {
    Object.keys(translations).forEach((k) => {
      document.documentElement.style.setProperty(`--${k}`, `'${translations[k][lang]}'`);
    });
  }
  return changeLanguage;
}

export default init;
