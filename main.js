import Board from "./board.js";
import Player from "./player.js";
import Dice from './dice.js';
let dice= new Dice();
let player1=new Player();
let player2= new Player();
let board = new Board();


do {
    let t=dice.throw();
    console.log(`Al jugador 1 le salio ${t} en el dado`)
    player1.move(t);
    player1._position=board.checkSquare(player1._position);
    if(player1._position>=100){
        break
    }
    t=dice.throw();
    console.log(`Al jugador 2 le salio ${t} en el dado`)
    player2.move(t);
    player2._position=board.checkSquare(player2._position);
    if(player2._position>=100){
        break
    }
} while (player1._position<100 && player2._position<100);

 if(player1._position>=100){
    console.log("Gano el corredor 1!")
}
else{
    console.log("Gano el corredor 2!")
}