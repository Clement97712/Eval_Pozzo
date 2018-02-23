// Reponse pour le sql


//Requête n 01
//Afficher le nombre de Vidéos contenu dans la Table video, Utilise pour l'affichage un allias : NbreVideo :

		---- COUNT ----
SELECT COUNT(`VideoNum`) as NbreVideo FROM video;


//Requete Num 02
//Afficher les Titre des vidéos ainsi que le libelle du thème pour les vidéos ayant pour numéro de thème le 3, ordonnées les Titre des videos 
//alphabétiquement

		---- WHERE ----

SELECT `VideoTitre`,`ThemeLib` FROM video,theme, thematic 
WHERE `VideoNum`= `ThematicVideoNum` 
AND `ThematicThemeNum` =`ThemeNum`
AND `ThemeNum`=3
ORDER BY `VideoTitre` asc; 

		---- INNER JOIN ON----
	
SELECT `VideoTitre`,`ThemeLib` FROM video 
INNER JOIN thematic ON `VideoNum` = `ThematicVideoNum` 
INNER JOIN theme ON `ThemeNum`=`ThematicThemeNum`
WHERE `ThemeNum`=3
ORDER BY `VideoTitre` asc; 

