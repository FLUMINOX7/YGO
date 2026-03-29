# YGO - Fan Site Yu-Gi-Oh!

Site web statique (HTML, CSS, JavaScript) dedie a plusieurs series Yu-Gi-Oh!:
ZEXAL, ARC-V, VRAINS et SEVENS.

## Apercu

- Page d'accueil: `index.html`
- 4 pages thematiques: `html/yuma.html`, `html/yuya.html`, `html/yusaku.html`, `html/yuga.html`
- Interactions JavaScript (hover, changements d'images, sections cachees)
- Integration de videos YouTube via iframes

## Stack technique

- HTML5
- CSS3
- JavaScript (vanilla)

## Structure du projet

```
.
├── index.html
├── css/
├── html/
├── images/
└── js/
```

## Lancer en local

Depuis la racine du projet:

```bash
python3 -m http.server 8000
```

Puis ouvrir:

`http://localhost:8000`

## Deploiement GitHub Pages

### URL generee (cas de plusieurs depots)

Pour un depot de projet classique, l'URL est:

`https://<username>.github.io/<nom-du-repo>/`

Exemple:

`https://FLUMINOX7.github.io/YGO/`

### Etapes

1. Push le code sur la branche `main`.
2. Ouvrir le depot sur GitHub.
3. Aller dans `Settings` > `Pages`.
4. Dans `Build and deployment`:
	- `Source`: `Deploy from a branch`
	- `Branch`: `main`
	- `Folder`: `/ (root)`
5. Enregistrer puis attendre la publication (1 a 5 minutes en general).

## Notes

- GitHub Pages heberge uniquement des sites statiques.
- L'entree du site doit etre `index.html` dans le dossier publie.
- Les chemins du projet sont configures pour fonctionner avec la structure actuelle a la racine du depot.
