export class DiagonalWinInspector {
    constructor(columns){
        this.columns = columns;
    }

    inspect (){
        for (let i = 0; i < 4; i++){ //ascending
            let valueAtColumn0 = this.columns[0].tokens[i]; //either 2 or 1
            let valueAtColumn1 = this.columns[1].tokens[i+1];
            let valueAtColumn2 = this.columns[2].tokens[i+2];
            let valueAtColumn3 = this.columns[3].tokens[i+3];
            if (valueAtColumn0 === valueAtColumn1 && valueAtColumn1 === valueAtColumn2 && valueAtColumn2 === valueAtColumn3){
                if (valueAtColumn0 !== undefined || valueAtColumn0 !== null) {
                return valueAtColumn0
                }
            }
        }
        console.log("hello")
        for(let j = 3; j >= 0; j--) { //descending
            console.log(j, "jay")
            let valueAtColumn0 = this.columns[0].tokens[j+3]; //either 2 or 1
            console.log(valueAtColumn0, "at 0")
            let valueAtColumn1 = this.columns[1].tokens[j+2];
            console.log(valueAtColumn1, "at 1")
            let valueAtColumn2 = this.columns[2].tokens[j+1];
            let valueAtColumn3 = this.columns[3].tokens[j];

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
