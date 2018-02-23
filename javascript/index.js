/*
    Author:MJ L'homme de l'ombre
    Description file:
    Date:22/02/2017
*/

//Contraintes : Vous devez afficher les résultats des réponses dans l'index.html...

// Créer le tableau ci-dessous: let arr = [["Javascript", "Ruby"], ["Php", "Html"], ["CSS", "Python"]]
//Vous devez le transformer pour retourner ceci : ["CSS", "Html", "Javascript", "Php", "Python", "Ruby"]

let arr =[["Javascript", "Ruby"], ["Php", "Html"], ["CSS", "Python"]];
var table=[];
for(var i=0;i<arr.length;i++){
    for(var j=0;j<arr[i].length;j++){
        table.push(arr[i][j]);
    }
}
console.log(table);
console.log(typeof(table));





//Créer l'objet ci-dessous: let obj = { "guadeloupe": 971, "martinique": 972, "guyane": 973, "reunion": 974}
//Vous devez le transformer pour retourner ceci : [971, 972, 973, 974]

let obj = { "guadeloupe": 971, "martinique": 972, "guyane": 973, "reunion": 974};
console.log(Object.values(obj));
console.log(typeof(Object.values(obj)));




//Créer un tableau ayant pour éléments le nom de pays et utilisez une méthode
//qui vous permet d'ajouter un autre pays dans le tableau

var isPays=["France","Espagne","Canada","Bahamas"];
isPays.push("Bresil");





//Créer un tableau ayant pour éléments le nom de pays et supprimez le premier élément du tableau

var isCountry=["France","Espagne","Canada","Bahamas"];
console.log(isCountry);
isCountry.shift();
console.log(isCountry);




//Créer l'objet ci-dessous: let obj = { "yo": 1, "foo": 9, "bar": 4}
//Vous devez le transformer pour retourner ceci : let obj = { "yo": 9, "foo": 1, "bar": 4}

//OBLIGER DE MODIFIER LE NOM DE L'OBJET !!!!!

let objs = { "yo": 1, "foo": 9, "bar": 4};
objs.yo=9;
objs.foo=1;
console.log(objs);
