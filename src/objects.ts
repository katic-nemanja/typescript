let korisnik :{
    id:number,
    ime:string,
    prezime:string,
    nadimak?:string //znak pitanja predstavlja da je ovo polje u objektu opciono u procesu inicijalizacije objekta
} = {id:1, ime:"Nemanja",prezime: "Katic"};

korisnik.nadimak = 'Kale';

console.log(Object.values(korisnik));
