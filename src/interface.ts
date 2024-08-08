// interfejsi predstavljaju samo konvenciju kojom se definise neki custom objekat, ne i implementaciju
// za implementaciju su zaduzene klase koje mogu imati i metode unutar definicije objekta

interface Point{
    x:number,
    y:number
}

let drawPoint =function(point:Point){
    console.log(`Koordinate po X osi su: ${point.x},a po Y osi: ${point.y}`);
}

let tacka:Point = {x:3, y:5};

drawPoint(tacka);