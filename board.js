export default class Board{
    constructor(){
        this._board=this._board=new Array(101).fill(0)
        this._llenarEscaleras();
        this._llenarSerpientes();
    }
    _llenarEscaleras(){
        this._board[31]=36;
        this._board[77]=21;
        this._board[55]=40;
        this._board[13]=28;
        this._board[19]=37;
        this._board[80]=35;
        this._board[48]=29;
        this._board[25]=50;
    }
    _llenarSerpientes(){
        this._board[31]=36;
        this._board[77]=21;
        this._board[55]=40;
        this._board[13]=28;
        this._board[19]=37;
        this._board[80]=35;
        this._board[48]=29;
        this._board[25]=50;
    }
    checkSquare(pos){     
        if(this._board[pos]>0){
             console.log(`Caiste en escalera de la posicion ${pos} avanzas hasta la casilla ${pos+=this._board[pos]}`)
             return this._board[pos];
        }
        if(this._board<0){
         console.log(`Caiste en serpiente retrocedes hasta la casilla ${pos-=this._board[pos]}`)
         return this._board[pos];
        }
        else{
            console.log(`Te quedas en la casilla ${pos}`)
            return 0;
        }
     }
}