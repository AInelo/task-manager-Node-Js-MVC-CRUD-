#!/bin/bash

# Ajoutez tous les fichiers à l'index de git
git add .

# Faites un commit avec le message spécifié
git commit -m "Demo d'un CRUD avec Node Js, MVC framework"

# Poussez les modifications vers le référentiel distant (origin) et configurez le suivi sur la branche principale (main)
git push --set-upstream origin main
