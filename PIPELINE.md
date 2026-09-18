# Pipeline de publication automatique

Ce depot est connecte a Vercel (integration Git native, projet isalis/sundatalab-site-9pqx).
Tout push sur la branche main declenche un build puis une mise en production automatique sur www.sundatalab.io (et sundatalab.io qui redirige en 308 vers www).

## Historique important

- Le projet Vercel d'origine "sundatalab-site" (cree avant la connexion Git, via des deploiements manuels "Vercel Drop") presentait un bug reproductible : toute mise en production issue d'un build Git renvoyait un 404 sur le chemin racine "/" du domaine personnalise et des domaines alias, alors que le reste du site fonctionnait. Cause isolee par elimination (contenu de vercel.json, middleware, config de redirection domaine : tout identique a isalis-site qui fonctionne) : etat interne corrompu du projet Vercel lui-meme, herite des mois de deploiements manuels anterieurs a la connexion Git.
- Resolution (2026-09-18) : migration des domaines www.sundatalab.io et sundatalab.io vers un nouveau projet Vercel propre "sundatalab-site-9pqx", connecte au meme depot GitHub. Deploiement verifie sain (racine 200, plus aucune page de test disponible pour le 404).
- L'ancien projet "sundatalab-site" est conserve a titre dormant (aucun domaine attache), a supprimer ou reutiliser selon decision future.

## Bug distinct identifie (non corrige, hors perimetre de l'incident ci-dessus)

Le script assets/js/lang-redirect.js redirige automatiquement un visiteur vers la version localisee (ex: /es) mais ne verifie pas si le chemin courant porte deja un prefixe de langue. Consequence : toute navigation directe vers un chemin deja prefixe (ex: /es, /en) declenche une seconde redirection qui double le prefixe (/es/es) et aboutit a un 404. Ce bug est independant du projet Vercel et preexistant ; a corriger separement dans le script cote client.

Derniere verification du pipeline: 2026-09-18.
