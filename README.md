# Calculette en javascript

Les fichiers :

* calculatrice.html
* calculatrice.css
* calculatrice.js

## Observer les résultats
* Lancer la calculatrice.html depuis votre navigateur
* Faites les calculs que vous voulez

## Options 

Nous pouvons : 

* Additionner, soustraire, multiplier, diviser
* Récupérer la dernière valeur calculé (avec ans)
* Effacer les données (avec c), efface également l'historique
* Les erreurs s'affichent dans la "boite d'erreur"
* L'historique des calculs s'affichent en bas, avec le dernier résultat qui s'affiche le premier

## La méthode 

On a 8 méthodes :

* Ajout des chiffres
* Effacer les valeurs et l'historique
* Addition
* Soustraction
* Multiplication
* Division
* Recuperer la derniere valeur
* Calcul du resultat

### Ajout des chiffres :

On ajoute à l'input #answer la nouvelle valeur

### Effacer les valeurs et l'historique :

On nettoye tous les contenus : #answer, #operation, #historique, #last_value et le tableau historique contenant l'historique des calculs

### Addition, Soustraction, Multiplication, Division :

On vérifie 2 conditions :
* Si la case answer est vide

On renvoi un bug (en effet il faut une valeur affiché, on ne peut pas calculer quelque chose de nul)

* Si la case comprend une valeur 

On ajoute a la valeur #operation (qui est un élément caché du code, mais existant) la valeur de #answer et la valeur de l'opérateur désigné (+, -, * ou /). On vide ensuite la valeur #answer.

### Recuperer la derniere valeur :

On vérifie 2 conditions :
* Si la valeur #last_value est vide

On renvoi un bug

* Si la valeur #last_value est non vide 

On change la valeur #answer par celle de #last_value

### Calcul du résultat :

On enregistre 3 variables :
* a => Valeur actuel de #answer
* b => valeur enregistré dans #operation (qui est valeur précédente et un opérateur)
* c => Concatene nos 2 valeurs a et b pour obtenir un string de la forme x + y (opérateur changeant)

On calcul notre résultat à l'aide de la fonction eval() :
* Exemple : eval('5+6') => 11

On ajoute notre calcul à l'historique et on fait une boucle pour écrire les calculs