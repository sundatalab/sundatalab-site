/*
 * Sundatalab · suggestion de langue (sans redirection automatique).
 *
 * Corrige le 25/09/2026 : ce script effectuait auparavant une redirection
 * automatique via window.location.replace() vers /en/ lorsque le navigateur
 * n'etait pas configure en francais. Cette redirection s'executait aussi
 * pour les robots d'indexation lors du rendu JavaScript des pages, ce qui
 * empechait Google d'indexer les pages francaises a leur propre URL et
 * provoquait, sur la quasi-totalite des pages racine du site, les rapports
 * Google Search Console "page avec redirection" et "Google a choisi une URL
 * canonique differente". Diagnostic verifie en direct le 25/09/2026 :
 * navigation vers /isalis.html rendant le contenu anglais avec canonical
 * /en/isalis au lieu du contenu francais attendu.
 *
 * Nouveau comportement : chaque URL sert toujours son propre contenu, sans
 * aucune exception, y compris pour les robots d'indexation. Un bandeau non
 * bloquant et refermable propose de passer en anglais aux visiteurs humains
 * dont le navigateur n'est pas configure en francais et qui n'ont pas deja
 * ferme ce bandeau. Aucune redirection n'est jamais declenchee
 * automatiquement, meme pour un visiteur ayant deja utilise le selecteur de
 * langue : ce choix reste un raccourci propose dans le bandeau, jamais un
 * branchement automatique. L'espagnol n'est jamais propose automatiquement,
 * uniquement accessible via le selecteur de langue, comme avant.
 *
 * Aucun cookie, aucun appel reseau : la fermeture du bandeau est memorisee
 * en localStorage (device uniquement), coherent avec la politique de
 * confidentialite du site (aucun outil de mesure d'audience, minimisation
 * des donnees).
 */
(function () {
  "use strict";

  var STORAGE_KEY = "sundatalab_lang_banner_dismissed";

  try {
    var path = window.location.pathname;
    var match = path.match(/^\/(en|es)(?:\/|$)/);
    var currentLang = match ? match[1] : "fr";

    if (currentLang !== "fr") return; // le bandeau ne s'affiche que sur les pages FR

    var dismissed = null;
    try {
      dismissed = window.localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      /* localStorage indisponible : pas de memorisation, le bandeau peut reapparaitre */
    }
    if (dismissed === "1") return;

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
    if (isFrench) return;

    var file = path.substring(path.lastIndexOf("/") + 1) || "index.html";
    var enHref = "/en/" + file + window.location.search + window.location.hash;

    function showBanner() {
      if (!document.body) return;

      var bar = document.createElement("div");
      bar.setAttribute("role", "region");
      bar.setAttribute("aria-label", "Language suggestion");
      bar.style.cssText =
        "position:fixed;left:0;right:0;bottom:0;z-index:9999;background:#0f172a;color:#fff;" +
        "font-family:system-ui,-apple-system,sans-serif;font-size:14px;padding:12px 16px;" +
        "display:flex;align-items:center;justify-content:center;gap:16px;flex-wrap:wrap;" +
        "box-shadow:0 -2px 8px rgba(0,0,0,.15);";

      var text = document.createElement("span");
      text.textContent = "This page is also available in English.";

      var link = document.createElement("a");
      link.href = enHref;
      link.textContent = "Switch to English";
      link.style.cssText = "color:#fff;text-decoration:underline;font-weight:600;white-space:nowrap;";

      var close = document.createElement("button");
      close.type = "button";
      close.setAttribute("aria-label", "Dismiss");
      close.textContent = "✕";
      close.style.cssText =
        "background:transparent;border:none;color:#fff;font-size:16px;cursor:pointer;" +
        "line-height:1;padding:4px 8px;";
      close.addEventListener("click", function () {
        try {
          window.localStorage.setItem(STORAGE_KEY, "1");
        } catch (e) {}
        bar.remove();
      });

      bar.appendChild(text);
      bar.appendChild(link);
      bar.appendChild(close);
      document.body.appendChild(bar);
    }

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", showBanner);
    } else {
      showBanner();
    }
  } catch (e) {
    // Ce script ne doit jamais bloquer le rendu de la page.
  }
})();
