export class RowWinInspector{
    constructor(columns){
        this.columns = columns; // [col1,col2,col3,col4] columns are obj
    }

    inspect(){

        for (let i = 0; i < 6; i++){
            let valueAtColumn0 = this.columns[0].tokens[i]; //either 2 or 1
            let valueAtColumn1 = this.columns[1].tokens[i];
            let valueAtColumn2 = this.columns[2].tokens[i];
            let valueAtColumn3 = this.columns[3].tokens[i];

            if (valueAtColumn0 === valueAtColumn1 && valueAtColumn1 === valueAtColumn2 && valueAtColumn2 === valueAtColumn3){
                if (valueAtColumn0 === undefined || valueAtColumn0 === null) {
                return 0
            } else {
                return valueAtColumn0
            }
            }
        }

    }
}
