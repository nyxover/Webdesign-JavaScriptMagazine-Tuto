//ma premiere declaration
var maVariable = 4;
// mon premier test conditionnel
if (maVariable == 4) {
    console.log("ma variable et egale à 4 ");
}
//ma premiere fonction
function afficheMaVariable(_var) {
    alert(_var);
}
//appel de ma fonction
afficheMaVariable(maVariable);

var maVariable1 = "bonjour tout le monde"; //variable globle

function afficheMaVariable() {
    var maVariable1 = "bonsoir"; //variable locale
    var maVariable2 = "bonjour tout le monde";
    console.log(maVariable1); //ok la variable local est accessible
    console.log(this.maVariable1); //ok la variable globale est accessible
}
//console.log(maVariable2);// Pas ok, la variable est local

//Chaine de caractére
var maVariable = "bonjour";
//Entier ou nombre à virgule
var maVariable = 2;
var maVariable = 2.4;
//Booléen
var maVariable = true;
var maVariable = false;
//Pas de données
var maVariable = null;
//Un tableau de données
var monTableau = ["data1", "data2"];

//parseInt() : conversion d'une variable en un nombre
var a = "12";
var b = parseInt(a);
//parseFloat() : conversion d'une variable en un nombre decimale
var a = "12.2";
var b = parseFloat(a);

//Déclaration de tableau:
var monTableauMono = ["data1", "data2"];
var monTableauBi = [["data1", "data2"], ["data3", "data4"]];
//ou:
var monTableau = new Array("data1", "data2");
var monTableau = new Array(new Array("data1", "data2"), new Array("data3", "data4"));
// Exemple:
var t = new Array();
this.t.push("a");
console.log(this.t); // sortie ["a"]
// affectation ou modification d'une donnée dans un tableau:
monTableau[0] = "premiere variable de mon tableau";
//nombre de données dans un tableau:
var tailleTableau = monTableau.length;
//Accès à une donnée du tableau selon son indice:
console.log(monTableau[0]);
//___________________________________________________________________________________________________________________
//l'operateur modulo(reste de division)
console.log(5 % 2); // sortie 1
//l'égalité stricte
"12" == 12; // true
"12" === 12; //false (=== veux dire comparaison stricte sans aucune conversion de type effectuer)
//___________________________________________________________________________________________________________________
//Déclaration d'une fonction:
function maFonction(data1, data2) {
    //bloc d'instructuion
    //retour de la fonction
    return true;
}
//Faire appelle à une fonction qui retourne une valeur:
var maVariableBoolean = maFonction("donnée1", "donnée2");

function alert(argument) {
    alert(argument);
}
maFonction("bonjour"); //affiche bonjour dans une boite d'alerte
//alert() alert est une methode native de javaScript

function voiture(modele, constructeur, couleur) {
    this.modele = modele;
    this.constructeur = constructeur;
    this.couleur = couleur;
}
// création d'une instance de l'objet voiture.
var maVoiture = new voiture("rapid", "skoda", "blanc");
console.log(this.maVoiture.constructeur); //skoda
//Il est possible de créer un objet à l'aide d'une fonction et il est possible d'utiliser une fonction sur un événement(click,etc...)
//Directement dans la balise html:
<
input type = "button"
name = "test"
id = "test"
value = "test"
onclick = "ma_fonction();" / >
    //Dynamiquement:
    document.getElementById("test").onclick = ma_fonction;
//Par écoute de l'événement:
document.getElementById("test").addEventListener("click", ma_fonction, false);
// element.addEventListerner(type, listerner, useCapture);
//il est également possible de passer des parametre à une function lors d'un événement :
function maFonction(argument) {
    alert(argument);
} <
input type = "button"
name = "test"
id = "test"
value = "test"
onclick = "ma_fonction('bonjour');" / >

    // Dans de nombreus cas il est utile de passer en paramétre la reference de l'objet déclenchat
    //l'évenement (this):
    function maFonction(obj) {
        alert(obj.style.color);
    } <
    input type = "button"
name = "test"
id = "test"
value = "Click moi"
style = "color:red"
onclick = "ma_fonction(this);" / >
    //___________________________________________________________________________________________________________________
    //Les structure conditionnelles
    //test conditionnel avec bloc d'instruction si true ou false
    if (maVariable == 4) {
        alert("maVariable vaut 3");
    } else {
        alert("maVariable ne vaut pas 3");
    }

//For : permet à l'aide d'un compteur d'executer plusieurs fois la même instruction:
for (var i = 1; i < 6; i++) {
    alert(i);
}

//while : autre moyen de boucler sur une autre instruction:
while (i < 6) {
    alert(i);
    i++;
}
//___________________________________________________________________________________________________________________
//       Les objets       // Chaque objet comprend:
//(un constructeur: fonction permettant de créer et initialiser un objet)
//(Des propriétés: Variable contenues dans l'objet)
//(Des méthodes: Fonctions permettant de réaliser des opérations sur le contenu de l'objet)

//exemple propriétés de l'objet Navigator:
console.log(navigator.appName); //sortie "Microsoft"
//exemple de methode:
navigator.javaEnabled(); //permet de verifier si le navigateur peut éxécuter des applets Java

//exemple propriétés window:
console.log(window.name); //Nom de la fenetre en cours
//exemple methodes:
window.open('url', 'nomFenetre', 'optionFenetres'); //ouvre une nouvelle fenetre (popup).

//exemple propriétés History:
console.log(window.history.length); //nombre d'objets dans l'historique
//exemple methodes:
window.history.back(); //retourne sur la page precedente
