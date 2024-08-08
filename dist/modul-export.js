"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModularnaKlasa = void 0;
// export je keyword za exportovanje klase u drugu klasu na koriscenje
class ModularnaKlasa {
    constructor(id, ime, prezime) {
        this._id = id;
        this._ime = ime;
        this._prezime = prezime;
    }
    printOUT() {
        console.log(`Instancirana Modularna klasa sa podacima id: ${this._id}, ime: ${this._ime}, prezime: ${this._prezime}`);
    }
}
exports.ModularnaKlasa = ModularnaKlasa;
//# sourceMappingURL=modul-export.js.map