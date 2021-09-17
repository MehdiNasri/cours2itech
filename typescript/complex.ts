export class Complex {
    reel1 : number;
    imaginaire1 : number;
    reel2 : number;
    imaginaire2 : number;
    constructor(reel1 : number ,imaginaire1 : number ,reel2 : number ,imaginaire2 : number) {
        this.reel1 = reel1;
        this.imaginaire1 = imaginaire1;
        this.reel2 = reel2;
        this.imaginaire2 = imaginaire2;
    }

    somme = () : void => {
        console.log((this.reel1 + this.reel2) + " + " + (this.imaginaire1 + this.imaginaire2) +"i" );
    }
}