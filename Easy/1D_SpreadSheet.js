const N = parseInt(readline());
var cal = Array.from({ length: N }, () => []);
var res = Array.from({ length: N}, () => "?");

for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    const operation = inputs[0];
    const arg1 = inputs[1];
    const arg2 = inputs[2];

    cal[i] = [operation, arg1, arg2]
}

function value(arg) {

    if(arg[0] == '$'){

        if(res[parseInt(arg.slice(1))] != "?"){
            return parseInt(res[parseInt(arg.slice(1))])
        } else {
            return parseInt(calc(parseInt(arg.slice(1))))
        }

    } else {
        return parseInt(arg)
    }

}

function calc(i) {

    const [ope, arg1, arg2] = cal[i];

    if(ope == "VALUE"){res[i] = value(arg1)}
    else if(ope == "ADD"){res[i] = value(arg1) + value(arg2)}
    else if(ope == "SUB"){res[i] = value(arg1) - value(arg2)}
    else if(ope == "MULT"){res[i] = value(arg1) * value(arg2)}

    if(res[i] == -0){
        return 0
    }
    return res[i]

}

for(let i=0; i<N; i++) {
    console.log(calc(i))
}
