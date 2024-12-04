const lapok = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
// - volt-e már használva az adott lap

let sajat_eletek = 10;
let slomesz_eletek = 6;
let pognarbal_eletek = 10;
let slodos_eletek = 14;

let sajat_kartyaosszeg = 0;
let slomesz_kartyaosszeg = 0;
let pognarbal_kartyaosszeg = 0;
let slodos_kartyaosszeg = 0;

let sajat_kartya_darabszam = 0;
let ellenfel_kartya_darabszam = 0;

let duplazva = false;
let jelenlegi_ellenfel = "slomesz";
let megallt = false;
let ellenfel_asz = false;
let sajat_asz = false;

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

}

function Stop(){
    megallt = true;
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
        let animations = "odamegy, ";

        sajat_kartya_darabszam++;
        sajat_kartyaosszeg += Math.min(uj_kartya_szam + 2 , 10);
        if(uj_kartya_szam == 12){
            sajat_asz = true;
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
        uj.style.animationDuration = "4s";
        uj.style.animationFillMode = "forwards";
        document.body.appendChild(uj);
        vege_van_e();
    }

}



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
