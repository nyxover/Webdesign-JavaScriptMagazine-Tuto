//L'objet String

//exp propriétés :
var maChaine = "bonjour tout le monde";
var tailleChaine = maChaine.length; //nombre de charactere dans la chaine

//exp méthodes :
var maChaine = "bonjour tout le monde";
var sousChaine = "monde";
var position = maChaine.indexOf(sousChaine);//position de l'occurrence sousChaine dans la chaine maChaine.
//***************

//L'objet Math
//Quelques exemples :
var x = Math.round(2.3); //arrondi : 2
var x = Math.pow(5.2); //puissance : 5 * 5 = 25
var x = Math.sqrt(25); //racine carré : 5
var x = Math.max(25,5);//plus grand des deux nombres : 25
//****************

//L'objet Date
//Exemples:
var maDate      = new Date();//nouvel objet date à la date/heure du jour
var moisDate    = maDate.getDate();// valeur du jour dans le mois
var heureDate   = maDate.getHours();// valeur de l'heure

maDate.setDate(20); //fixe la valeur du jour dans le mois.
//****************

//L'objet Array
// Exemples

var fruits=["banane","orange","raisin"]; //création du tableau fruit sans instancication
var fruits=new Array("banane","orange","raisin"); //création du tableau fruit avec instanciation
//exp méthodes:
fruits.push("melon"); //ajoute un élément dans le tableau