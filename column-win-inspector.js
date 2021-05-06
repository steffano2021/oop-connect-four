import {Column} from "./column.js"

export class ColumnWinInspector {
    constructor(column){
        this.column = column;
    }

    inspect(){  //how to bring in the token array?
        let counter = 0;
        let winner;
        for(let i = 0; i <Column.token.length; i++){
            if(token[i] === token[i+1]){
                counter++;
                winner = token[i];
            } else{
                counter = 0;
            }
        }

        if(counter >= 3){
            return winner;
        } else{
            return 0;
        }

    }

}
