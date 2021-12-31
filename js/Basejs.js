selectElmtchoixStart = document.getElementById("choixStrart");

function startUn() {
    var choix = textselectionne = selectElmtchoixStart.options[selectElmtchoixStart.selectedIndex].text;

    if (choix == 2021) {

        document.getElementById("annee").style.display = "none"
        document.getElementById("moi21").style.display = "flex"


    }

}