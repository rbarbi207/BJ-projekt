let sajat_eletek = 10;
let slomesz_eletek = 6;
let pognarbal_eletek = 10;
let slodos_eletek = 14;

let sajat_kartyaosszeg = 0;
let slomesz_kartyaosszeg = 0;
let pognarbal_kartyaosszeg = 0;
let slodos_kartyaosszeg = 0;

let duplazva = false;
let jelenlegi = "slomesz";

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

function Card(){
    let uj = document.createElement("div");
    uj.style.width = "90px";
    uj.style.backgroundImage = "url(pictures/hátlap.png)";
    uj.style.position = "fixed";
    uj.style.right = "32%";
    uj.style.bottom = "24%";
    /*uj.style.animationName = "osztas1";
    uj.style.animationDuration = "3s";
    uj.style.animationFillMode = "forwards";*/
    uj.setAttribute("id", "kartya");
    document.body.appendChild(uj);
    document.getElementById("kartya").animate([
        // key frames
        { right: '32%' },
        { right: '100%' }
      ], {
        // sync options
        duration: 4000,
        iterations: 1,
        direction: forward
      });
    console.log(uj);

    /*      css: 
    
.pakli{
    width: 200px;
    height: 200px;
    background-color: black;
    position: fixed;
    left: 20%;
    top: 20%;
}

@keyframes felfordit{
    0%{left: 20%; top: 20%; transform: rotateX(0deg);}
    49.9%{background-image: url(images/hátlap.png);}
    50%{background-image: url(images/); transform: rotateX(90deg);}
    100%{left: 0%; top: 50%; background-color: red; transform: rotateX(180deg);}
}
    */

/*      HTML
    <button id="kartya" class="pakli" onclick="UjKartya()">

    </button>
*/

}

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