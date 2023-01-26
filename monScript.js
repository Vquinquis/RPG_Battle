Attaque = document.getElementById("Attaque");
Defense = document.getElementById("Defense");
VieJ1 = document.getElementById("Vie_J1")
VieEnnemi = document.getElementById("Vie_monstre_1");
afficheAction = document.getElementById("afficheAction");

Attaque.onclick = function() {
    VieEnnemi.innerHTML = VieEnnemi.innerHTML-50;
    afficheAction.innerHTML = "Vous attaquez le monstre, il perd 20 PV";

    Attaque.disabled=true;
    Defense.disabled=true;


    if(VieEnnemi.innerHTML<=0){
        afficheAction.innerHTML = "Le monstre est vaincu"
    }
    else{
        setTimeout(function() {
            VieJ1.innerHTML = VieJ1.innerHTML-20;
            afficheAction.innerHTML = "Le monstre vous attaque, vous perdez 20 PV";
            Attaque.disabled=false;
            Defense.disabled=false;
        }, 2000);
    } 
}

Defense.onclick = function() {
    afficheAction.innerHTML = "Vous vous defendez";

    Attaque.disabled=true;
    Defense.disabled=true;


    if(VieEnnemi.innerHTML<=0){
        afficheAction.innerHTML = "Le monstre est vaincu"
    }
    else{
        setTimeout(function() {
            VieJ1.innerHTML = VieJ1.innerHTML-10;
            afficheAction.innerHTML = "Le monstre vous attaque, vous perdez 10 PV";
            Attaque.disabled=false;
            Defense.disabled=false;
        }, 2000);
    } 
}