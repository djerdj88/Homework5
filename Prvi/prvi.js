"use strict"
let broj, rimski = "", str = "", arap = 0, rim, arp;

function $(selector) {
    return document.querySelector(selector);
}

function $$(selector) {
    return document.querySelectorAll(selector);
}

function CL(selector){
    return document.getElementsByClassName(selector);
}


$("#btn-1").addEventListener("click", function(){
    if (CL("input-11")[0].value === ""){
        alert("Please enter a number!!!");
    }
    else{
    broj = CL("input-11")[0].value;
    brojRimski(broj);
    CL("input-12")[0].value = rim;
    }
});

$("#btn-2").addEventListener("click", function(){
    if (CL("input-21")[0].value === ""){
        alert("Please enter a roman number!!!");
    }
    else{
    broj = CL("input-21")[0].value;
    rimskiBroj(broj);
    CL("input-22")[0].value = arp;
    }
});

$("#clr-1").addEventListener("click", function(){
    CL("input-12")[0].value = "";
    CL("input-11")[0].value = "";
});
$("#clr-2").addEventListener("click", function(){
    CL("input-22")[0].value = "";
    CL("input-21")[0].value = "";
});



function brojRimski(br) {
if (br.length === 1) {
    let a = parseInt(br[0]);
    switch(a) {
        case 1:
            rimski += "I";
            break;
        case 2:
            rimski += "II";
            break;
        case 3:
            rimski += "III";
            break;
        case 4:
            rimski += "IV";
            break;
        case 5:
            rimski += "V";
            break;
        case 6:
            rimski += "VI";
            break;
        case 7:
            rimski += "VII";
            break;
        case 8:
            rimski += "VIII";
            break;
        case 9:
            rimski += "IX";
            break;
    }
}
else if (br.length === 2){
    let a = parseInt(br[1]);
    let b = parseInt(br[0]);
    switch(b) {
        case 1:
            rimski += "X";
            break;
        case 2:
            rimski += "XX";
            break;
        case 3:
            rimski += "XXX";
            break;
        case 4:
            rimski += "XL";
            break;
        case 5:
            rimski += "L";
            break;
        case 6:
            rimski += "LX";
            break;
        case 7:
            rimski += "LXX";
            break;
        case 8:
            rimski += "LXXX";
            break;
        case 9:
            rimski += "XC";
            break;
    }
    switch(a) {
        case 1:
            rimski += "I";
            break;
        case 2:
            rimski += "II";
            break;
        case 3:
            rimski += "III";
            break;
        case 4:
            rimski += "IV";
            break;
        case 5:
            rimski += "V";
            break;
        case 6:
            rimski += "VI";
            break;
        case 7:
            rimski += "VII";
            break;
        case 8:
            rimski += "VIII";
            break;
        case 9:
            rimski += "IX";
            break;
    }
}
else if (br.length === 3){
    let a = parseInt(br[2]);
    let b = parseInt(br[1]);
    let c = parseInt(br[0]);
    switch(c) {
        case 1:
            rimski += "C";
            break;
        case 2:
            rimski += "CC";
            break;
        case 3:
            rimski += "CCC";
            break;
        case 4:
            rimski += "CD";
            break;
        case 5:
            rimski += "D";
            break;
        case 6:
            rimski += "DC";
            break;
        case 7:
            rimski += "DCC";
            break;
        case 8:
            rimski += "DCCC";
            break;
        case 9:
            rimski += "CM";
            break;
    }
    switch(b) {
        case 1:
            rimski += "X";
            break;
        case 2:
            rimski += "XX";
            break;
        case 3:
            rimski += "XXX";
            break;
        case 4:
            rimski += "XL";
            break;
        case 5:
            rimski += "L";
            break;
        case 6:
            rimski += "LX";
            break;
        case 7:
            rimski += "LXX";
            break;
        case 8:
            rimski += "LXXX";
            break;
        case 9:
            rimski += "XC";
            break;
    }
    switch(a) {
        case 1:
            rimski += "I";
            break;
        case 2:
            rimski += "II";
            break;
        case 3:
            rimski += "III";
            break;
        case 4:
            rimski += "IV";
            break;
        case 5:
            rimski += "V";
            break;
        case 6:
            rimski += "VI";
            break;
        case 7:
            rimski += "VII";
            break;
        case 8:
            rimski += "VIII";
            break;
        case 9:
            rimski += "IX";
            break;
    }
}
else {
    for (let i = 0; i <br.length - 3; i++){
        str += br[i];
    }
    for (let i = 0; i < parseInt(str); i++){
        rimski += "M";
    }
    let a = parseInt(br[br.length - 1]);
    let b = parseInt(br[br.length - 2]);
    let c = parseInt(br[br.length - 3]);
    switch(c) {
        case 1:
            rimski += "C";
            break;
        case 2:
            rimski += "CC";
            break;
        case 3:
            rimski += "CCC";
            break;
        case 4:
            rimski += "CD";
            break;
        case 5:
            rimski += "D";
            break;
        case 6:
            rimski += "DC";
            break;
        case 7:
            rimski += "DCC";
            break;
        case 8:
            rimski += "DCCC";
            break;
        case 9:
            rimski += "CM";
            break;
    }
    switch(b) {
        case 1:
            rimski += "X";
            break;
        case 2:
            rimski += "XX";
            break;
        case 3:
            rimski += "XXX";
            break;
        case 4:
            rimski += "XL";
            break;
        case 5:
            rimski += "L";
            break;
        case 6:
            rimski += "LX";
            break;
        case 7:
            rimski += "LXX";
            break;
        case 8:
            rimski += "LXXX";
            break;
        case 9:
            rimski += "XC";
            break;
    }
    switch(a) {
        case 1:
            rimski += "I";
            break;
        case 2:
            rimski += "II";
            break;
        case 3:
            rimski += "III";
            break;
        case 4:
            rimski += "IV";
            break;
        case 5:
            rimski += "V";
            break;
        case 6:
            rimski += "VI";
            break;
        case 7:
            rimski += "VII";
            break;
        case 8:
            rimski += "VIII";
            break;
        case 9:
            rimski += "IX";
            break;
    }
}

//console.log(`Broj ${br} konvertovan u rimski je: ${rimski}`);
rim = rimski;
rimski = "";
str = "";
};


function rimskiBroj(br){
    let i = 0;
    if (br[i] === "M"){
        while(br[i] === "M"){
            arap += 1000;
            i++;
        }
    }
    // 100
    if (br[i] === "C" && br[i+1] !== "C" && br[i+1] !== "D" && br[i+1] !=="M"){
        arap += 100;
        i++;
    }
    else if (br[i] === "C" && br[i+1] === "C" && br[i+2] !== "C"){
        arap += 200;
        i+=2;
    }
    else if (br[i] === "C" && br[i+1] === "C" && br[i+2] === "C"){
        arap += 300;
        i+=3;
    }
    else if (br[i] === "C" && br[i+1] === "D"){
        arap += 400;
        i+=2;
    }
    else if (br[i] === "D" && br[i+1] !=="C"){
        arap += 500;
        i++;
    }
    else if (br[i] === "D" && br[i+1] === "C" && br[i+2] !== "C"){
        arap += 600;
        i+=2;
    }
    else if (br[i] === "D" && br[i+1] === "C" && br[i+2] === "C" && br[i+3] !== "C"){
        arap += 700;
        i+=3;
    }
    else if (br[i] === "D" && br[i+1] === "C" && br[i+2] === "C" && br[i+3] === "C"){
        arap += 800;
        i+=4;
    }
    else if (br[i] === "C" && br[i+1] === "M"){
        arap += 900;
        i+=2;
    }
    // 10
    if (br[i] === "X" && br[i+1] !== "X" && br[i+1] !== "L" && br[i+1] !== "C"){
        arap += 10;
        i++;
    }
    else if (br[i] === "X" && br[i+1] === "X" && br[i+2] !== "X"){
        arap += 20;
        i+=2;
    }
    else if (br[i] === "X" && br[i+1] === "X" && br[i+2] === "X"){
        arap += 30;
        i+=3;
    }
    else if (br[i] === "X" && br[i+1] === "L"){
        arap += 40;
        i+=2;
    }
    else if (br[i] === "L" && br[i+1] !=="X"){
        arap += 50;
        i++;
    }
    else if (br[i] === "L" && br[i+1] === "X" && br[i+2] !== "X"){
        arap += 60;
        i+=2;
    }
    else if (br[i] === "L" && br[i+1] === "X" && br[i+2] === "X" && br[i+3] !== "X"){
        arap += 70;
        i+=3;
    }
    else if (br[i] === "L" && br[i+1] === "X" && br[i+2] === "X" && br[i+3] === "X"){
        arap += 80;
        i+=4;
    }
    else if (br[i] === "X" && br[i+1] === "C"){
        arap += 90;
        i+=2;
    }

    
    // 1
    if (br[i] === "I" && br[i+1] !== "I" && br[i+1] !== "V" && br[i+1] !== "X"){
        arap += 1;
        i++;
    }
    else if (br[i] === "I" && br[i+1] === "I" && br[i+2] !== "I"){
        arap += 2;
        i+=2;
    }
    else if (br[i] === "I" && br[i+1] === "I" && br[i+2] === "I"){
        arap += 3;
        i+=3;
    }
    else if (br[i] === "I" && br[i+1] === "V"){
        arap += 4;
        i+=2;
    }
    else if (br[i] === "V" && br[i+1] !=="I"){
        arap += 5;
        i++;
    }
    else if (br[i] === "V" && br[i+1] === "I" && br[i+2] !== "I"){
        arap += 6;
        i+=2;
    }
    else if (br[i] === "V" && br[i+1] === "I" && br[i+2] === "I" && br[i+3] !== "I"){
        arap += 7;
        i+=3;
    }
    else if (br[i] === "V" && br[i+1] === "I" && br[i+2] === "I" && br[i+3] === "I"){
        arap += 8;
        i+=4;
    }
    else if (br[i] === "I" && br[i+1] === "X"){
        arap += 9;
        i+=2;
    }

    //console.log(`Rimski broj ${br} konvertovan u arapski je: ${arap}`);
    arp = arap;
    arap = 0;
}
