// export je keyword za exportovanje klase u drugu klasu na koriscenje
export class ModularnaKlasa{
    private _id:number;
    private _ime:string;
    private _prezime:string;

    constructor(id:number, ime:string, prezime:string){
        this._id = id;
        this._ime = ime;
        this._prezime = prezime;
    }

    printOUT(){
        console.log(`Instancirana Modularna klasa sa podacima id: ${this._id}, ime: ${this._ime}, prezime: ${this._prezime}`);
    }
}