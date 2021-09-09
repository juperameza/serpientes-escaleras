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
        this._board[80]=15;
        this._board[48]=29;
        this._board[25]=50;
    }
    _llenarSerpientes(){
        this._board[50]= -30;
        this._board[44]=-20;
        this._board[56]=-32;
        this._board[71]=-46;
        this._board[76]=-45;
        this._board[60]=-36;
        this._board[83]=-49;
        this._board[32]=-22;
    }
    checkSquare(pos){     
      
        if(this._board[pos]>0){
             console.log(`Caiste en escalera de la posicion ${pos} avanzas hasta la casilla ${pos+=this._board[pos]}`)
             return pos;
        }
        if(this._board[pos]<0){
         console.log(`Caiste en serpiente de la posicion ${pos} retrocedes hasta la casilla ${pos+=this._board[pos]}`)
         return pos;
        }
        else{
            if(pos>100){
                console.log(`Ganaste!! te quedas en la casilla ${100}`)
              return 100;  
            }
            console.log(`Te quedas en la casilla ${pos}`)
            return pos;
            
        }
     }
}