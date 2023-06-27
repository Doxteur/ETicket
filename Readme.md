# ETicket

## Description
Eticket est une application de support de ticketing pour les entreprises. Elle permet de gérer les tickets de support des clients et de les assigner aux techniciens.
L'application est développée en REACT pour le FRONT et NODE.JS pour le back, et pour la base de données j'utilise POSTGRESQL.


## Prérequis
- [Node.js](https://nodejs.org/en/) v16.19.1
- [Docker](https://www.docker.com/)
- [Yarn](https://yarnpkg.com/)

## Installation
L'application est composée de 2 parties : le front et le back. 
Pour installer l'application, il faut suivre les étapes suivantes :

### Back
La partie Back se trouve dans le dossier server.

1. Se rendre dans le dossier server
```bash
cd server
```
2. Installer les dépendances
```bash
yarn
```
3. Dupliquer le fichier .env.example et le renommer en .env

Si vous avez docker d'installé sur votre machine, vous pouvez lancer la base de données avec la commande suivante :
```bash
docker compose up -d
```

4. Lancer la migration de la base de données
```bash
yarn migrate
```

5. Seeder la base
```bash
yarn seed
```

6. Lancer le serveur
```bash
yarn dev
```

### Front
La partie Front se trouve dans le dossier client.

1. Se rendre dans le dossier client
```bash
cd client
```

2. Installer les dépendances
```bash
yarn
```

3. Lancer le serveur
```bash
yarn dev
```

Dans le cas ou l'application ne se lance pas, il faut lancer le serveur electron et le serveur react séparément.
Lancer ces commandes:
```bash
yarn electron:dev
```
et 
```bash
yarn react:dev
```

## Utilisation
Pour vous connecter à l'application, vous pouvez utiliser les identifiants suivants :
Role Utilisateur :
- email: jimmy@gmail.com
- password: password1

Role Chef de projet/Admin :
- email: chef@gmail.com
- password: password2

## Build
Le build de l'application se trouve dans le dossier dist.
Veuillez bien faire attention à lancer le serveur node.js.






