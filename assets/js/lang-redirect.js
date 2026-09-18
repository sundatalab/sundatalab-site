/*
 * Sundatalab · détection de langue et redirection.
 *
 * Ce site est disponible en français (racine), anglais (/en/) et espagnol (/es/).
 * Ce script ne s'exécute une redirection automatique QUE depuis une page
 * française : si le visiteur n'a pas déjà choisi une langue (sélecteur de
 * langue ou visite précédente) et que son navigateur n'est pas configuré en
 * français, il est redirigé vers l'équivalent anglais de la page consultée.
 * L'espagnol n'est jamais choisi automatiquement : uniquement via le
 * sélecteur de langue.
 *
 * Aucun cookie, aucun appel réseau : la préférence est mémorisée en
 * localStorage (device uniquement), ce qui est cohérent avec la politique de
 * confidentialité du site (aucun outil de mesure d'audience, minimisation
 * des données).
 */
(function () {
  "use strict";

  var STORAGE_KEY = "sundatalab_lang";

  try {
    var path = window.location.pathname;
    var match = path.match(/\/(en|es)\/[^/]*$/);
    var currentLang = match ? match[1] : "fr";

    var stored = null;
    try {
      stored = window.localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      /* localStorage unavailable (private browsing, blocked storage...): skip persistence */
    }

    if (currentLang === "fr") {
      var target = stored;

      if (target !== "fr" && target !== "en" && target !== "es") {
        // First-ever visit: no stored preference yet, detect from the browser.
        var browserLangs =
          navigator.languages && navigator.languages.length
            ? navigator.languages
            : [navigator.language || navigator.userLanguage || ""];

        var isFrench = false;
        for (var i = 0; i < browserLangs.length; i++) {
          if (/^fr/i.test(browserLangs[i])) {
            isFrench = true;
            break;
          }
        }
        target = isFrench ? "fr" : "en";
      }

      if (target === "en" || target === "es") {
        var file = path.substring(path.lastIndexOf("/") + 1) || "index.html";
        var dest =
          target + "/" + file + window.location.search + window.location.hash;
        try {
          window.localStorage.setItem(STORAGE_KEY, target);
        } catch (e) {}
        window.location.replace(dest);
        return;
      }
    }

    // Staying on this page (either already on the right language, or on an
    // /en/ or /es/ page reached directly / via the language switcher):
    // remember it for the next time the visitor lands on the French root.
    try {
      window.localStorage.setItem(STORAGE_KEY, currentLang);
    } catch (e) {}
  } catch (e) {
    // Never block the page from rendering because of this script.
  }
})();
