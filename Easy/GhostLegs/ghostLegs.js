var inputs = readline().split(' ');
const W = parseInt(inputs[0]);
const H = parseInt(inputs[1]);

letters = [];
lines = [];
numbers = [];
outFin = [];

for(let i = 0; i < H; i++) {
    const line = readline();

    if(i == 0){
        letters = line.split('  ');
    }

    if(i == H-1){
        numbers = line.split('  ');
    }

    lines.push(line)
}


for(let i = 0; i<letters.length; i++) {

    var idxDec = i

    for(let j = 0; j<H; j++){
        if(idxDec == 0){
            if(lines[j][1] == "-"){
                idxDec += 1;
            }
        } else if(idxDec > 0 && idxDec < letters.length-1){
            if(lines[j][3*idxDec-1] == "-"){
                idxDec -= 1;
            } else if(lines[j][3*idxDec+1] == '-'){
                idxDec +=1;
            }
        } else {
            if(lines[j][3*idxDec-1] == '-'){
                idxDec -= 1;
            }
        }
    }

    outFin.push(letters[i] + numbers[idxDec])
}

for(let i = 0; i<outFin.length; i++){
    console.log(outFin[i])
}
