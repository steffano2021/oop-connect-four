import{Column} from './column.js';
import{ColumnWinInspector} from './column-win-inspector.js'
import{RowWinInspector} from './row-win-inspector.js'
import{DiagonalWinInspector} from './diagonal-win-inspector.js'

export class Game {
    constructor(playerOne, playerTwo){
        this.playerOne = playerOne;
        this.playerTwo = playerTwo;
        this.currentPlayer = 1;
        this.columns = [new Column(), new Column(), new Column(), new Column(), new Column(), new Column(), new Column()]
        this.winnerNumber = 0;
    }

    getName(){
        if (this.winnerNumber === 3){
            return `${this.playerOne} ties with ${this.playerTwo}`
        } else if (this.winnerNumber === 2){
            return `${this.playerTwo} wins!`;

        }else if(this.winnerNumber === 1){
            return `${this.playerOne} wins!`;
        } else return `${this.playerOne} vs. ${this.playerTwo}`;


    }

    playInColumn(columnIndex){
        let currentColumn = this.columns[columnIndex]
        currentColumn.add(this.currentPlayer); //column add method

        if (this.currentPlayer === 1){
            this.currentPlayer = 2;
        } else {
            this.currentPlayer = 1;
        }

        this.checkForTie();
        this.checkForColumnWin();
        this.checkForRowWin();
        this.checkForDiagonalWin();
    }

    checkForTie(){
        for(let i = 0; i < 7; i++){
            if (!this.isColumnFull(i)) return
        }
        this.winnerNumber = 3;
    }


    getTokenAt(rowIndex, columnIndex){
        let currentColumn = this.columns[columnIndex];
        return currentColumn.getTokenAt(rowIndex);  //column getToken method
    }

    isColumnFull(columnIndex){
        if(this.winnerNumber > 0) return true;
        let currentColumn = this.columns[columnIndex];
        return currentColumn.isFull();
    }

    checkForColumnWin(){
        if(this.winnerNumber > 0) return;
        for(let i = 0; i < 7; i++){
            let columnInspector = new ColumnWinInspector(this.columns[i]);

            if(columnInspector.inspect() === 1){
                this.winnerNumber = 1;
                return;
            }else if(columnInspector.inspect() === 2) {
                this.winnerNumber = 2;
                return;
            }
        }

    }

    checkForRowWin(){
        if(this.winnerNumber > 0) return;

        let group1 = new RowWinInspector(this.columns.slice(0,4));
        let group2 = new RowWinInspector(this.columns.slice(1,5));
        let group3 = new RowWinInspector(this.columns.slice(2,6));
        let group4 = new RowWinInspector(this.columns.slice(3,7));

        if (group1.inspect() > 0){
            this.winnerNumber = group1.inspect();
            return
        }

        if (group2.inspect() > 0){
            this.winnerNumber = group2.inspect();
            return
        }

        if (group3.inspect() > 0){
            this.winnerNumber = group3.inspect();
            return
        }

        if (group4.inspect() > 0){
            this.winnerNumber = group4.inspect();
            return
        }

    }

    checkForDiagonalWin(){
        if(this.winnerNumber > 0) return;

        let group1 = new DiagonalWinInspector(this.columns.slice(0,4));
        let group2 = new DiagonalWinInspector(this.columns.slice(1,5));
        let group3 = new DiagonalWinInspector(this.columns.slice(2,6));
        let group4 = new DiagonalWinInspector(this.columns.slice(3,7));

        if (group1.inspect() > 0){
            this.winnerNumber = group1.inspect();
            return
        }

        if (group2.inspect() > 0){
            this.winnerNumber = group2.inspect();
            return
        }

        if (group3.inspect() > 0){
            this.winnerNumber = group3.inspect();
            return
        }

        if (group4.inspect() > 0){
            this.winnerNumber = group4.inspect();
            return
        }

    }
}
