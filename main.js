import init from './css-i18n.js';
import translations from './translations.js';

const changeLanguage = init(translations);

window.handleChangeLangBtnClick = (lang = 'en') => {
  document.documentElement.lang = lang;
  changeLanguage(lang);
}
