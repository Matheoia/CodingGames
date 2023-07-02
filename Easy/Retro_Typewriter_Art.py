import sys
import math

p = print
t = input()
l = t.split(' ')

out = ""

for i in range(len(l)):

    if l[i][-2:] == "sp":
        out += int(l[i][0:-2]) * " "

    elif l[i][-2:] == "bS":
        out += int(l[i][0:-2]) * "\\"

    elif l[i][-2:] == "sQ":
        out += int(l[i][0:-2]) * "'"

    elif l[i][-2:] == "nl":
        out += "\n"
    
    else : 
        out += int(l[i][0:-1]) * l[i][-1]

p(out)
