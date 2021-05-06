export class ColumnWinInspector {
    constructor(column){
        this.column = column;
    }

    inspect(){
        let counter = 0;
        let winner;
        let tokenArr = this.column.tokens;
        for(let i = 1; i <tokenArr.length; i++){

            if(tokenArr[i-1] === tokenArr[i]){
                counter++;
                winner = tokenArr[i];
            } else{
                counter = 0;
            }
        }
        console.log(tokenArr, "arr")
        console.log(counter, "counter");
        console.log(winner, "winner")

        if(counter >= 3){
            return winner;
        } else{
            return 0;
        }

    }

}
