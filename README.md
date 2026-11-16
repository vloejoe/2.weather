# 2.weather — la météo de ma position avec une API

Une page qui affiche la ville, le pays, l'icône météo et la température de la ville la plus proche, avec un écran de chargement et un message d'erreur.

## Pourquoi ce projet
Deuxième exercice de la série numérotée (septembre 2023) : mon premier appel à une API avec une clé.

## Ce que j'ai appris
- Appeler une API avec `fetch` dans un `useEffect` et ranger la réponse dans l'état (`src/App.jsx`).
- Gérer trois états de l'écran : chargement, données, erreur.
- Ne pas écrire la clé d'API dans le code : elle vient d'une variable d'environnement (`import.meta.env`).

## Stack
React 18, Vite 4. Données : API [IQAir / AirVisual](https://www.iqair.com/air-pollution-data-api) (clé personnelle nécessaire).

## Lancer en local
1. Copier `.env.example` en `.env` et y mettre ta clé : `VITE_WHEATHER_API_KEY=...`
2. Puis :
```bash
npm install
npm run dev      # serveur de développement (Vite)
npm run build    # version de production dans dist/
```

## Démo
Pas de démo en ligne.

## Crédits et transparence
Projet d'apprentissage personnel.
Code d'origine : 2023, exercice personnel. Novembre 2026 : README, charte de code et mise à jour des dépendances réalisés avec Claude Code (voir l'historique Git).

## État du projet
Entretien minimal (voir `AGENTS.md`). Limites connues :
- L'appel utilise `http://` : un navigateur bloquera la requête si le site est servi en `https://`.
- Le nom de la variable contient une faute (`WHEATHER`) : je la garde pour ne pas casser les `.env` existants.
- Il n'y a pas de script `lint`.
