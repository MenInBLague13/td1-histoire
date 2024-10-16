const prompt = require(('prompt-sync'))(

)
// // td1//
// let chien = 1
// let chat =2
// let resultat = chien + chat

// // ///////////////////////////////////////////////////
// // td2 //

// let texte ="Thomas 4x2 ? " 
// let texte2 ="16 tg"
// let resu = texte + texte2
// console.log(resu)
// // ///////////////////////////////////////////////////
// // td3 //
// let A = 4
// let B = 2
// let egalité = A * B

// console.log( egalité );

// // ///////////////////////////////////////////////////
// // td4 //
// let nubr = 12
// nubr = "thomas"
// console.log(nubr);
// // ///////////////////////////////////////////////////
// // td5 //

// let a = 5
// let b = 8
// let c = a
// a = b
// b = a 
// console.log(a);
// // ///////////////////////////////////////////////////

// let nmbr = prompt("Entre un nombre :")

// if (nmbr > 0) {
//     console.log("positif"); 
// }else if(nmbr < 0){
//     console.log("negatif");
// }else{
//     console.log("egal a 0");    
// }

// // ///////////////////////////////////////////////////

// let password = "12345" 
// let userpassword = prompt("Entrer un MDP")

// if (password == userpassword) {
//     console.log("Acces autorise");
// }
// else {
//     console.log("Acces refuse");
// }
// // // ///////////////////////////////////////////////////

// let a = Number(prompt("Entre un nombre :"))
// let b = Number(prompt("Entre un deuxieme"))
// let c = Number(prompt("Entre un deuxieme"))


// if (a > b && a > c ) {
//     console.log("le plus grand "+a);
// }
// else if (b > c && b > a)
// console.log("le plus grand "+b);
// else {
//     console.log("le plus grand "+c);

// }
// // // ///////////////////////////////////////////////////

// let nubr = Number(prompt("Entre un nombre pour un jour de semaine"))

// switch (nubr) {
//     case 0:
//         console.log("Dimanche");
//         break;
//     case 1:
//         console.log("Samedi");
//         break;
//     case 2:
//         console.log("Vendredi");
//         break;
//     case 3:
//         console.log("Jeudi");
//         break;
//     case 4:
//         console.log("Mercredi");
//         break;
//     case 5:
//         console.log("Mardi");
//         break;
//     case 6:
//         console.log("Lundi");
//         break;
// }
// // // ///////////////////////////////////////////////////

// let a = Number(prompt("Entre un nombre :"))
// let b = Number(prompt("Entre un deuxieme"))

// if (a > b) {
//     console.log("le plus petit " + b);


// } else {
//     console.log("le plus petit" + a);
// }
// // // ///////////////////////////////////////////////////
// // // ///////////////////////////////////////////////////

// let a = Number(prompt("Entre un nombre :"))

// if (a < 0) {
//     console.log("negatif");

// }else {
//     console.log("positif");

// }
// // // ///////////////////////////////////////////////////

// let a = Number(prompt("Entre la temperature"))

// if (a < 0) {
//     console.log("glace");

// }else if (a >= 0 && a <= 50){
//     console.log("liquide");

// }else {
//     console.log("vapeur");

// }
// // // ///////////////////////////////////////////////////
// let nobrcadre = Number(prompt("Entre le nombre acheter"))

// if (nobrcadre < 10) {
//     console.log(nobrcadre * 20);

// }else if (nobrcadre > 10 && nobrcadre <= 30) {
//     console.log((nobrcadre - 10) * 15 + 200);

// }else if (nobrcadre >30) {
//     console.log((nobrcadre - 30) * 5 + 500);

// }
// // // ///////////////////////////////////////////////////
// let sexe = prompt("Entre le Sexe: ")
// let age = Number(prompt("Entre votre age: "))

// if (sexe == "homme" && age > 20) {
//     console.log("paye connard");

// }else if (sexe == "femme" &&  age >= 18 && age <= 35) {
//     console.log("paye connard");

// }else{
//     console.log("tes chanceux");

// }
// // // ///////////////////////////////////////////////////
// let a = Number(prompt("Entre un nombre"))

// if (a % 2 == 0 ) {
//     console.log("paire");

// }else{
//     console.log("impair");

// }
// // // ///////////////////////////////////////////////////
// let humeur= prompt("quel est la couleur de vos vetements: ")

// if (humeur == "rouge") {
//     console.log("colere");

// }if (humeur == "bleu") {
//     console.log("calme");

// }if (humeur == "gris") {
//     console.log("l'algo ca fait chier");

// }if (humeur == "vert") {
//     console.log("pas d'internet c'est relou");

// }else{
//     console.log("choisi entre les 4 couleurs");

// }
// // // ///////////////////////////////////////////////////
// let meto= prompt("quel est la Meteo: ")

//  if (meto == "froid") {
//      console.log("couvre toi");

//  }if (meto == "chaud") {
//      console.log("go la palge");

//  }if (meto == "pluis") {
//      console.log("prend un parapluis");

//  }if (meto == "neige") {
//      console.log("sort les skis");

//  }
// // // ///////////////////////////////////////////////////
// let coureur = prompt("saisie numero du coureur: ")

// while (coureur !=  -1) {
//     console.log(coureur);
//     coureur = prompt("saisie numero du coureur: ")

// }console.log("le dernier est la");
// // // ///////////////////////////////////////////////////
// for (let index = 1; index <= 10 ; index++) {
//     console.log(index);


// }
// // // ///////////////////////////////////////////////////
// let res = 0
// for (let index = 1; index <= 100 ; index++) {
//     res = index +res
//     console.log(res);
// }
// // // ///////////////////////////////////////////////////
// let nbr = prompt("entrer un nombre: ")

//  for (let i = 1; i <= 10 ; i++) {
//     console.log(i + " * " + nbr + " = " + (i * nbr)); 
//  }

//1 * 2 = 2
// // // ///////////////////////////////////////////////////
// let pyramide = ""

// for(let i = 1; i <= 5; i++){
//     pyramide = pyramide + "1"
//     console.log(pyramide);

// }
// // // ///////////////////////////////////////////////////
// let coureur = prompt("entre le numero arriver")
// let temp = prompt("quel est sont temps?: ")
// let res = 0

// while (coureur != -1) {

//     res++ 
//     console.log("le numero " + coureur + " est arriver " + res + " est arriver en: " + temp);

//     coureur=prompt("entre le numero arriver")
//     if (coureur != -1) {
//         temp = prompt("quel est sont temps?: ")
//     }


// }
// // // ///////////////////////////////////////////////////
// let minute = prompt("entre les minute: ")
// let second = prompt("entre les second: ")
// 

// for (let i = minute ; i >= 0 ; i--) {
//     for (let j = second; j >= 0 ; j--) {
//         console.log(i + " : " + j );

//     }
//     second = 59
// }
// // // ///////////////////////////////////////////////////
// let age = prompt("entre un age : ")
// let kdo = 0

// for (let i = 0; i < age ; i++) {
//     kdo += 150 + (i * 3)

// }
// console.log(kdo);
// // // ///////////////////////////////////////////////////
// let nmb = 0
// let result = 0;
// let posi = 0;

// for (let index = 0; index < 5;  index++) {
//     nmb = Number(prompt("Entre un nombre :"));
//     if (nmb > result) {
//         result = nmb 
//         posi = index
//     }

// }
// console.log(result);
// console.log(posi);
// // // ///////////////////////////////////////////////////

// let numbr = 0
// let result = 0

// for (let i = 0; i < 6; i++) {
//     numbr = Number(prompt("note la taille"))
//     if (numbr < 2.1) {
//         result ++

//     }
// }console.log(result);
// // // ///////////////////////////////////////////////////

// let vote = ""
// let nmboui = 0
// let nmbnon = 0
// let nmbblanc = 0
// let nmbvotant = 5

// for (let i = 0; i < nmbvotant; index++) {
//     vote = prompt("vote b (blanc) vote o (oui) vote n (non): ")
//     while (vote != "b" && vote != "o" && vote != "n") {
//         vote = prompt("Pas dans la liste: ")
//     }
//     if (vote == "b") {
//         nmbblanc++
//     }
//     else if (vote-- "o") {
//         nmboui++
//     } else {
//         nmbnon++
//     }
// }
// }
// console.log(nmboui);
// console.log(nmbnon);
// console.log(nmbblanc);
// // // ///////////////////////////////////////////////////
//                                 jeux
// let nbr = randomize(1, 100)
// let usernbr = 0
// let erreur = 5

// while (nbr != usernbr && erreur > 0) {
//     usernbr = prompt("choisi un numbre entre 1 et 100: ") 

//     while (isNaN(usernbr)) {
//         usernbr = prompt("on demande des nombre entre 1 et 100: ");
//     }

//     if (usernbr < nbr) {
//         console.log("plus"); 
//         erreur--
//         console.log("il te reste " + erreur);

//     }
//     else if (usernbr > nbr) {
//         console.log("moins"); 
//         erreur--
//         console.log("il te reste " + erreur);

//     }

// }
// if (erreur <= 0) {
//     console.log("perdu,tes nul");
// }
// else{
//     console.log("bien jouer");
// }



// function randomize(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// // // ///////////////////////////////////////////////////

let userchoce = 0

console.log("ton avion ce crash dans l'ocean (choisi o ou n)");

while (userchoce != "o" && "n") {
        
    }
    userchoce = prompt("tu aide les survivants(o) ou tu t accroche au debrille qui flotte(n)? : ")
    if (userchoce == "o") {
        console.log("arret cardiaque tu meurt ! ");
    }
    if (userchoce == "n") {
        console.log("tu arrive sur une ile");
        console.log("un orage arrive et tu vois des valise qui flotte sur l'eau il pourrai avoir des vivre");
        userchoce = prompt("tu fabrique un abrit pour passer l'orage(o) ou tu fabrique un radeau pour recupere les valises(n)");
    } 
    if (userchoce == "n") {
        console.log("arret cardiaque tu meurt ! ");
    } 
    if (userchoce == "o") {
        console.log("a ton reveille des canibals te capture et te tue ! ");
        userchoce = prompt("veut tu te reveiller? (o)ou(n)");

    } 
    if (userchoce == "o") {
        console.log("tu te reveille de ton cochemard! fin");

    } if (userchoce === "n") {
        userchoce = prompt("tu aide les survivants(o) ou tu t accroche au debrille qui flotte(n)? : ")
    }
// // // ///////////////////////////////////////////////////

