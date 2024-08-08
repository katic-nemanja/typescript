"use strict";
// interfejsi predstavljaju samo konvenciju kojom se definise neki custom objekat, ne i implementaciju
// za implementaciju su zaduzene klase koje mogu imati i metode unutar definicije objekta
let drawPoint = function (point) {
    console.log(`Koordinate po X osi su: ${point.x},a po Y osi: ${point.y}`);
};
let tacka = { x: 3, y: 5 };
drawPoint(tacka);
//# sourceMappingURL=interface.js.map