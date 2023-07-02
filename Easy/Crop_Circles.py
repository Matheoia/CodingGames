import sys
import math
import numpy as np

p = print
ins = input()

centers = ins.split(' ')
alp = "a b c d e f g h i j k l m n o p q r s t u v w x y z".split(' ')
alpha = {}

for i in range(len(alp)):
    alpha[alp[i]] = i

mat = np.full((25, 19), "{}")

for center in centers: 

    if(center.startswith("PLANTMOW")):
        for i in range(mat.shape[0]):
            for j in range(mat.shape[1]):
                if(math.sqrt((j-alpha[center[8]])**2+(i-alpha[center[9]])**2) <= int(center[10:])/2):
                    if(mat[i,j] == "{}"):
                        mat[i,j] = "  "
                    else:
                        mat[i,j] = "{}"

    elif(center.startswith("PLANT") and center[5] != "M"):
        for i in range(mat.shape[0]):
            for j in range(mat.shape[1]):

                if(math.sqrt((j-alpha[center[5]])**2+(i-alpha[center[6]])**2) <= int(center[7:])/2):
                    mat[i,j] = "{}"

    else :
        for i in range(mat.shape[0]):
            for j in range(mat.shape[1]):

                if(math.sqrt((j-alpha[center[0]])**2+(i-alpha[center[1]])**2) <= int(center[2:])/2):
                    mat[i,j] = "  "

for i in range(mat.shape[0]):
    ligne = ""
    for j in range(mat.shape[1]):
        ligne += mat[i,j]

    p(ligne)
