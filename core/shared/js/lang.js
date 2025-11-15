

const loaded_lang = sessionStorage.getItem('loaded_lang');

function init_lang(language) {
  document.querySelectorAll("[data-fr]").forEach(el => {
    el.textContent = el.dataset[language];
  });
}

function load_lang() {
  if (loaded_lang) {
    init_lang(loaded_lang);
  } else {
    init_lang('fr');
  }
}
load_lang();



let currentLang = "fr";

function switch_lang() {
  currentLang = currentLang === "fr" ? "en" : "fr";
  document.querySelectorAll("[data-fr]").forEach(el => {
    el.textContent = el.dataset[currentLang];
  });

  sessionStorage.setItem('loaded_lang', currentLang);
}

document.switch_lang = switch_lang;

export const rec_loaded_lang = loaded_lang; 