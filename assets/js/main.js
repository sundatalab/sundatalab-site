// Sundatalab — comportements front-end de base (site statique)
document.addEventListener('DOMContentLoaded', function () {

  // Menu mobile
  var toggle = document.querySelector('.nav-toggle');
  var mobileNav = document.querySelector('.mobile-nav');
  if (toggle && mobileNav) {
    toggle.addEventListener('click', function () {
      mobileNav.classList.toggle('open');
    });
  }

  // Pré-sélection du sujet du formulaire de contact via ?sujet=... dans l'URL
  var subjectField = document.getElementById('sujet');
  if (subjectField) {
    var params = new URLSearchParams(window.location.search);
    var sujet = params.get('sujet');
    if (sujet) {
      for (var i = 0; i < subjectField.options.length; i++) {
        if (subjectField.options[i].value === sujet) {
          subjectField.selectedIndex = i;
          break;
        }
      }
    }
  }

  // Confirmation simple à la soumission (les formulaires sont prêts à être
  // connectés à un service d'envoi — voir note dans README-livraison.md)
  var forms = document.querySelectorAll('form[data-form]');
  forms.forEach(function (form) {
    form.addEventListener('submit', function (e) {
      var action = form.getAttribute('action');
      if (!action || action.indexOf('FORMULAIRE_A_CONNECTER') !== -1) {
        e.preventDefault();
        var note = form.querySelector('.form-note');
        if (note) {
          note.textContent = 'Formulaire prêt : à connecter à votre messagerie ou CRM avant mise en ligne.';
        }
      }
    });
  });

  // Année courante dans le footer
  document.querySelectorAll('.current-year').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
});
