// let numbers:number[] = [1, 2, 3, 4, '5']; //ovaj kod ispaljuje gresku jer je peti clan niza '5' tipa string

let svasta: any[] = [1, 2, 3, false, '5']; // ovaj kod ne ispaljuje gresku, jer je podeseno da ovaj array prihvata bilo koju vrednost

let numbers = [1, 2, 3, 4];

numbers.forEach(m => console.log(m.toString())); // kada je varijabla definisana kao neki tip, u "DOT" notaciji, 
///////////////////////////////////////////////// element koji zove moguce funkcije dobija samo funkcije vezane za taj tip