# https://github.com/Aikeko/Codingame-Practice/blob/master/Enigma%20machine

# https://www.codingame.com/ide/puzzle/encryptiondecryption-of-enigma-machine

# During World War II, the Germans were using an encryption code called Enigma – which was basically an encryption machine that encrypted messages for transmission. The Enigma code went many years unbroken. Here How Basic Machine works:

# First Caesar shift is applied using an incrementing number.
# If AAA and starting number is 4 then output will be EFG.
# A + 4 = E
# A + 4 + 1 = F
# A + 4 + 1+ 1 = G
# Now EFG from first ROTOR such as "ABCDEFGHIJKLMNOPQRSTUVWXYZ" --> "BDFHJLCPRTXVZNYEIWGAKMUSQO"
# so EFG become "JLC". Then it is passed through 2 more rotors to get final value.
# If the second ROTOR is "AJDKSIRUXBLHWTMCQGZNPYFVOE", we apply the substitution step again thus:
# ABCDEFGHIJKLMNOPQRSTUVWXYZ
# AJDKSIRUXBLHWTMCQGZNPYFVOE
# So "JLC" becomes "BHD".

# If the third ROTOR is "EKMFLGDQVZNTOWYHXUSPAIBRCJ", then the final substitution is "BHD" becoming "KQF".
# Final Output is sent via Radio Transmitter.


import sys
import math

operation = 'ENCODE'
shift = 7
rotors = ['BDFHJLCPRTXVZNYEIWGAKMUSQO', 'AJDKSIRUXBLHWTMCQGZNPYFVOE', 'EKMFLGDQVZNTOWYHXUSPAIBRCJ]

message = 'WEATHERREPORTWINDYTODAY

def doCaesar(message, shift, operation):
	alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' * 3
	if operation == 'ENCODE':
		result = [alphabet[alphabet.index(letter)+shift+i] for i, letter in enumerate(message)]
	else:
		result = [alphabet[alphabet.index(letter)-shift-i] for i, letter in enumerate(message)]
	return result

def doRotor(message, rotor, operation):
	alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
	if operation == 'ENCODE':
		result = [rotor[alphabet.index(letter)] for letter in message]
	else:
		result = [alphabet[rotor.index(letter)] for letter in message]

	return result

def encode(message, shift, rotors):
	coded = message
	coded = doCaesar(coded, shift, 'ENCODE')
	for i, rotor in enumerate(rotors):
		coded = doRotor(coded, rotor, 'ENCODE')
	return coded

def decode(message, shift, rotors):
	decoded = message
	for i in range(len(rotors)-1, -1, -1):
		decoded = doRotor(decoded, rotors[i], 'DECODE')
	decoded = doCaesar(decoded, shift, 'DECODE')

	return decoded

result = encode(message, shift, rotors) if operation == 'ENCODE' else decode(message, shift, rotors)

print(''.join(result))
