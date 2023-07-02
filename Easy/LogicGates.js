const n = parseInt(readline());
const m = parseInt(readline());

var inp = {};
var out = {};

for (let i = 0; i < n; i++) {
    var inputs = readline().split(' ');
    const inputName = inputs[0];
    const inputSignal = inputs[1];
    
    inp[inputName] = inputSignal
}


for (let i = 0; i < m; i++) {
    var inputs = readline().split(' ');
    const outputName = inputs[0];
    const type = inputs[1];
    const inputName1 = inputs[2];
    const inputName2 = inputs[3];
    
    var signal = outputName + " ";

    const length = inp[inputName1].length

    if(type == "AND") {

        for(var j=0; j<length; j++) {
            if(inp[inputName1][j] == "-" && inp[inputName1][j] == inp[inputName2][j]) {
                signal += "-"
            }
            else{
                signal += "_"
            }
        }
    }

    if(type == "OR") {

        for(var j=0; j<length; j++) {
            if(inp[inputName1][j] == "-" || inp[inputName2][j] == "-") {
                signal += "-"
            }
            else{
                signal += "_"
            }
        }
    }

    if(type == "XOR") {

        for(var j=0; j<length; j++) {
            if((inp[inputName1][j] == "-" && inp[inputName2][j] == "_") || (inp[inputName1][j] == "_" && inp[inputName2][j] == "-")) {
                signal += "-"
            }
            else{
                signal += "_"
            }
        }
    }

    if(type == "NAND") {

        for(var j=0; j<length; j++) {
            if(inp[inputName1][j] == "-" && inp[inputName1][j] == inp[inputName2][j]) {
                signal += "_"
            }
            else{
                signal += "-"
            }
        }
    }

    if(type == "NOR") {

        for(var j=0; j<length; j++) {
            if(inp[inputName1][j] == "-" || inp[inputName2][j] == "-") {
                signal += "_"
            }
            else{
                signal += "-"
            }
        }
    }

    if(type == "NXOR") {

        for(var j=0; j<length; j++) {
            if((inp[inputName1][j] == "-" && inp[inputName2][j] == "_") || (inp[inputName1][j] == "_" && inp[inputName2][j] == "-")) {
                signal += "_"
            }
            else{
                signal += "-"
            }
        }
    }


    console.log(signal)

}
