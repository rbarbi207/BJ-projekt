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