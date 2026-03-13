# AppFlechettes
Jeu de Flechettes en REACT

-> Page d'acceuil(Home.jsx) 
  - Image de fond
  - Bouton
-> Configuration de partie (Config.jsx) (----Jérôme----)
  - Nombre de joueurs (2,3 ou 4) (Le pseudo ne peut pas être vide / Le bouton "Lancer la partie" ne s'affiche pas tant que cette condition n'est pas rempli)
  - Pseudo de chaque joueur (Par défaut "Joueur 1", "Joueur 2")
  - Type de partie (301, 501, 701 ou saisie personnalisée / Par défaut "501")
  - Type de sortie (Simple ou Double, par défaut : Double)
-> Interface de jeu (GamePage.jsx) (----Nicolas----)
  - Tableau avec partie en cours
  - 3 boutons qui permet de lancer chaque flechette (Aleatoire de 1 à 20 ou 25 ou 50/ Simple,double(D),triple(T),miss)
  - Chaque bouton se met en grisée(disabled) un à un pour indiquer que le nombre de fléchettes joué
  - Une fois que les 3 fléchettes sont jouées, un bouton apparaît et propose de passer au joueur suivant
  - Regles de validation :
          - Bust(Dépassement) : Si le score depasse le score demandé (0), le tour est annulé (Alert:"Loooooooooser !")
          - Sortie en double : Si cet option est activé, la derniere flechette qui amene le score à 0 doit OBLIGATOIREMENT être un Double(D) ou Bull's Eye/Double 25
          - Sortie en simple : N'importe quelle flechette peut terminer la partie
          - Si le joueur atteint 0, la partie est terminé pour lui
  - A partir de '<= 170', l'application affiche les combinaisons pour finir en 1,2 ou 3 fléchettes (Via l'affichage Suggestions)
-> Ecran de fin de partie (EndGame.jsx) (-----Simon----)
  - Affichage du vainqueur
  - Résumé de la partie
  - Bouton pour rejouer une partie (Retour à l'acceuil)
  
