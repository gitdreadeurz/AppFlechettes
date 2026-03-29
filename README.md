# 🎯 Fléchettes — Application de score

Application web de comptage de points pour parties de fléchettes, développée en **React** avec **Vite**.

---

## 📋 Fonctionnalités

- **Configuration de partie** : choix du nombre de joueurs (2 à 4), de leurs noms, du type de partie (301 / 501 / 701) et du mode de sortie (Simple ou Double)
- **Gestion du score en temps réel** : décompte automatique à partir du score de départ pour chaque joueur
- **Saisie des fléchettes** : sélection de la cible (1–20, 25, 50) et du coefficient (Simple / Double / Triple)
- **Suggestions de checkout** : affichage automatique de la combinaison idéale pour terminer la partie selon le score restant et le mode choisi
- **Validation par tour** : chaque tour est composé de 3 fléchettes, validées une à une puis confirmées en fin de tour
- **Annulation** : possibilité d'annuler la dernière fléchette saisie
- **Détection de victoire** : fin de partie automatique lorsque le score atteint 0 (avec vérification du double si mode Double activé)
- **Écran de fin de partie** : classement, statistiques détaillées (total, moyenne par tour, meilleur tour) et historique complet pour chaque joueur
- **Rejouer / Nouvelle partie** : relance rapide avec la même configuration ou retour au menu

---

## 🗂️ Structure du projet

```
src/
├── App.jsx               # Composant racine — gestion de la navigation entre les écrans
├── Config.jsx            # Écran de configuration de la partie
├── GamePage.jsx          # Écran de jeu principal
├── EndGame.jsx           # Écran de fin de partie avec statistiques
├── bouton.jsx            # Composant bouton de sélection de cible (ButtonCible)
├── GamePage.css          # Styles de l'écran de jeu
├── CheckoutDouble.json   # Table des suggestions de checkout en sortie double
└── CheckoutSimple.json   # Table des suggestions de checkout en sortie simple
```

---

## ⚙️ Composants

### `Config`
Formulaire de démarrage de partie. Permet de choisir :
- Le nombre de joueurs (2, 3 ou 4)
- Le nom de chaque joueur
- Le type de partie : **301**, **501** ou **701**
- Le mode de sortie : **Simple** ou **Double**

Le bouton de lancement n'apparaît que lorsque tous les champs requis sont remplis.

### `GamePage`
Cœur de l'application. Gère :
- L'affichage des scores restants par joueur
- La sélection de la cible et du coefficient (Simple / Double / Triple)
- La validation fléchette par fléchette et tour par tour
- Le suivi du joueur actif
- Les suggestions de checkout (via les JSON `CheckoutDouble` et `CheckoutSimple`)
- La détection automatique de dépassement de score ou de victoire

### `EndGame`
Écran de résultats affiché à la fin de la partie. Présente :
- Le nom du vainqueur
- Un tableau de classement avec statistiques (tours joués, total de points, moyenne, meilleur tour)
- L'historique détaillé des tours par joueur (accordéon cliquable)
- Des boutons pour rejouer ou lancer une nouvelle partie

### `ButtonCible`
Bouton réutilisable représentant une case de la cible (valeur 1–20, 25 ou 50). Il est mis en surbrillance lorsqu'il est sélectionné.

---

## 📊 Données de checkout

Les fichiers `CheckoutDouble.json` et `CheckoutSimple.json` contiennent les combinaisons de fléchettes conseillées pour terminer la partie depuis n'importe quel score (de 2 à 170). Les suggestions sont affichées automatiquement lorsque le score restant du joueur actif est couvert par ces tables.

---

## 🚀 Installation et démarrage

### Prérequis
- [Node.js](https://nodejs.org/) v18 ou supérieur
- npm

### Installation

```bash
npm install
```

### Lancement en développement

```bash
npm run dev
```

L'application est accessible par défaut sur `http://localhost:5173`, ainsi que sur le réseau local (option `--host` activée).

### Build de production

```bash
npm run build
```

### Prévisualisation du build

```bash
npm run preview
```

---

## 🛠️ Stack technique

| Technologie | Version |
|---|---|
| React | ^19 |
| Vite | ^8 |
| ESLint | ^9 |

---

## 🎮 Comment jouer

1. **Configurer la partie** : choisissez le nombre de joueurs, leurs noms, le score de départ et le mode de sortie, puis cliquez sur *Lancez la partie !*
2. **Saisir une fléchette** : sélectionnez la case touchée (1–20, 25 ou Bull), ajustez le coefficient si nécessaire (Double ou Triple), puis cliquez sur *Valider la fléchette*
3. **Terminer le tour** : après 3 fléchettes, cliquez sur *Valider le tour* pour passer au joueur suivant
4. **Consulter le checkout** : si votre score restant dispose d'une combinaison connue, elle s'affiche automatiquement à l'écran
5. **Gagner** : le premier joueur à atteindre exactement 0 remporte la partie (en double si ce mode est activé)
