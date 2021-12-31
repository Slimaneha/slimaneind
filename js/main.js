// Annéee 


var un = 2021
var deux = 2022
var trois = 2023





// moi 

var moi2107 = "Juillet 2021"
var moi2108 = "Août 2021"
var moi2109 = "Septembre 2021"
var moi2110 = "Octobre 2021"
var moi2111 = "Novembre 2021"
var moi2112 = "Décembre 2021"


// 2022 

var moi2201 = "Janvier 2022"
var moi2202 = "Février 2022"
var moi2203 = "Mars 2022"
var moi2204 = "Avirl 2022"
var moi2205 = "Mai 2022"
var moi2106 = "Juin 2022"
var moi2207 = "Juillet 2022"
var moi2208 = "Aout 2022"
var moi2209 = "Spetembre 2022"
var moi2210 = "Octobre 2022"
var moi2211 = "Novembre 2022"
var moi2212 = "Decembre 2022"





// fuction annéee
selectElmtchoixStart = document.getElementById("choixStrart");



// categorie 

var annnee = document.getElementById("annee")
var moiUn = document.getElementById("moi2021")
selectElmtchoixStart = document.getElementById("choixStrart");

function startUn() {
    var choix = textselectionne = selectElmtchoixStart.options[selectElmtchoixStart.selectedIndex].text;

    if (choix == 2021) {

        document.getElementById("annee").style.display = "none"
        document.getElementById("moi21").style.display = "flex"


    }

    else if (choix == 2022) {
        document.getElementById("annee").style.display = "none"
        document.getElementById("moi22").style.display = "flex"

    }

}


selectElmtchoixstartdeux = document.getElementById("choixstrartdeux");

function startdeux() {
    var choixdeux = textselectionne = selectElmtchoixstartdeux.options[selectElmtchoixstartdeux.selectedIndex].text;


    if (choixdeux == moi2108 ) {
        document.getElementById("moi21").style.display="none"

    }

    else if (choixdeux == moi2109)
    {
          document.getElementById("moi21").style.display="none"
        document.getElementById("Septembre21").style.display="block"

    }

    else if (choixdeux == moi2110)
    {
        document.getElementById("moi21").style.display="none"
        document.getElementById("Septembre21").style.display="none"
        document.getElementById("Octobre21").style.display="block"


    }
    else if (choixdeux == moi2111)
    {
        document.getElementById("moi21").style.display="none"
        document.getElementById("Septembre21").style.display="none"
        document.getElementById("Octobre21").style.display="none"
        document.getElementById("Novembre21").style.display="block"



    }

    else if (choixdeux == moi2112)
    {
        document.getElementById("moi21").style.display="none"
        document.getElementById("Septembre21").style.display="none"
        document.getElementById("Octobre21").style.display="none"
        document.getElementById("Novembre21").style.display="none"
        document.getElementById("Decembre2021").style.display="block"




    }

   




    
}


/// 2022 
selectElmtchoixstart2022 = document.getElementById("choixstrart2022");

function start2022() {
    var choixtrois = textselectionne = selectElmtchoixstart2022.options[selectElmtchoixstart2022.selectedIndex].text;


  if  ( choixtrois == moi2201 ) {

       
        document.getElementById("Janvier22").style.display="block"

        document.getElementById("moi22").style.display = "none"

    }


} 








 
 
 