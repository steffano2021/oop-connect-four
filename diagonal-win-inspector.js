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

        for(let j = 0; j < 4; j++) { //descending
            let bvalueAtColumn0 = this.columns[0].tokens[j+3]; //either 2 or 1
            let bvalueAtColumn1 = this.columns[1].tokens[j+2];
            let bvalueAtColumn2 = this.columns[2].tokens[j+1];
            let bvalueAtColumn3 = this.columns[3].tokens[j];

            if (bvalueAtColumn0 === bvalueAtColumn1 && bvalueAtColumn1 === bvalueAtColumn2 && bvalueAtColumn2 === bvalueAtColumn3){
                if (bvalueAtColumn0 === undefined || bvalueAtColumn0 === null) {
                return 0
            } else {
                return bvalueAtColumn0
                }
            }
        }
    }
}
