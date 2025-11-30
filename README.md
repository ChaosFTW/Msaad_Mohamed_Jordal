# Jordal – Mini Réseau Social (Frontend Only)

![Jordal Preview](https://github.com/ChaosFTW/Msaad_Mohamed_Jordal)  
*Un petit réseau social 100 % frontend, esthétique et interactif – inspiré des grands mais en mode "fait maison"*

**Jordal** est un mini réseau social entièrement développé en HTML, CSS et JavaScript vanilla (sans framework). Il simule une expérience complète : création de posts, likes, commentaires, partage, recherche en temps réel, notifications toast et animations fluides.

Live Demo → [https://ton-pseudo.github.io/jordal](https://ton-pseudo.github.io/jordal) *(remplace par ton vrai lien GitHub Pages)*

---

### Technologies utilisées

- **HTML5** – Structure sémantique
- **CSS3** – Design moderne dark mode + variables CSS + animations personnalisées
- **JavaScript (ES6+)** – Manipulation du DOM, événements, gestion d’état manuelle
- **Font Awesome 6** – Icônes
- Aucune dépendance externe (pas de React, Vue, etc.)

---

### Fonctionnalités principales

| Fonctionnalité                  | Description                                                                 |
|---------------------------------|-----------------------------------------------------------------------------|
| Création de posts               | Zone de texte extensible + bouton "Send"                                      |
| Fil d’actualité dynamique       | Affichage des posts à partir d’un tableau JSON local                         |
| Likes                           | Incrémentation/décrémentation + état persistant visuel + animation           |
| Commentaires                    | Affichage/masquage + ajout de nouveaux commentaires en temps réel            |
| Partage                         | Copie du texte dans le presse-papier + compteur de partages                  |
| Recherche globale               | Filtre instantané sur noms, contenus et commentaires (highlight des résultats) |
| Notifications toast             | Messages temporaires stylisés (like, commentaire, partage, post publié)      |
| Design responsive               | Adaptation mobile/tablette/desktop (flex + sticky sidebars)                 |
| Animations CSS                  | FadeIn des posts, slideIn des commentaires, effets hover, transitions fluides |
| Thème sombre élégant            | Palette Forest-Green / Dark inspirée des réseaux sociaux modernes            |

---

### Nouveautés explorées / Ce que j’ai appris

- Gestion manuelle d’un état global avec un tableau JavaScript (simulation d’un store)
- Recherche full-text avec highlight des correspondances via `RegExp`
- Auto-ajustement de la hauteur d’un `<textarea>` selon le contenu
- Création et suppression dynamique de notifications avec `setTimeout`
- Utilisation avancée de `navigator.clipboard.writeText()`
- Animations CSS complexes (`@keyframes`, `transform`, `backdrop-filter`)
- Architecture propre du DOM sans framework (tout est créé avec `createElement` et templates literals)

---

### Difficultés rencontrées

| Problème                                   | Description                                                                 |
|--------------------------------------------|-----------------------------------------------------------------------------|
| Persistance de l’état like/partage         | Les modifications disparaissaient au re-render                              |
| Highlight de la recherche dans les commentaires | Besoin de surligner uniquement les parties correspondantes sans casser le HTML |
| Hauteur dynamique du textarea              | `textarea` qui ne grandissait pas proprement                               |
| Affichage des nouvelles publications       | Les nouveaux posts n’apparaissaient pas en haut immédiatement              |
| Gestion des images cassées                 | Certains liens externes d’avatar ne chargeaient plus                        |

---

### Solutions apportées

| Difficulté                              | Solution mise en place                                                                 |
|-----------------------------------------|-----------------------------------------------------------------------------------------|
| État like/partage perdu                 | Ajout de propriétés `liked` et `shared` directement dans chaque objet post             |
| Highlight recherche                     | Fonction `highlightText()` avec expression régulière + `<span class="highlight">`       |
| Textarea extensible                     | Écoute de l’événement `input` → `element.style.height = element.scrollHeight + "px"`    |
| Nouveaux posts en haut                  | `allPosts.unshift(newPost)` + `renderPosts()` + `window.scrollTo({top:0, smooth})`      |
| Images cassées                          | Remplacement progressif par des images locales fiables + fallback si besoin            |

---

### Installation locale (si besoin)

```bash
git clone https://github.com/ChaosFTW/Msaad_Mohamed_Jordal
cd jordal
# Ouvre simplement index.html dans ton navigateur
# ou utilise un serveur local :
npx serve
# ou
python -m http.server 8000
