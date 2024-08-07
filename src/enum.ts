// za optimizaciju enum-a koristiti keyword const kao prefiks
// const enum Velicina {Small = 1, Medium, Large}; - ce kada ovaj kod prevede u JavaScript, dati mnogo jednostavniji prevod

enum Velicina {Small = 1, Medium, Large}; //enum je enumerator ili funkcija koja varijablama dodeljuje custom ili brojevne vrednosti
/////////////////////////////////////////// ukoliko prvi element enum-a ima vrednost 1, svaki sledeci je za 1 veci


let mojaVelicina: Velicina = Velicina.Medium;
console.log(mojaVelicina); //dobicemo vrednost 2 u konzoli

