import{Column} from './column.js';

export class Game {
    constructor(playerOne, playerTwo){
        this.playerOne = playerOne;
        this.playerTwo = playerTwo;
        this.currentPlayer = 1;
        this.columns = [new Column(), new Column(), new Column(), new Column(), new Column(), new Column(), new Column()]
    }

    getName(){
        return `${this.playerOne} vs. ${this.playerTwo}`
    }

    playInColumn(columnIndex){
        let currentColumn = this.columns[columnIndex]
        currentColumn.add(this.currentPlayer); //column add method

        if (this.currentPlayer === 1){
            this.currentPlayer = 2;
        } else {
            this.currentPlayer = 1;
        }
    }

    getTokenAt(rowIndex, columnIndex){
        let currentColumn = this.columns[columnIndex];
        return currentColumn.getTokenAt(rowIndex);  //column getToken method
    }

}
