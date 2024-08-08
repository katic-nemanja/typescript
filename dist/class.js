"use strict";
class pointKlasa {
    // ovo su metode za vracanje instanciranih vrednosti privatnih parametara
    getX() {
        return this.x;
    }
    // ovo su metode za vracanje instanciranih vrednosti privatnih parametara
    getY() {
        return this.y;
    }
    // ovo su metode za postavljanje pojedinacnih vrednosti koordinata
    setX(value) {
        if (value < 0) {
            throw new Error('Vrednost koordinate ne sme biti negativna!!!!');
        }
        else {
            this.x = value;
            console.log(`Promenjena vrednost varijable X na ${value}`);
        }
    }
    setY(value) {
        if (value < 0) {
            throw new Error('Vrednost koordinate ne sme biti negativna!!!!');
        }
        else {
            this.y = value;
            console.log(`Promenjena vrednost varijable Y na ${value}`);
        }
    }
    // ovo je konstruktor klase kojih u TypeScriptu moze biti samo jedna, a ne kao u C# neograniceno
    constructor(a = 0, b = 0) {
        this.x = a;
        this.y = b;
    }
    // metod za ispisivanje vrednosti definisanih varijabli sa tekstom koji ima default vrednost, a ako se prosledi funkciji custom tekst, onda ce biti custom tekst umesto default
    draw(tekst = 'upravo su definisane varijable ') {
        console.log(`${tekst} x: ${this.x} i y:${this.y}}`);
    }
    umanji(koeficijent) {
        this.x = this.x / koeficijent;
        this.y = this.y / koeficijent;
    }
}
// instanciranje klase
let tackica = new pointKlasa(65, 43);
// pozivanje metoda preko instance klase
tackica.draw();
let kfc = 4;
tackica.umanji(kfc);
// ovde je pozvana metoda klase, a vrednosti zadatih parametara su iscitani preko get metoda
tackica.draw(`upravo su umanjene varijable x: ${tackica.getX()} i y: ${tackica.getY()} za koeficijent ${kfc} i dobijene su: `);
let tacka2 = new pointKlasa();
tacka2.draw();
tacka2.setX(12);
tacka2.setY(18);
//# sourceMappingURL=class.js.map