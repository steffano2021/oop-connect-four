export class Column{
    constructor(tokens=[]){ //this.token is the column
        this.tokens = tokens // [1, 2, 1, 2, 1, 2]

    }

    add(playerNum){
        if(this.tokens.length >= 6) return; //array could only have 6 indexes long
        this.tokens.unshift(playerNum);

    }

    getTokenAt(num){ //can you give me back the value of the specific location
        if(!this.tokens[num]){
            return null
        }else if(this.tokens[num] === 1){
            return 1
        }else if(this.tokens[num] === 2){
            return 2
        }

    }
}