<?php
/*
    Author:
    Description:Programme 
    Date:22/02/2017
*/

/*
Exo 1

    Créer une boucle pour afficher les nombres de 0 à 100
*/

for($i=0;$i<=100;$i++){
    echo($i."\n");
}

//Exo 2

$dev ="front";
$technos = ["Php", "Ruby", "Javascript", "Html"];

if($dev=="front"){
    echo "Je suis un dev front et je connais le Javascript et l'Html.\n</br>";
}else{
    echo "Je suis un dev back et je connais le Php, le Ruby et le Javascript.\n</br>";
}

/*Exo 3 */

foreach($technos as $key=>$value){
    echo $key."</br>";
}
$technos[]="Python";

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" type="text/css" href="style.css"/>
    <title>Exo PHP</title>
</head>
<body>
    <fieldset class="container">
        <legend>Formulaire</legend>
        <form method="POST" action="form.php">
            <div class="inputGroup">
                <input type="text" placeholder="Name" name="nom"/>
                <input type="password" placeholder="Password" name="mdp"/>
            </div>
            <div class="boutonGroup">
                <input type="submit" value="Send"/>
                <input type="reset" value="Reset"/>
            </div>
        </form>
    </fieldset>
</body>
</html>

