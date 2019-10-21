"use strict";

let fizetendo = 0;
let rendeles = document.getElementById("rendeles");

function elkuld() {
    let fajta = document.forms["urlap"]["fajta"].value;
    let meret = document.forms["urlap"]["meret"].value;
    let extra = document.getElementById("extra").value;
    let bacon = document.getElementById("bacon").value;
    let szosz = document.getElementById("szosz").value;
    let kiirFajta = "";
    switch (fajta) {
        case "mar":
            kiirFajta = "Margaréta";
            break;
        case "haw":
            kiirFajta = "Hawai";
            break;
        case "mag":
            kiirFajta = "Magyaros";
            break;
    }
    let kiirMeret = "";
    switch (meret) {
        case "kicsi":
            kiirMeret = "Kicsi";
            break;
        case "kozep":
            kiirMeret = "Közepes";
            break;
        case "nagy":
            kiirMeret = "Nagy";
            break;
    }
    if (fajta == "mar" && meret == "kicsi") {
        fizetendo = 1500;
    } else if (fajta == "mar" && meret == "kozep"){
        fizetendo = 1700;
    }
     else if (fajta =="mar" && meret == "nagy"){
         fizetendo = 1900;
    }
     else if (fajta =="haw" && meret == "kicsi"){
         fizetendo = 1650;
    }
     else if (fajta =="haw" && meret == "kozep"){
         fizetendo = 1850;
    }
     else if (fajta =="haw" && meret == "nagy"){
         fizetendo = 2050;
    }
     else if (fajta =="mag" && meret == "kicsi"){
         fizetendo = 1400;
    }
     else if (fajta =="mag" && meret == "kozep"){
         fizetendo = 1600;
    }
     else if (fajta =="mag" && meret == "nagy"){
         fizetendo = 1800;
    }
    
    let szoveg = `<p>Az ön rendelése darabszám: 1 darab pizza.</p>`;
    szoveg += `<p>Az ön rendelése méret:${kiirMeret}</p>`;
    szoveg += `<p>Az ön rendelése fajta:${kiirFajta}</p>`;
    szoveg += `<p>Fizetendő összeg: ${fizetendo}Ft</p>`;
    rendeles.innerHTML = szoveg;
}