document.getElementById("vie").value = 10

var mes_mots = ["chocolat", "mort", "cafe", "rouge", "plein", "bonjour"];
var mot_enigme = choisir_mot_aleatoir(mes_mots);

trait_des_lettres(mot_enigme);

function validerBouton()
{
    if(document.getElementById("vie").value > 0){
        var lettre = document.getElementById("lettres").value;
        console.log(lettre);
        console.log(mot_enigme);
        var resulta = verifie(mot_enigme, lettre);
        historique(lettre)
        remplacer(lettre, mot_enigme)
        document.getElementById("lettres").value = ""
        if(resulta == 0)
        {
            vie_perdu()
            console.log(vie_perdu)
            image(document.getElementById("vie").value)
        }
    }
    
    
    if( document.getElementById("vie").value == 0)
    {
        document.getElementById("lettres").disabled="true";
        alert("Perdu")
    }
}

//je veux choisir mon mot
function nombre_aleatoir_entier(valeur_max)
{
    // Math.random() => renvois un nombre entre 0 et 1
    // Math.floor() => qui converti un nombre à virgul en nombre entier
    // et donc l'utilisation de tout ca * la taille de la liste pour avoir un
    // nombre entre 0 et la taille de ma liste
    return Math.floor(Math.random() * valeur_max);
}

function choisir_mot_aleatoir(liste_de_mots)
{
    // appel la fonction qui retourne un nombre aleatoir entre 0 et ma_liste.lenght
    var index = nombre_aleatoir_entier(liste_de_mots.length);
    return liste_de_mots[index];
}

//je met mon mot aleatoir dans ma case enigme
//je remplace mon mot qui est dans ma case enigme par des trait"__"
function trait_des_lettres(mot)
{
    var symbole = "_ ";
    var mot_cacher = symbole.repeat(mot.length);
    document.getElementById("enigme").value = mot_cacher;
}


//je veux une fonction qui verifie si une lettre est bien dans mon mot
//et combien de fois la lettre est correcte
function verifie(mon_mot, lettre)
{
    var compteur = 0;
    
    for(var i = 0; i < mon_mot.length; i++)
        {
            if(lettre == mon_mot[i])
            {
                compteur++;
            }
        }

    return compteur;
}

//je veux perdre une vie si la lettre n'est pas correcte
function vie_perdu()
{   
    var vie = document.getElementById("vie");
    vie.value--;

}

//je veux mettre la lettre fausse dans LETTRE UTILISER
//elle recoit une lettre et elle renvoie rien
function historique(lettre)
{
    var valeur = document.getElementById("lettresUtiliser").value + " " + lettre
    document.getElementById("lettresUtiliser").value = valeur;
}


//je veux remplacer le trait par une lettre si elle correcte
//je recoit la lettre, le mot cacher, je recoit le mot trait
//elle retourne rien elle modifie en direct la case ENIGMEE avec les lettre au lieu des traits
function remplacer(lettre, mot_cacher)
{
    mot_trait = document.getElementById("enigme").value;
    console.log(mot_trait)
    for(var i = 0; i < mot_cacher.length; i++)
    {
        console.log(i)
        console.log(lettre == mot_cacher[i])

        if(lettre == mot_cacher[i])
        {
            var case_modifier_dans_mot_trait = i * 2;

            // comme on peut pas modifier un charactere d'une string existante
            // on recupère ce qu'il y avait avant le charactere a remplacer, ce qu'il y avait apres et on fait avant + caractere + apres
            var premiere_partie = mot_trait.substr(
                0, 
                case_modifier_dans_mot_trait
            )
            var derniere_partie = mot_trait.substr(
                case_modifier_dans_mot_trait +1,  
                mot_trait.length -1
            )

            var mot_trait = premiere_partie + lettre + derniere_partie;

        }
    }
    document.getElementById("enigme").value = mot_trait;

}

function valider_nouveau()
{
    var lettre = document.getElementById("lettres").value;
    var historique = document.getElementById("lettresUtiliser").value;

    for(i = 0; i < historique.length; i++)
    {
        if(lettre == historique[i])
        {
            document.getElementById("lettres").value = ""
            alert("Lettre deja utiliser")
        }
    }
}

function image(vie)
{   
    if (document.getElementById("mon_png") == null){
        var img = document.createElement("img");
        img.id = "mon_png";
        var div = document.getElementById("mon_image");
        div.appendChild(img);
    }
    
    var img = document.getElementById("mon_png");
    img.src = "image/" + vie + ".png";
    
}


//var img = document.createElement("img");
//img.src = "image/1.png";
//
//var div = document.getElementById("mon_image");
//div.appendChild(img);



//document.getElementById("vie").value;
//document.getElementById("enigme").value;
//document.getElementById("lettresUtiliser").value;