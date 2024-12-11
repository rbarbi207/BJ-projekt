const lapok = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
// - volt-e már használva az adott lap

let sajat_eletek = 10;
let sajat_eletek_max = 10;
let ellenfel_eletek = 6;
let ellenfel_eletek_max = 6;
/*let slomesz_eletek = 6;
let pognarbal_eletek = 10;
let slodos_eletek = 14;*/

let sajat_kartyaosszeg = 0;
let ellenfel_kartyaosszeg = 0;
/*let slomesz_kartyaosszeg = 0;
let pognarbal_kartyaosszeg = 0;
let slodos_kartyaosszeg = 0;*/

let sajat_kartya_darabszam = 0;
let ellenfel_kartya_darabszam = 0;

let duplazva = false;
let jelenlegi_ellenfel = "slomesz";
let megallt = false;
let ellenfel_asz = 0;
let sajat_asz = 0;

const egesz_sziv = "pictures/szív.png";
const fel_sziv = "pictures/fél_szív.png";
const ures_sziv = "pictures/empty_szív.png";

/*  animation-fill-mode: forwards; - nem megy vissza az animáció az eredeti helyére*/

function Double(){
    duplazva = true;
}

function Giveup(){
    if(duplazva == true){
        sajat_eletek -= 2;
    }else{
        sajat_eletek -= 1;
    }
    Delete_cards();
    Szivek_kiirasa();

}

function Stop(){
    megallt = true;
}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }

function Card(){
    if(!megallt){
        let uj_kartya_szam = Math.floor(Math.random() * 13);    //2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
        let uj_kartya_szin = Math.floor(Math.random() * 4);     //treff, káró, kör, pikk
        while (lapok[uj_kartya_szin * 13 + uj_kartya_szam]) {
            uj_kartya_szam = Math.floor(Math.random() * 13);
            uj_kartya_szin = Math.floor(Math.random() * 4);
        }
        lapok[uj_kartya_szin * 13 + uj_kartya_szam] = true;
        let uj = document.createElement("img");

        uj.style.width = "91px";
        uj.style.transform = "rotateZ(180deg)";
        uj.src = "pictures/hátlap.png"
        uj.style.position = "fixed";
        uj.style.right = "32%";
        uj.style.bottom = "24%";
        uj.setAttribute("id", "kartya");
        let animations = "odamegy" + (sajat_kartya_darabszam+1).toString() + " ,";        
        sajat_kartya_darabszam++;
        if(uj_kartya_szam == 12){
            sajat_asz++;
            sajat_kartyaosszeg += 11;
        }else{
            sajat_kartyaosszeg += Math.min(uj_kartya_szam + 2 , 10);
        }

        switch (uj_kartya_szin) {
            case 0:
                animations += "treff_";
                break;
            case 1:
                animations += "karo_";
                break;
        
            case 2:
                animations += "kor_";
                break;

            case 3:
                animations += "pikk_";
                break;
        }

        switch (uj_kartya_szam) {
            case 0:
                animations += "ketto";
                break;

            case 1:
                animations += "harom";
                break;
        
            case 2:
                animations += "negy";
                break;

            case 3:
                animations += "ot";
                break;

            case 4:
                animations += "hat";
                break;

            case 5:
                animations += "het";
                break;

            case 6:
                animations += "nyolc";
                break;

            case 7:
                animations += "kilenc";
                break;

            case 8:
                animations += "tiz";
                break;

            case 9:
                animations += "jumbo";
                break;

            case 10:
                animations += "dama";
                break;

            case 11:
                animations += "kiraly";
                break;

            case 12:
                animations += "asz";
                break;

        }
        uj.style.animationName = animations;
        uj.style.animationDuration = "2s";
        uj.style.animationFillMode = "forwards";
        document.body.appendChild(uj);
        if(sajat_kartyaosszeg > 21 && sajat_asz == 0){
            if(duplazva){
                sajat_eletek -= 4;
            }else{
                sajat_eletek -= 2;
            }
            sajat_kartyaosszeg = 0;
            setTimeout(() => {  Delete_cards(); }, 3000);
            setTimeout(() => {  sajat_kartya_darabszam = 0; }, 3000);
            /*sleep(3000);
            Delete_cards();
            sajat_kartyaosszeg = 0;*/
        }else if(sajat_kartyaosszeg > 21 && sajat_asz > 0){
            sajat_kartyaosszeg -= 10;
            sajat_asz--;
        }
        
        Szivek_kiirasa();
    }

}


function Szivek_kiirasa(){
    let sajat_szivek = document.getElementById("playerHearts");
    let ellenfel_szivek = document.getElementById("opponentHearts");

    ellenfel_szivek.innerHTML = ""
    for(let i=0;i<Math.floor(ellenfel_eletek);i++){
        ellenfel_szivek.innerHTML += '<img src="' + egesz_sziv + '">';
    }
    if(ellenfel_eletek % 2){
        ellenfel_szivek.innerHTML += '<img src="' + fel_sziv + '">';
    }
    for(let i = 0;i<Math.floor(ellenfel_eletek_max - ellenfel_eletek);i++){
        ellenfel_szivek.innerHTML += '<img src="' + ures_sziv + '">';
    }

    sajat_szivek.innerHTML = "";
    for(let i=0;i<Math.floor(sajat_eletek/2);i++){
        sajat_szivek.innerHTML += '<img src="' + egesz_sziv + '">';
    }
    if(sajat_eletek % 2){
        sajat_szivek.innerHTML += '<img src="' + fel_sziv + '">';
    }
    for(let i = 0;i<Math.floor((sajat_eletek_max - sajat_eletek) / 2);i++){
        sajat_szivek.innerHTML += '<img src="' + ures_sziv + '">';
    }



}

function Delete_cards(){
    for(let i = 0;i<sajat_kartya_darabszam + ellenfel_kartya_darabszam;i++){
        const cards = document.getElementById("kartya");
        cards.remove();
    }
}


/*function Vege_van_e(){
    
}*/









{       //kezdőlap js

    let oldalszam = 1
    
    function vissza() {
        if(oldalszam != 1) {
            oldalszam--;
            oldalValtozas(oldalszam)
        }
    }
    
    function tovabb() {
        if (oldalszam != 4) {
            oldalszam++;
            oldalValtozas(oldalszam)
        }
    }
    
    function oldalValtozas(oldal){
        if(oldal == 1){
            document.getElementById("szabaly").innerHTML = "<li>A blackjack minden leosztásában a cél az osztó megverése. Ehhez olyan lapodnak kell lennie, ami magasabb az osztó lapjánál, de összességében nem haladja meg a 21-et. Emellett akkor is nyerhetsz, ha 22-nél alacsonyabb értékű lapod van, és az osztó lapjának értéke meghaladja a 21-et. Ha a lapod teljes értéke 22 vagy több, azt általában „besokallás”-nak nevezik, és automatikusan vesztessz egy életet.</li>"+
            "<li>Amikor a kezed értéke megegyezik az osztóéval, azt döntetlen-nek hívják. Ha ez történik, akkor senkisem veszít életet és kezdődik újra a kör.</li>";
        }
        else if(oldal == 2){
            document.getElementById("szabaly").innerHTML = "<li>A blackjackben a tízesek, bubik, dámák, és királyok mindegyikének tízes az értéke. Az ászoknak két különböző értéke lehet, egy vagy tizenegy (választhatsz, melyik).</li>"+
            "<p>Feladás</p>"+
            "<li>Néhány blackjackjátékban a feladás lehetővé teszi, hogy eldobd a lapodat, és visszakapd a kezdeti       téted 50%-át, ha úgy érzed, hogy biztosan veszteni fogsz az osztó ellen, feltéve, ha az általad     játszott variánsban a feladás megengedett.</li>";
        }
        else if(oldal == 3){
            document.getElementById("szabaly").innerHTML = "<p>Kettéosztás</p>"+
            "<li>Lényegében a kettéosztás egy kézből kettőt csinál, így több esélyed lesz nyerni. Amikor kettéosztasz egy lapot, egy további tétet tehetsz az újonnan létrehozott második kézre, ennek értéke megegyezik az eredeti tétével. A kettéosztás a következő helyzetekben fordulhat elő:</li>"+
            "<ul><li>két egyforma értékű kezdőkártyát kapsz (király-tíz, hat-hat stb.) Ezután mindkét lappal függetlenül játszol, azok a saját értékük szerint nyernek, vesztenek vagy érnek el döntetlent.</li></ul>"
        }
        else if(oldal == 4){
            document.getElementById("szabaly").innerHTML = "<p>Duplázás</p>"+
            "<li>A duplázáslehetővé teszi, hogy megduplázd az osztónak okozott sebzést, de te is duplán sebzőtsz.</li>"+
            "<li>Duplázni kettéosztás utén is tudsz de csak egyszer duplázhatsz.</li>"
        }
       
    
    }


}