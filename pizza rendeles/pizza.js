"use strict";

let payment = 0;
let rendeles = document.getElementById("rendeles");

function send() {
    let type = document.forms["urlap"]["type"].value;
    let size = document.forms["urlap"]["size"].value;
    let writetype = "";
    switch (type) {
        case "mar":
            writetype = "Margaréta"
               break;
        case "haw":
            writetype = "Hawaii"
            break;
        case "hu":
            writetype = "Magyaros"
            break;
    
        
    }
    let writesize = "";
    switch (size) {
        case "small":
            writesize = "Kicsi"
               break;
        case "medium":
            writesize = "Közepes"
            break;
        case "large":
            writesize = "Nagy"
            break;
    
        
    }
    
    let szoveg = `<p>Az ön rendelése: 1 darab ${writesize} ${writetype} pizza.</p>`;
    szoveg += `<p>Fizetendő összeg: ${payment}Ft </p>`;
    rendeles.innerHTML = szoveg;
}