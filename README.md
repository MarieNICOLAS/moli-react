# Frontend Project

## 📋 Table des matières

- [Description](#description)
- [Technologies utilisées](#technologies-utilisées)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Configuration](#configuration)
- [Scripts disponibles](#scripts-disponibles)
- [Structure du projet](#structure-du-projet)
- [Développement](#développement)
- [Build et déploiement](#build-et-déploiement)
- [Contribution](#contribution)

## Description

Application frontend moderne développée avec React et TypeScript, utilisant Vite comme bundler pour des performances optimales en développement.

## Technologies utilisées

- **React** 18+ - Bibliothèque JavaScript pour construire des interfaces utilisateur
- **TypeScript** - Superset typé de JavaScript
- **Vite** - Outil de build rapide et serveur de développement
- **Tailwind CSS** - Framework CSS utility-first
- **React Router DOM** - Routage côté client pour React

## Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0 (recommandé : 11.6.0)

Vérifiez vos versions :
```bash
node --version
npm --version
```

## Installation

### 1. Cloner le repository
```bash
git clone <url-du-repository>
cd <nom-du-projet>
```

### 2. Mettre à jour npm (optionnel mais recommandé)
```bash
npm install -g npm@11.6.0
```

### 3. Installer les dépendances
```bash
npm install
```

## Configuration

### Tailwind CSS

Le projet utilise Tailwind CSS v4 avec le plugin Vite officiel.

**Configuration Vite** (`vite.config.ts`) :
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
```

**Styles principaux** (`src/index.css`) :
```css
@import "tailwindcss";
```

### React Router

Le routage est configuré avec React Router DOM pour la navigation côté client.

## Scripts disponibles

Dans le répertoire du projet, vous pouvez exécuter :

### `npm run dev`
Lance l'application en mode développement.\
Ouvre [http://localhost:5173](http://localhost:5173) dans votre navigateur.

La page se recharge automatiquement si vous modifiez le code.\
Les erreurs de lint apparaissent dans la console.

### `npm run build`
Construit l'application pour la production dans le dossier `dist`.\
Optimise React pour de meilleures performances en production.

### `npm run preview`
Prévisualise localement la version de production construite.

### `npm run lint`
Exécute ESLint pour analyser le code et détecter les problèmes.

## Structure du projet

```
frontend/
├── public/                 # Fichiers statiques
├── src/
│   ├── components/         # Composants réutilisables
│   ├── pages/             # Composants de pages
│   ├── hooks/             # Hooks personnalisés
│   ├── utils/             # Fonctions utilitaires
│   ├── types/             # Définitions TypeScript
│   ├── styles/            # Fichiers CSS supplémentaires
│   ├── App.tsx            # Composant principal
│   ├── main.tsx           # Point d'entrée
│   └── index.css          # Styles globaux
├── package.json           # Dépendances et scripts
├── vite.config.ts         # Configuration Vite
├── tsconfig.json          # Configuration TypeScript
└── README.md              # Documentation du projet
```

## Développement

### Démarrage rapide
```bash
npm run dev
```

### Bonnes pratiques

- **TypeScript** : Utilisez des types stricts et évitez `any`
- **Composants** : Privilégiez les composants fonctionnels avec les hooks
- **Styles** : Utilisez les classes Tailwind CSS utilitaires
- **Routage** : Organisez les routes dans un fichier dédié
- **Performance** : Utilisez `React.memo()` et `useMemo()` quand nécessaire

### Structure recommandée pour les composants
```typescript
// components/MonComposant.tsx
import React from 'react';

interface MonComposantProps {
  // Props typées
}

export const MonComposant: React.FC<MonComposantProps> = ({ ...props }) => {
  return (
    <div className="tailwind-classes">
      {/* Contenu */}
    </div>
  );
};
```

## Build et déploiement

### Build de production
```bash
npm run build
```

### Prévisualisation locale
```bash
npm run preview
```

Les fichiers de production sont générés dans le dossier `dist/` et sont prêts à être déployés sur n'importe quel serveur web statique.

### Déploiement

Le projet peut être déployé sur :
- **Vercel** : `vercel --prod`
- **Netlify** : Drag & drop du dossier `dist`
- **GitHub Pages** : Via GitHub Actions
- **Autres** : Tout service supportant les sites statiques

## Contribution

1. Forkez le projet
2. Créez votre branche feature (`git checkout -b feature/AmazingFeature`)
3. Commitez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Poussez vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

---

**Développé avec ❤️ en utilisant React + TypeScript + Vite**