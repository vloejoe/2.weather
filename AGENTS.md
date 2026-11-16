# AGENTS.md — charte de code de `2.weather`

Ce fichier est lu par l'IA (et par moi) avant toute modification. Il décrit la façon dont ce dépôt est écrit.

## Statut
Exercice d'apprentissage, **entretien minimal** : on garde le projet en ligne et à jour, on ne le transforme pas.

## Structure
- `src/App.jsx` : appel de l'API et affichage.
- `src/assets/` : icônes.
Un fichier, un rôle.

## Écriture du code
- Nouveau code : noms de variables, de fonctions, de classes et de composants en anglais.
- Commentaires en français, qui expliquent le *pourquoi* plutôt que le *quoi*.
- Ne pas réécrire le projet : on corrige ou on étend, on ne remplace pas ce qui existe.

## Git
- Une idée = une branche = une pull request. Jamais de commit direct sur `main`.
- Commits courts, une notion par commit, préfixés d'un gitmoji.
- Tout commit écrit avec l'IA porte la mention `Co-Authored-By`.

## Qualité
- `npm run build` doit passer avant toute pull request.
- Il n'y a pas de script `lint` : à ajouter dans une issue dédiée.

## Dépendances
- Mises à jour compatibles (`npm update`) : autorisées, avec build vérifié.
- Changement de version majeure (React, Vite, Tailwind...) : seulement sur une issue dédiée.

## Secrets
- Aucun fichier `.env` versionné. Si une clé devient nécessaire : un `.env.example` sans valeur.

## Clé d'API
La clé est lue dans `VITE_WHEATHER_API_KEY` (fichier `.env`, ignoré par Git). Ne jamais l'écrire dans le code ni dans un commit.
