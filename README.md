# YouTube Music Widget

**Une application desktop pour écouter de la musique depuis YouTube, construite avec React, Vite et Electron.**

**Pourquoi réinventer la roue ?**
Parce qu'on peut la rendre **plus ronde, plus rapide, et plus adaptée à nos besoins**.

---

## 📌 Description

Cette application permet de :

- Lire des musiques directement depuis YouTube avec des contrôles avancés
- Fonctionner en local, sans besoin d'un navigateur
- Profiter d'une interface moderne et intuitive

**Technologies utilisées** :

- Frontend : React 19, Vite 7, TailwindCSS 4
- Desktop : Electron 39
- Lecture : YouTube iframe embed
- Sécurité : Context isolation activé, preload script sécurisé

---

## 🎯 Pourquoi utiliser Music Widget ?

| **Avantage**             | **Description**                                                                 |
| ------------------------ | ------------------------------------------------------------------------------- |
| **Sans distraction**     | Pas de publicités, pas de suggestions intrusives, pas de commentaires toxiques. |
| **Personnalisable**      | Contrôles de lecture intégrés, gestion du volume, barre de progression.         |
| **Local et privé**       | Tes données restent sur ton appareil, avec sécurité renforcée.                  |
| **Open-source**          | Le code est ouvert aux contributions.                                           |
| **Multi-tâche optimisé** | Lecture en arrière-plan, interface desktop native.                              |

---

## 🚀 Fonctionnalités Actuelles

- **Lecture de vidéos YouTube** : Intégration via iframe embed natif
- **Interface fluide** : UI moderne avec TailwindCSS, animations et transitions
- **Gestion des erreurs** : Messages clairs et feedback visuel
- **Sécurité renforcée** : Context isolation, preload script, web security activée
- **Support multi-formats** : Accepte les URLs YouTube et les IDs de vidéos

---

## 🔜 Prochaines Étapes

| **Fonctionnalité**           | **Description**                                                                                      |
| ---------------------------- | ---------------------------------------------------------------------------------------------------- |
| **Playlists intelligentes**  | Création de playlists basées sur tes habitudes, moods, ou projets.                                   |
| **Mode "Focus"**             | Désactive les notifications et lance une playlist "concentration".                                   |
| **Intégration multi-outils** | Synchronisation avec Trello, Notion, ou ton IDE.                                                      |
| **Analyse de mood**          | Propose des vidéos/musiques en fonction de ton activité.                                              |
| **Thèmes personnalisables**  | Choisis parmi plusieurs thèmes ou crée le tien.                                                       |

---

## � Prérequis

- Node.js (v18 ou supérieur)
- npm ou yarn
- Git

---

## 🚀 Installation

### Pour les Utilisateurs

1. **Télécharger la dernière version** :
   ```bash
   git clone https://github.com/HexaNexus28/music-widget.git
   cd music-widget
   ```

2. **Installer les dépendances** :
   ```bash
   npm install
   ```

3. **Lancer l'application** :
   ```bash
   npm start
   ```

### Pour les Développeurs

1. **Cloner et installer** :
   ```bash
   git clone https://github.com/HexaNexus28/music-widget.git
   cd music-widget
   npm install
   ```

2. **Mode développement** :
   ```bash
   npm run dev
   ```
   - Lance Vite serveur (port automatique)
   - Lance Electron avec outils de développement

3. **Build pour production** :
   ```bash
   npm run build
   ```
   - Crée le dossier `dist/`
   - Génère l'exécutable avec electron-builder

---

## 📁 Structure du Projet

```
my-widget-app/
├── src/
│   ├── components/
│   │   └── YoutubePlayer.jsx    # Composant principal du lecteur
│   ├── assets/                   # Icônes et ressources
│   ├── App.jsx                   # Composant racine
│   └── main.jsx                  # Point d'entrée React
├── main.js                       # Processus principal Electron
├── preload.js                    # Script sécurisé preload
├── vite.config.js                # Configuration Vite
├── package.json                  # Dépendances et scripts
└── README.md                     # Ce fichier
```

---

## 🔧 Configuration

### Variables d'Environnement

Créez un fichier `.env` à la racine :

```env
NODE_ENV=development
```

### Configuration Electron

- **Sécurité** : `contextIsolation: true`, `nodeIntegration: false`
- **Preload script** : `preload.js` pour les communications sécurisées
- **Permissions** : Autoplay, fullscreen, accelerometer, gyroscope

---

## � Dépannage

### Problèmes Communs

**L'application ne se lance pas** :
```bash
# Vérifier les dépendances
npm install

# Nettoyer et réinstaller
rm -rf node_modules package-lock.json
npm install
```

**Port déjà utilisé** :
- L'application utilise automatiquement le premier port disponible (5173+)
- Pas besoin de configuration manuelle

**La vidéo ne se lit pas** :
- Vérifiez la connexion internet
- Assurez-vous que l'URL YouTube est valide
- Certains pays ont des restrictions sur certaines vidéos

### Logs et Debug

En mode développement, les outils de développement Electron s'ouvrent automatiquement.

---

## 🤝 Contribuer

1. **Fork** le projet
2. **Créer une branche** : `git checkout -b feature/nouvelle-fonctionnalite`
3. **Commiter** : `git commit -am 'Ajout nouvelle fonctionnalité'`
4. **Pusher** : `git push origin feature/nouvelle-fonctionnalite`
5. **Pull Request** : Soumettre une PR

### Guidelines de Contribution

- Code style : ESLint configuré
- Components : Utiliser les hooks React
- Sécurité : Maintenir contextIsolation activé
- Tests : Ajouter des tests pour nouvelles fonctionnalités

---

## 📄 Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour les détails.

---

## 🔗 Liens Utiles

- **Voir le code ou contribuer** : [GitHub Repository](https://github.com/HexaNexus28/music-widget)
- **Signaler un bug** : [Issues GitHub](https://github.com/HexaNexus28/music-widget/issues)
- **Découvrir d'autres projets** : [Portfolio](https://hexanexus.github.io)

---

## 📊 Performance

- **Démarrage** : < 3 secondes
- **Mémoire** : ~100MB en fonctionnement
- **CPU** : Minimal en lecture
- **Support** : Windows 10+, macOS 10.14+, Linux

---

## 🎨 Personnalisation

### Thèmes

Le thème par défaut utilise la palette purple/indigo. Pour personnaliser :

1. Modifier les classes Tailwind dans `src/components/YoutubePlayer.jsx`
2. Ajouter des variables CSS personnalisées
3. Rebuild avec `npm run build`

### Raccourcis Clavier

Prochainement disponible :
- `Space` : Play/Pause
- `↑/↓` : Volume
- `←/→` : Navigation

---

**Merci d'utiliser Music Widget ! 🎵**

Pour toute question ou suggestion, n'hésitez pas à ouvrir une issue sur GitHub.
