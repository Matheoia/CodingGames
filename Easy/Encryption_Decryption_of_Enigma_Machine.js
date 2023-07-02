p = console.log
const operation = readline();
const pseudoRandomNumber = parseInt(readline());

// --- Récupération des inputs
rotors = []
for(let i = 0; i < 3; i++) {
    const rotor = readline();
    rotors.push(rotor)
}
const message = readline();    

let firstRotor = rotors[0].split('')
let secondRotor = rotors[1].split('')
let thirdRotor = rotors[2].split('')

// --- Introduction de variables
alp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
leToNb = {}
nbToLe = {}

for(let i = 0; i<alp.length; i++){
    leToNb[alp[i]] = i
    nbToLe[i] = alp[i]
}

if(operation == "ENCODE") {

    var cesar = ""
    // --- First Cesar
    msg = message.split(''); 
    for(let i = 0; i<msg.length; i++) {
        cesar += nbToLe[(leToNb[msg[i]]+i+pseudoRandomNumber)%26];
    }
    
    // --- Rotors
    msgCesar = cesar.split('')
    
    msgAfterFR = "";
    for(let i = 0; i<msgCesar.length; i++) {
        msgAfterFR += firstRotor[leToNb[msgCesar[i]]];
    }
    
    msgAfterSR = "";
    for(let i = 0; i<msgAfterFR.length; i++) {
        msgAfterSR += secondRotor[leToNb[msgAfterFR[i]]];
    }
    
    msgAfterTR = "";
    for(let i = 0; i<msgAfterSR.length; i++) {
        msgAfterTR += thirdRotor[leToNb[msgAfterSR[i]]];
    }
    p(msgAfterTR)
    
} else {

    msgAfterTR = "";
    for(let i = 0; i<message.length; i++) {
        msgAfterTR += nbToLe[thirdRotor.indexOf(message[i])];
    }

    msgAfterSR = "";
    for(let i = 0; i<msgAfterTR.length; i++) {
        msgAfterSR += nbToLe[secondRotor.indexOf(msgAfterTR[i])];
    }

    msgAfterFR = "";
    for(let i = 0; i<msgAfterSR.length; i++) {
        msgAfterFR += nbToLe[firstRotor.indexOf(msgAfterSR[i])];
    }

    var msgAfterCesar = "";
    for(let i = 0; i<msgAfterFR.length; i++) {
        msgAfterCesar += nbToLe[(leToNb[msgAfterFR[i]]-i-pseudoRandomNumber+260)%26];
    }
    p(msgAfterCesar)

}
