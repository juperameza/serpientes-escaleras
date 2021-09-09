export default class Player {
    constructor(){
        this._position=0;
    }
    move(dice){
       this._position+=dice;       
    }
}