/***** https://github.com/Labush/JS *****/
function apparHorloge(){
    let date = new Date();
    let heure = date.getHours();
    let min = date.getMinutes();
    
    
    if(heure == 24){
        heure = 0;
    }
    
    // appartion d'un 0 si heure et/ou minute en dessous de 10. Ex : 01, 02.
    heure = (heure < 10) ? "0" + heure : heure;
    min = (min < 10) ? "0" + min : min;
    
    let result = heure + ":" + min;
    document.getElementById("horloge").textContent = result;
    
    setTimeout(apparHorloge, 1000);
    
}

apparHorloge();