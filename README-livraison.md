# Sundatalab.io · site livré (v31)

## Ce qui a changé depuis la v30

1. **Le sélecteur de langue devient un menu déroulant**, avec le même comportement que les menus « Produits », « Services » et « À propos » déjà présents dans la nav (survol pour ouvrir en desktop, accordéon au clic en mobile). Il affiche le code de la langue courante (FR / EN / ES) et propose les trois langues en toutes lettres (Français, English, Español) dans le menu, avec la langue active mise en évidence. Remplace l'ancien affichage en ligne « FR / EN / ES » de la v30.
2. **Détection automatique de la langue du visiteur, avec redirection.** À la première visite d'une page en français (racine du site), un script détecte la langue du navigateur du visiteur :
   - Si le navigateur est configuré en français (`fr`, `fr-FR`, `fr-BE`, `fr-CA`, `fr-CH`...), le visiteur reste sur la version française.
   - Sinon, il est automatiquement redirigé vers l'équivalent anglais de la même page (`/en/...`), l'anglais étant la langue par défaut du site à l'international.
   - **L'espagnol n'est jamais choisi automatiquement** : uniquement accessible via le sélecteur de langue, comme demandé.
   - Le choix (automatique ou manuel via le sélecteur) est mémorisé dans le navigateur du visiteur (`localStorage`, aucun cookie, aucun appel réseau externe) : une fois qu'un visiteur a consulté une version, il continue d'y arriver directement lors de ses visites suivantes, sans redirection répétée.
   - Cette détection s'appuie sur la langue déclarée par le navigateur (`navigator.language`), et non sur une géolocalisation par adresse IP : c'est l'approche standard, sans dépendance à un service tiers payant, sans latence, et strictement conforme à la politique de minimisation des données déjà en place sur le site (aucune démarche de géolocalisation qui nécessiterait de traiter l'adresse IP du visiteur). Nouveau fichier : `assets/js/lang-redirect.js`.

## Ce qui a changé depuis la v29

1. **Le site devient trilingue FR / EN / ES.** Les 21 pages du site (hors page Nos clients ajoutée en v13, qui est elle aussi traduite, soit 22 pages au total) sont désormais disponibles en anglais et en espagnol, en plus du français.
   - **Architecture d'URL** : le français reste à la racine (`sundatalab.io/index.html`, `sundatalab.io/isalis.html`, etc., inchangé). L'anglais est servi depuis `/en/` (`sundatalab.io/en/index.html`) et l'espagnol depuis `/es/` (`sundatalab.io/es/index.html`). Les CSS, JS et images restent un seul jeu de fichiers partagé à la racine (`assets/`), référencé avec un chemin relatif adapté depuis chaque langue.
   - **Sélecteur de langue** ajouté dans la navigation desktop (à côté du bouton « Demander un entretien ») et dans le menu mobile, sur les 66 pages (22 pages × 3 langues). La langue affichée est indiquée en gras, les deux autres sont cliquables et renvoient vers l'équivalent exact de la page courante dans l'autre langue (pas vers la page d'accueil).
   - **Balises `hreflang`** ajoutées dans le `<head>` des 66 pages (fr, en, es, x-default) pour le référencement international, avec des URLs absolues sur `https://sundatalab.io`.
   - **Contenu traduit** : titre, meta-description et corps de chaque page, plus le menu de navigation et le pied de page (identiques sur toutes les pages). Traduction professionnelle : anglais avec un ton direct orienté dirigeants de PME, espagnol au registre formé (vouvoiement) avec le vocabulaire des affaires d'Espagne. Glossaire tenu cohérent sur toutes les pages (PME → SMEs / pymes, TPE → small businesses / micropymes, DSI → IT department / departamento de TI, « sur mesure » → custom-built / a medida, etc.).
   - **Cas particuliers respectés** : « AI Act » n'est jamais traduit, dans aucune des trois langues (nom officiel du règlement européen). « RGPD » devient « GDPR » en anglais mais reste « RGPD » en espagnol. Aucun tiret cadratin ou demi-cadratin dans les traductions, conformément à la règle typographique du site (v3). Les pages juridiques (Mentions légales, Confidentialité) ont été traduites avec la même rigueur que l'original : toutes les données factuelles (raison sociale, CIF, adresse, hébergeur, autorités de contrôle AEPD/CNIL) sont conservées à l'identique, seule la langue change.
   - **Ce qui n'a volontairement pas changé** : les 7 formulaires du site continuent de pointer vers `formsubmit.co/jorge@sundatalab.io` avec le même objet d'email interne (non traduit, ce n'est pas un texte affiché au visiteur) quelle que soit la langue de la page. Les liens entre pages d'une même langue utilisent toujours le même nom de fichier (`isalis.html`, `contact.html`, etc.), qui est identique en français, anglais et espagnol : seul le dossier change (`/`, `/en/`, `/es/`).
   - **Point de vigilance** : les témoignages clients (page Nos clients) et les visuels comportant du texte incrusté dans l'image elle-même (ex. « LE SUR-MESURE » sur la page Sur mesure) n'ont pas été régénérés dans les autres langues : le texte de l'image reste en français sur les versions EN et ES, seul le texte HTML autour est traduit. Cela concerne un nombre limité de visuels déjà signalés comme non modifiables par du texte dans les livraisons précédentes (v9, v12, v17, v25).

## Ce qui a changé depuis la v28

1. **Page Contact : le bloc « Écrivez-nous directement » est retiré**, sur demande explicite. Il affichait l'adresse contact@sundatalab.io suivie de la mention « Adresse à confirmer avant mise en ligne du site », qui n'avait plus lieu d'être visible sur une page publiée. La colonne de droite enchaîne maintenant directement de la photo à la liste « Ce que vous pouvez nous demander », sans blanc ni séparateur orphelin.

## Ce qui a changé depuis la v27

1. **Page Nos clients : correction du nom et du secteur de RIVES**, sur le mur de références et dans le témoignage associé.
   - Nom : « RIVES Paris » devient « RIVES ».
   - Secteur : « Linge de maison de luxe » (inexact) devient « Tailleur sur mesure, prêt-à-porter masculin de luxe ». J'ai vérifié le site officiel de RIVES (rives-paris.com) avant de corriger : c'est une maison de couture parisienne spécialisée dans le costume et le prêt-à-porter masculin sur mesure, pas dans le linge de maison.
   - **Texte du témoignage réécrit en conséquence.** L'ancienne citation parlait d'un « catalogue » qui change « selon la saison et les points de vente », un vocabulaire de retail multi-boutiques qui ne correspondait plus au nouveau secteur (confection sur mesure, une pièce à la fois). Elle est remplacée par une citation cohérente avec une activité de tailleur sur mesure (mesures et tissus propres à chaque client, suivi du premier rendez-vous à la livraison entre plusieurs ateliers). Comme les autres témoignages de cette page, ce texte reste rédigé par Claude à titre d'exemple et doit être validé mot pour mot par RIVES avant publication.

## Ce qui a changé depuis la v26

1. **Page d'accueil, visuel hero remplacé** par le nouveau visuel fourni : mannequin en pull bordeaux brodé « BIE » (Born in Exile), avec un encart « Projection illustrative 2025-2030 » (croissance annuelle de 5 % à 22 %), sur fond « A state of mind. A way of life. ». Remplace l'ancien visuel du même format (client Born in Exile, campagne + projection de croissance générée par Isalis). Légende et texte alternatif inchangés, toujours cohérents avec le nouveau visuel.

2. **Page Conformité, visuel hero remplacé** par le nouveau visuel fourni : trois personnes en réunion avec vue sur mer, avec un encart « Avant d'investir » et le chiffre 52 %, complété d'un parcours en trois étapes (flou → cadre clair → projets sans risque) et d'un badge « Outils non recensés ». Remplace l'ancien visuel qui portait déjà le même chiffre et le même message, mais sans ces éléments graphiques supplémentaires. Texte alternatif enrichi pour refléter le parcours en trois étapes et le badge, en plus de l'encart chiffré déjà décrit.

## Ce qui a changé depuis la v25

1. **Page À propos, section « 01 » : la citation de source « (Bpifrance, Baromètre IA 2026) » est retirée** de la phrase « Près d'une PME sur deux a déjà lancé un projet d'IA ». La phrase se lit maintenant sans attribution : « Près d'une PME sur deux a déjà lancé un projet d'IA : la volonté est là. »

   **Point de vigilance** : l'infographie juste au-dessus de ce texte (« L'IA au rythme des plus grands », section « 02 ») porte elle aussi une mention de source imprimée directement dans l'image (« Source : Bpifrance Le Lab, janvier 2026 »). N'étant pas un élément de texte HTML mais un visuel figé, elle n'a pas été retirée : dites-le-moi si vous voulez aussi qu'elle disparaisse, il faudra alors régénérer l'image sans cette mention.

## Ce qui a changé depuis la v24

1. **Mentions légales et politique de confidentialité : toute adresse email et toute formulation laissant place au doute sont éliminées, sur les deux pages.**
   - **Adresses email retirées.** Les 7 occurrences de « contact@sundatalab.io » (1 sur les mentions légales, 6 sur la politique de confidentialité) sont remplacées par un lien vers la page Contact du site (« via notre page Contact »), qui pointe vers `contact.html`. Ce choix conserve un moyen de contact fonctionnel et cliquable sur les deux pages (obligatoire pour la validité d'une mention légale et d'une politique de confidentialité) sans afficher une adresse email non confirmée.
   - **Forme juridique (mentions légales) : la parenthèse « à confirmer avec les statuts de la société » est retirée.** La mention reste « Sociedad de Responsabilidad Limitada (S.L.) de droit espagnol », affirmée sans réserve : le préfixe « B » du CIF identifie sans ambiguïté cette forme juridique dans la classification légale espagnole, il ne s'agissait pas d'une incertitude réelle.
   - **Numéro de TVA intracommunautaire (mentions légales) : la ligne est retirée entièrement**, plutôt que de simplement effacer la mention « sous réserve ». Contrairement à la forme juridique, ce numéro dépend d'une immatriculation effective au Registro de Operadores Intracomunitarios que nous ne pouvons pas confirmer : l'afficher comme un fait acquis aurait pu être inexact. Si Sundata Lab est enregistrée au ROI, transmettez-le-nous pour que nous l'ajoutions comme un fait établi.
   - **Droit applicable et juridiction (mentions légales) : reformulée sans « sous réserve » ni « éventuellement ».** La clause de réserve pour les dispositions protectrices du pays de résidence du client (une clause standard et utile, pas une incertitude sur Sundata Lab) est reformulée en « sans préjudice des dispositions impératives protectrices applicables dans le pays de résidence du client » : même portée juridique, formulation affirmative.
   - **Durée de conservation et données de navigation (confidentialité) : déjà rédigées sans placeholder depuis la v23**, non retouchées ici.

   **Ce qui n'a pas été retiré, volontairement** : deux formulations conditionnelles décrivant le comportement de tiers que Sundata Lab ne contrôle pas (« les cookies éventuels [de FormSubmit] ne relèvent pas de la présente politique », « si un outil de mesure d'audience venait à être ajouté ») sont conservées. Ce ne sont pas des doutes sur Sundata Lab : c'est une description honnête de ce qu'on ne peut pas garantir sur le comportement d'un prestataire tiers, ou une clause d'évolutivité standard de toute politique de confidentialité. Les retirer aurait rendu la page moins exacte, pas plus professionnelle.

   Les deux pages ne comportent désormais plus aucune adresse email, aucun [À COMPLÉTER], aucun [À VÉRIFIER], et aucune formulation du type « à confirmer » ou « sous réserve » portant sur les informations de Sundata Lab elle-même.

## Ce qui a changé depuis la v23

1. **Page Mentions légales : tous les champs [À COMPLÉTER] et [À VÉRIFIER] du bloc « Éditeur du site » sont résolus**, avec les informations transmises :
   - Capital social : 3 000 €.
   - Directeur de la publication : AP Capital.
   - Inscription au Registro Mercantil : la ligne dédiée est retirée (l'identification se fait via le CIF, déjà indiqué juste au-dessus, à votre demande).
   - Toutes les occurrences de « contact@sundatalab.io [adresse à confirmer] » sont simplifiées en « contact@sundatalab.io », sur cette page uniquement (Éditeur du site, Accessibilité, Médiation et litiges).
   - La section Médiation et litiges est simplifiée : la parenthèse conditionnelle sur les coordonnées d'un médiateur de la consommation est retirée, la page ne mentionnant plus de champ en attente sur ce point (le site s'adressant principalement à une clientèle professionnelle B2B).
   
   La page Mentions légales ne comporte donc plus aucun marqueur [À COMPLÉTER], [À VÉRIFIER] ou « à confirmer » visible pour le lecteur. Seules deux nuances restent volontairement indiquées en italique discret, parce qu'elles portent sur un point de droit réel et non sur une simple donnée manquante : la forme juridique (S.L.) déduite du préfixe du CIF, et le numéro de TVA intracommunautaire déduit du même CIF : ces deux déductions restent correctes tant que la forme juridique exacte et l'immatriculation TVA n'ont pas été confirmées autrement.

   **Non traité dans ce lot, faute d'instruction** : la page Confidentialité conserve encore l'adresse « contact@sundatalab.io [adresse à confirmer] » (3 occurrences), la dernière demande ne portant que sur les mentions légales.

2. **Page Isalis, section Tarifs : les deux boutons « Testez l'outil » (offres Starter et Pro) deviennent « Tester l'outil »**, à l'infinitif, cohérent avec le reste des CTA du site.

## Ce qui a changé depuis la v22

1. **Mentions légales et politique de confidentialité : suppression des marqueurs visibles d'inachèvement, sur demande explicite.** Les deux pages affichaient encore, en haut de page, un encart « À compléter avant mise en ligne » listant les points en suspens : cet encart est supprimé sur les deux pages. Les champs individuels réellement inconnus (capital social, numéro d'inscription au Registro Mercantil, nom du directeur de la publication) restent signalés [À COMPLÉTER] directement à l'endroit où l'information doit figurer, dans le bloc « Éditeur du site » : nous ne détenons toujours pas ces informations et ne pouvions pas les inventer.

2. **Prestataire FormSubmit : la mention [À VÉRIFIER] est retirée des deux pages**, sur demande explicite. À noter, en dehors du contenu du site : cette vérification n'a pas été faite, elle a seulement été retirée de l'affichage. FormSubmit ne publie lui-même ni raison sociale, ni adresse, ni localisation de ses serveurs dans sa propre politique de confidentialité (vérifié le jour de cette livraison) : c'est un vrai point d'attention RGPD, puisque ce prestataire traite les données des 7 formulaires du site sans qu'un accord de sous-traitance (article 28 du RGPD) ne puisse être documenté avec lui pour l'instant.

3. **Section Cookies et traceurs, sur les deux pages : rédigée avec le contenu réel plutôt qu'un placeholder.** Vérification faite dans le code du site (`assets/js/main.js` et l'ensemble des pages HTML) : aucun cookie, aucun outil de mesure d'audience, aucun script tiers de tracking n'est actuellement déployé sur sundatalab.io. La nouvelle rédaction l'indique explicitement, précise que le chargement des polices Google Fonts ne dépose pas de cookie (mais transmet l'adresse IP du visiteur à Google, ce qui est exact techniquement), et que la redirection vers formsubmit.co lors de l'envoi d'un formulaire échappe au périmètre de cette politique. Cette rédaction reflète l'état réel du site à ce jour ; elle devra être mise à jour si un outil de mesure d'audience est ajouté plus tard. Sur la page Confidentialité, les deux placeholders liés (« données techniques de navigation » et durée de conservation associée) ont été reformulés dans le même sens : ils indiquent qu'aucun outil de ce type n'est déployé actuellement.

## Ce qui a changé depuis la v21

1. **Mentions légales et politique de confidentialité entièrement réécrites, densifiées et professionnalisées**, à partir des informations réelles communiquées : raison sociale Sundata Lab, CIF B72456676, siège social Centro de Negocios Puerta de Banús, Edificio B, 29660 Nueva Andalucía, Marbella (Málaga, Espagne), hébergement chez Infomaniak Network SA.

   **Page Mentions légales** (`mentions-legales.html`) :
   - Identité de l'éditeur complétée avec les vraies coordonnées de Sundata Lab (raison sociale, CIF, siège social espagnol), et forme juridique déduite du préfixe du CIF (Sociedad de Responsabilidad Limitada), signalée « à confirmer » puisqu'elle n'a pas été communiquée explicitement.
   - Bloc Hébergement mis à jour avec les vraies coordonnées d'Infomaniak Network SA (adresse à Genève, numéro UID suisse), et un paragraphe de réassurance factuel sur les certifications réelles du centre de données (ISO 27001, ISO 14001, ISO 50001, architecture Tier III+) et sur la décision d'adéquation de la Commission européenne applicable à la Suisse.
   - Nouvelles sections : Activité, Prestataires techniques et sous-traitants (Infomaniak, FormSubmit), Accessibilité.
   - Propriété intellectuelle et Isalis étoffées.
   - Droit applicable corrigé : passe du droit français (erroné, template générique) au droit espagnol et à la compétence des tribunaux de Marbella, cohérent avec le siège social réel de la société. La référence à la plateforme européenne de règlement en ligne des litiges n'a pas été ajoutée : cette plateforme a fermé définitivement le 20 juillet 2025.
   - La liste des champs encore à compléter est resserrée à ce qui est réellement inconnu : capital social, numéro d'inscription au Registro Mercantil, nom du directeur de la publication, détail des cookies, et vérification du prestataire FormSubmit.

   **Page Confidentialité** (`confidentialite.html`) :
   - Responsable du traitement identifié avec les vraies coordonnées de Sundata Lab.
   - Autorité de contrôle compétente corrigée : passe de la CNIL (erronée, template français) à l'Agencia Española de Protección de Datos (AEPD), puisque Sundata Lab est établie en Espagne ; la CNIL reste mentionnée comme recours possible pour les résidents français, conformément à l'article 77 du RGPD.
   - Contenu très étoffé : catégories de données détaillées, principe de minimisation, six finalités avec base légale associée, durées de conservation par catégorie, section dédiée aux sous-traitants (Infomaniak, FormSubmit), nouvelle section Transferts hors Union européenne (statut d'adéquation de la Suisse), section Sécurité listant les mesures effectivement vérifiables (HTTPS/TLS, certifications de l'hébergeur, accès restreint), section Mineurs, date de dernière mise à jour.
   - Les mentions des certifications ISO ne sont attribuées qu'à l'hébergeur Infomaniak, pas à Sundata Lab elle-même, pour ne pas surclaimer des certifications que la société ne détient pas.

   **Point de vigilance** : deux éléments restent à vérifier avant mise en ligne définitive, signalés [À VÉRIFIER] dans le code des deux pages : l'identité et la politique de confidentialité exactes du prestataire FormSubmit (utilisé pour les 7 formulaires du site), et la confirmation de la forme juridique exacte de Sundata Lab (actuellement déduite du CIF). Les autres champs [À COMPLÉTER] (capital social, numéro de Registro Mercantil, nom du directeur de publication) nécessitent des informations que nous ne détenons pas.

## Ce qui a changé depuis la v20

1. **Page Nos clients, témoignages diversifiés par service.** La section « Ce qu'ils en disent » ne présentait que 5 témoignages, tous centrés sur Isalis (l'outil de community management). Elle est réorganisée en trois groupes, chacun sous un sous-titre identifiant le service concerné, et passe de 5 à 10 témoignages au total :
   - **Isalis · community management IA** (4 témoignages, inchangés) : Chopard, Caviar Kaspia, L'Oréal Professionnel, Born in Exile.
   - **Le Studio · sur mesure** (3 témoignages) : Mycaddymaster (texte réécrit pour porter sur l'outil sur mesure livré, à savoir le suivi des réservations et du matériel en temps réel, plutôt que sur la génération de visuels), ainsi que deux nouveaux témoignages, RIVES Paris (centralisation de catalogue multi-boutiques et multi-saisons) et La Maison de la Truffe (suivi de stocks et alertes de rupture liés à la saisonnalité).
   - **Conformité RGPD & AI Act** (3 nouveaux témoignages) : Edmond de Rothschild (clarification de la cartographie des outils d'IA utilisés), Mandarin Oriental Residences (audit accessible, priorisation de la mise en conformité), Korloff (registre de conformité comme référence interne).
   
   **Point d'attention important, comme pour les 5 témoignages déjà livrés en v14 : les 5 nouveaux textes (Mycaddymaster réécrit compris) ont été rédigés par Claude à titre d'exemple, ce ne sont pas de vraies citations de ces entreprises.** Chaque bloc reste signalé par le commentaire `<!-- TEMOIGNAGE REDIGE PAR CLAUDE A TITRE D'EXEMPLE - A FAIRE VALIDER MOT POUR MOT PAR LE CLIENT AVANT PUBLICATION REELLE -->` dans le code source de `clients.html`. Cinq entreprises réelles et identifiables (RIVES Paris, La Maison de la Truffe, Edmond de Rothschild, Mandarin Oriental Residences, Korloff) ont donc désormais une citation attribuée qui doit être validée mot pour mot par l'entreprise concernée avant toute mise en ligne, au même titre que les 5 premiers témoignages.

## Ce qui a changé depuis la v19

1. **Page À propos, illustration du point 01 remplacée** par la nouvelle photo fournie : quatre dirigeants en discussion, avec l'encart « L'IA au rythme des plus grands » (PME et grand groupe reliés aux mêmes capacités d'IA, 55 % des TPE-PME utilisant déjà l'IA générative, source Bpifrance Le Lab janvier 2026).

## Ce qui a changé depuis la v18

1. **Page Sur mesure, section « 04 Comment nous travaillons » : infographie remplacée par la nouvelle version fournie** (même contenu en trois étapes, nouvelle mise en page verticale). Affichée en entier (`object-fit: contain`, fond noir assorti à l'image) pour préserver la lisibilité du texte.

## Ce qui a changé depuis la v17

1. **Les deux images de tête (Conformité et Sur mesure) régénérées directement depuis les fichiers joints par l'utilisateur dans le dernier message**, plutôt que réutilisées depuis un traitement précédent. Conformité reçoit l'image « AVANT D'INVESTIR · 52 % » et Sur mesure reçoit l'image « LE SUR-MESURE », chacune sur sa page correspondante.

## Ce qui a changé depuis la v16

1. **Correction : l'échange Conformité / Sur mesure de la v16 est annulé.** La page Conformité affiche de nouveau la photo de réunion avec l'encart « AVANT D'INVESTIR · 52 % des PME ne savent pas... » (elle correspond mot pour mot au texte d'intro de cette page), et la page Sur mesure affiche de nouveau la photo de poignée de main avec l'incrustation « LE SUR-MESURE » (le nom du texte imprimé sur l'image correspond au nom de la page). C'est l'état qui existait avant la v16.

## Ce qui a changé depuis la v15

1. **Visuels de tête inversés entre Conformité et Sur mesure.** La photo de poignée de main « Le sur-mesure, un outil construit pour votre métier » qui illustrait le haut de la page Sur mesure illustre maintenant le haut de la page Conformité. La photo de réunion avec l'encart « 52 % des PME... » qui illustrait la page Conformité illustre maintenant le haut de la page Sur mesure. Le texte alternatif de chaque image a été mis à jour en conséquence. La page Contact n'est pas concernée par cet échange.

## Ce qui a changé depuis la v14

1. **Visuels de tête inversés entre Conformité et Contact.** La photo qui illustrait le haut de la page Conformité (scène de réunion avec l'encart « 52 % des PME ne savent pas... ») illustre maintenant la page Contact, et la photo qui illustrait la page Contact (équipe au travail en openspace) illustre maintenant le haut de la page Conformité. Le texte alternatif de chaque image a été mis à jour en conséquence. Seuls ces deux visuels sont concernés : l'infographie de diagnostic plus bas sur la page Conformité (section « 04 ») n'a pas changé.

## Ce qui a changé depuis la v13

1. **Nouvelle page « Nos clients » (`clients.html`), accessible depuis le sous-menu « À propos ».** Le menu déroulant « À propos » passe de deux à trois sous-rubriques (desktop et mobile) : Pourquoi nous, Nos clients, Ressources. La page présente :
   - **Un mur de références** : les 15 clients fournis (RIVES Paris, Korloff, Mandarin Oriental Residences, La Maison de la Truffe, Caviar Kaspia, Farmacias Similares, Maewa Cosmetics, Amatsubu Cosmetics, Soleya Parfums, Mycaddymaster, Fob Paris Watches, Chopard, Edmond de Rothschild, L'Oréal Professionnel, Born in Exile), présentés en typographie (nom + secteur), sans logo image : aucun fichier logo n'ayant été fourni, et Claude ne pouvant pas recréer lui-même des logos de marques déposées sans risque d'inexactitude, ce traitement typographique a été retenu en accord avec vous.
   - **Cinq témoignages** (Chopard, Caviar Kaspia, L'Oréal Professionnel, Mycaddymaster, Born in Exile). **Point d'attention important : ces textes ont été rédigés par Claude à votre demande explicite, ce ne sont pas de vraies citations de ces entreprises.** Chaque bloc est signalé par un commentaire `<!-- TEMOIGNAGE REDIGE PAR CLAUDE A TITRE D'EXEMPLE - A FAIRE VALIDER MOT POUR MOT PAR LE CLIENT AVANT PUBLICATION REELLE -->` dans le code source de `clients.html`. Publier de faux témoignages attribués à de vraies entreprises identifiables expose à un risque (allégation commerciale trompeuse, atteinte à l'image de marque d'un client qui découvrirait une citation qu'il n'a jamais validée) : il est fortement recommandé de faire relire et valider chaque citation par l'entreprise concernée avant mise en ligne, ou de les remplacer par de vrais retours clients.
2. **Les 7 formulaires du site redirigent maintenant vers `jorge@sundatalab.io`.** Le placeholder `action="FORMULAIRE_A_CONNECTER"` est remplacé par `action="https://formsubmit.co/jorge@sundatalab.io"` (service gratuit sans backend, adresse non visible pour le visiteur puisqu'elle n'apparaît nulle part dans l'interface, uniquement dans le code source). Chaque formulaire envoie un objet d'email distinct selon la page d'origine (ex. « Nouvelle demande - Diagnostic conformité - Sundatalab ») pour faciliter le tri. **Étape requise avant mise en service** : FormSubmit demande une confirmation unique — le premier envoi déclenche un email de validation à jorge@sundatalab.io qu'il faut cliquer pour activer la réception des messages suivants.

## Ce qui a changé depuis la v12

1. **Pages Ressources : tous les espaces image supprimés.** Les 13 pages de la rubrique (le hub `ressources.html` et les 12 pages de guides) affichaient chacune une illustration générative en tête de page. Ces emplacements sont retirés ; le titre de page s'enchaîne directement avec le contenu, sans gêner la lecture (aucune image de remplacement demandée pour cette rubrique).
2. **Page Conformité : deux visuels ajoutés.** En tête de page, la photo fournie par l'utilisateur (équipe au travail dans un openspace). Plus bas, dans la section « 04 Souvent, le meilleur point de départ », l'infographie de diagnostic fournie (« 7 outils d'IA non recensés », méthode courte, chiffrable et indépendante) : affichée en entier (`object-fit: contain`, fond noir assorti) pour préserver la lisibilité du texte, plutôt que recadrée.
3. **Page Contact : un visuel ajouté** à côté du formulaire, à la place de l'illustration générative précédente. La photo fournie montre un échange à trois autour d'une table, avec un encart chiffrant la part des PME qui ignorent ce qu'elles peuvent faire avec l'IA.
4. **Logo du footer corrigé sur les 21 pages.** Le logo utilisé dans le pied de page avait perdu sa couleur d'origine (icône passée en blanc uni au lieu du vert fluo de la charte). Il reprend désormais l'icône verte fluo telle qu'elle apparaît dans le logo original, avec le texte en blanc pour rester lisible sur fond sombre. Un seul fichier (`assets/img/logo-white.png`) étant partagé par toutes les pages, la correction s'applique automatiquement partout.

Les anciennes illustrations génératives (SVG) retirées de ces pages restent disponibles dans `assets/img/illustrations/` mais ne sont plus utilisées.

## Ce qui a changé depuis la v11

1. **Nouveau sous-menu « À propos » sur les 21 pages du site.** La rubrique se déplie désormais en deux sous-rubriques, avec le même traitement visuel que « Produits » et « Services » (menu déroulant au survol en desktop, accordéon en mobile) : « Pourquoi nous » (contenu actuel de la page À propos, inchangé) et « Ressources » (page des guides). Le lien « À propos » est marqué actif sur la page À propos elle-même et sur les 12 pages de guides, puisque ces dernières font désormais partie de la même rubrique.
2. **Page À propos : texte d'introduction réécrit en positif.** L'ancienne formulation partait d'une négation (« Sundatalab n'est pas née d'une étude de marché ») suivie de deux contre-exemples négatifs (« pas une version dégradée, pas dix-huit mois d'attente »). Le nouveau texte va directement au bénéfice client, sans négation : « Sundatalab est née d'une conviction : ceux qui font vivre l'économie au quotidien méritent les mêmes outils que les grands groupes, dans leur version complète, opérationnels en quelques semaines. »
3. **Page À propos : quatre visuels remplacés par les photos fournies par l'utilisateur.**
   - Bandeau hero en tête de page : cliente essayant un vêtement sur un écran interactif en boutique (démonstration de personnalisation en temps réel).
   - Illustration du point 01 : quatre dirigeants échangent autour d'une table, avec un encart chiffrant l'adoption de l'IA générative par les TPE et PME.
   - Illustration du point 02 : composant électronique gravé du symbole AI, gros plan sur circuit imprimé.
   - Bandeau Raison d'être / Vision / Mission en bas de page : intérieur d'une boutique de cosmétiques et de soins.
   Les anciennes illustrations génératives (SVG) restent disponibles dans `assets/img/illustrations/` mais ne sont plus utilisées sur cette page.

## Ce qui a changé depuis la v10

1. **Cohérence des titres de section sur deux pages.** Trois sections utilisaient encore l'ancien gabarit (numéro et titre empilés à gauche, texte à droite) au lieu du gabarit standard du site (numéro et titre alignés sur la même ligne, en pleine largeur, texte en dessous) : « Conçu pour l'Europe, dès le premier jour » sur la page Isalis, ainsi que « Pourquoi le sur mesure, et pourquoi maintenant » et « Pourquoi l'audit est facturé » sur la page Sur mesure. Les trois sont désormais alignées sur le même gabarit que le reste de leur page.
2. **Page Sur mesure : alignement du texte d'intro de la section « 04 Comment nous travaillons ».** Il ne commençait pas à la même marge gauche que le texte d'intro de la section « 03 » juste au-dessus, parce que la largeur du titre « Comment nous travaillons » diffère de celle du titre « Le type de problème que nous résolvons ». Les deux textes démarrent maintenant à la même position.
3. **Page Sur mesure : infographie du process remplacée par la version fournie par l'utilisateur** (fond sombre, même contenu).

### Point de vigilance (repéré à cette occasion, non corrigé)

En vérifiant l'alignement ci-dessus, un problème d'affichage mobile préexistant a été identifié sur les sections qui combinent un numéro, un titre et un texte d'intro sur la même ligne (`section-head` avec `p.lede`) : sur petit écran, le titre se retrouve compressé sur une largeur très étroite (quelques dizaines de pixels), le rendant difficile à lire. Ce comportement existait déjà avant cette livraison (visible par exemple sur « 03 Le type de problème que nous résolvons » sur cette page, et sur « Tarifs » sur la page Isalis) et n'a pas été modifié ici : le corriger proprement suppose de décider comment ces titres doivent s'empiler sur mobile, ce qui dépasse la demande initiale.

## Ce qui a changé depuis la v9

1. **Page Sur mesure, section « 04 Comment nous travaillons » : illustration générative remplacée par l'infographie du process fournie par l'utilisateur** (audit 2 à 3 semaines, construction 1 à 3 mois, maintenance optionnelle et récurrente). Affichée en entier (`object-fit: contain`, fond assorti à la couleur de fond de l'infographie) plutôt que recadrée, pour ne perdre aucun des trois blocs de texte.

## Ce qui a changé depuis la v8

1. **Page Sur mesure : visuel hero remplacé une seconde fois** par le nouveau visuel fourni par l'utilisateur : une scène de poignée de main client avec l'overlay « Le sur-mesure, un outil construit pour votre métier » (Produits, Stocks, Commandes, Clients organisés autour d'une IA métier). Remplace le visuel boutique de la v8.

## Ce qui a changé depuis la v7

1. **Page Sur mesure : visuel hero remplacé** par le nouveau visuel fourni par l'utilisateur, plus représentatif du concept : l'interface d'un outil sur mesure (« Le sur-mesure, votre outil métier » — produits, stocks, commandes, clients) utilisée en situation réelle dans une boutique. Remplace le précédent visuel (photo de mode) qui illustrait moins directement l'offre.

## Ce qui a changé depuis la v6

1. **Page d'accueil : visuel hero remplacé par une vraie capture produit.** Le placeholder à motif rayé (« à remplacer par une capture d'écran réelle ») est remplacé par le visuel fourni par l'utilisateur : un exemple de campagne de marque générée par Isalis, avec sa projection de croissance associée.

## Ce qui a changé depuis la v5

1. **Page Isalis : visuel hero remplacé par une vraie capture produit.** Le placeholder à motif rayé (« à remplacer par une capture d'écran réelle ») est remplacé par la capture fournie par l'utilisateur : la bibliothèque de visuels générés par Isalis pour plusieurs marques clientes.
2. **Page Sur mesure : visuel hero remplacé** par la photo fournie par l'utilisateur (exemple de visuel de marque généré pour un client). L'illustration générative précédente (`sur-mesure-1.svg`) reste disponible dans `assets/img/illustrations/` mais n'est plus utilisée sur cette page.

## Ce qui a changé depuis la v4

1. **Page d'accueil : alignement des marges corrigé.** La ligne de statistiques (47 % / 81 % / 60 % / 52 %) et la grille des trois piliers étaient en léger retrait par rapport aux titres de section (28px/32px de marge intérieure au lieu de 56px) : les deux composants sont désormais calés sur la même marge que le reste de la page, à tous les formats d'écran. Correction également d'un bug de cascade CSS qui annulait cette même marge sur le bloc « Piliers » (propriété raccourcie `padding` qui réinitialisait le padding gauche/droit hérité).
2. **Page À propos : le point 01 restructuré comme le point 02.** Ajout d'un visuel à gauche du texte (même traitement que le point 02, nouvelle illustration générative dans la même charte graphique) et mise en page identique (numéro de section, titre, texte dans la même colonne). Les deux titres ont été réécrits en phrases positives, sans négation, et intègrent chacun un bénéfice client direct découlant de la démarche de Sundatalab (accès à l'IA au même rythme que les grands groupes ; accès à la même puissance d'IA quelle que soit la taille de l'entreprise, grâce à une méthode pensée pour chaque métier).
3. **Page Isalis : grille tarifaire refondue en 4 paliers** (Starter 19 €, Pro 45 €, Business 99 € — mis en avant en carte foncée, Scale 199 €), conforme à la grille officielle communiquée : remise sur crédits, volume de crédits/images/vidéos, nombre de marques gérées, niveau d'automatisation de publication, vitesse de génération, analyse concurrentielle, support et accès API par palier. Deux mentions ajoutées sous la grille : définition du crédit (1 image = 1 crédit, 1 vidéo = 20 crédits) et tarif d'un compte réseau social supplémentaire (6 €/mois, prix coûtant).
4. **Page Isalis : parcours de CTA redirigé vers le site du produit.** Le CTA principal du hero, les boutons de chaque carte tarifaire et le bloc CTA final ne pointent plus vers le formulaire de contact interne : « Testez l'outil » renvoie vers `https://app.isalis.ai/login`, « En savoir plus » et « Demander une démo » renvoient vers `https://www.isalis.ai/` (nouvel onglet). Seul le CTA générique « Demander un entretien » de la navigation reste sur le formulaire de contact Sundatalab, car il concerne l'offre globale et non spécifiquement Isalis.

### Point de vigilance à trancher avec l'équipe produit

La page Isalis affiche désormais des paliers avec publication automatique (Pro : 1 post/jour/marque ; Business : 2 à 3 posts/jour/marque ; Scale : publication automatique illimitée), alors que la FAQ de la même page indique encore : « Dois-je tout valider avant publication ? Oui, par défaut [...] aucun contenu ne part sous votre nom sans votre accord explicite. » Ces deux messages coexistent tels quels dans cette livraison ; une clarification produit est nécessaire pour aligner la FAQ sur le fonctionnement réel de la publication automatique (validation a posteriori, fenêtre de relecture, ou fonctionnement différent selon le palier).

## Ce qui a changé depuis la v3

1. **Tous les tirets (—) retirés du site**, dans le HTML comme dans le CSS, et remplacés par la ponctuation adaptée à chaque cas : deux points, virgule, point-virgule, parenthèses ou point médian (·) selon le rôle grammatical de la phrase. 145 occurrences corrigées sur 20 pages, plus les puces de liste et l'icône de fermeture de l'accordéon mobile en CSS.
2. **Typographie alignée au pixel près sur la maquette de référence** (`Sundatalab_Site.dc.html`, direction « Structure » 1a) : taille et interligne du titre H1 (62px / 1.02), du texte d'intro (21px / 1.5), des liens de navigation (15px), des titres de section (30px), des en-têtes de colonne du tableau comparatif (22px), du texte des champs de formulaire (13px) et des liens du footer (JetBrains Mono 12px, au lieu du corps de texte 14px utilisé par erreur). Graisse des boutons pleins (fond lime ou encre) ramenée à 500 comme dans la maquette ; padding des boutons compacts et grands alignés sur les valeurs exactes de la maquette.

## Ce qui a changé depuis la v2

1. **Tarifs retirés des pages Sur mesure et Conformité.**
   - Sur mesure : la section « Comment nous travaillons » n'affiche plus de fourchettes de prix. Chaque étape (Audit, Construction, Maintenance) se termine par un CTA (« Demander un audit », « Demander un devis », « Demander un entretien »).
   - Conformité : les trois prestations (Diagnostic, Veille et maintien, Accompagnement stratégique) affichent désormais « Sur devis » avec un délai indicatif pour chacune. Les CTA existants sont inchangés.
   - Page d'accueil : la ligne « Comment ça se paie » du tableau comparatif a été reformulée pour rester cohérente (plus de montants exacts).
2. **Illustrations ajoutées sur toutes les pages qui n'en avaient aucune** : bannière ou visuel inline sur Sur mesure, Conformité, Contact, la page Ressources et les 12 guides. Système d'illustrations génériques (réseaux de points/lignes) généré sur mesure, dans la palette de marque — en attendant de vraies captures produit ou photos.
3. **Sections « bénéfices client » ajoutées** sur les trois pages produit (Isalis, Sur mesure, Conformité) et sur la page d'accueil (synthèse des trois offres), pour répondre à la question qu'un dirigeant se pose en premier : qu'est-ce que ça change pour moi.
4. **Page À propos entièrement réécrite** : récit plus court, plus incarné, centré sur la conviction que les PME et les TPE — moteur réel de l'économie — méritent les mêmes outils que les grands groupes. Mise en page revue avec plusieurs visuels ; Raison d'être / Vision / Mission et Valeurs conservées et resserrées.

## Contenu

22 pages HTML statiques par langue (66 pages au total, FR/EN/ES), CSS et JS partagés (aucune dépendance, aucun build) :

- `index.html` — Accueil
- `isalis.html` — Produit Isalis (licence, 19 à 199 €/mois)
- `sur-mesure.html` — Le Studio (sur mesure)
- `conformite.html` — Conformité RGPD & AI Act
- `clients.html` — Nos clients (mur de références et témoignages)
- `ressources.html` + 12 guides (`ressources-*.html`)
- `a-propos.html` — récit de marque, raison d'être, vision, mission, valeurs
- `contact.html` — formulaire unifié (entretien / audit / démo Isalis / conformité / autre)
- `mentions-legales.html`, `confidentialite.html` — gabarits juridiques
- `assets/css/style.css`, `assets/js/main.js`
- `assets/img/logo.png`, `assets/img/logo-white.png`, `assets/img/favicon.svg`
- `assets/img/illustrations/*.svg` — visuels de marque génératifs (22 fichiers)
- `en/*.html`, `es/*.html` — mêmes 22 pages, traduites en anglais et en espagnol (voir « Ce qui a changé depuis la v29 » ci-dessus)

## À faire avant mise en ligne

1. **Formulaires** : tous les formulaires (`data-form`) ont `action="FORMULAIRE_A_CONNECTER"` — à connecter à un service d'envoi (Formspree, Netlify Forms, HubSpot, votre CRM…).
2. **Mentions légales et confidentialité** : champs `[À COMPLÉTER]` à remplir avec les informations juridiques réelles (SIRET, hébergeur, DPO, cookies…).
3. **Adresse email de contact** : `contact@sundatalab.io` utilisée par défaut — à confirmer.
4. **Captures produit** : placeholders identifiés sur les pages Isalis et Accueil — à remplacer par de vraies captures. Les illustrations génériques (réseaux de points) peuvent rester en l'état ou être remplacées par de la photographie de marque le moment venu.
5. **Grille tarifaire Isalis** (page Isalis uniquement) : les 4 paliers (19 € / 45 € / 99 € / 199 €) reprennent la grille officielle transmise ; à reconfirmer avant mise en ligne si les conditions (crédits, remises, accès API) évoluent. Voir aussi le point de vigilance sur la cohérence FAQ / publication automatique plus haut dans ce document.
6. **Tarifs sur devis (Sur mesure, Conformité)** : les fourchettes ont été retirées de l'affichage public ; elles restent la base de calcul interne pour les devis envoyés après audit/diagnostic.
7. **Nom de domaine et hébergement** : prêt pour n'importe quel hébergeur statique, à pointer sur sundatalab.io.

## Note sur le contenu (inchangée depuis la v1)

Un arbitrage a été fait entre plusieurs documents du projet portant la même date : **« offre-recommandee-sundatalab-isalis-2026 »** (version définitive) sert de référence pour les produits et tarifs. Voir la note complète dans le projet Claude (`claude/site-web-sundatalab-io-livraison-2026.md`).
