"use strict";
// TaxYear:number=2022 - ovaj deo koda unutar funkcije znaci da ako nije prosledjena vrednost godini, da koristi kao default 2022, 
// a ako je prosledjena onda ce biti override-ovana
function CalculateTax(ulaz, TaxYear = 2022) {
    if (TaxYear < 2024) {
        return ulaz * 1.2;
    }
    else {
        return ulaz * 1.4;
    }
}
let lova = 48000;
let godina = 2024;
let taksa = CalculateTax(lova, godina);
console.log(`Vrednost takse za zadati ulaz od ${lova} i obracunskim periodom za godinu ${godina} je ${taksa}`);
//# sourceMappingURL=functions.js.map