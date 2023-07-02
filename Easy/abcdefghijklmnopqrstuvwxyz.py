import sys
import math
import numpy as np
p = print
a = "abcdefghijklmnopqrstuvwxyz"
n = int(input())
mat = np.full((n, n), "-")  
out = np.full((n, n), "-") 
apot = []

def tryFindVoisins(res,i,j,idx):

    try:
        if i < n-1 and a[idx+1] == mat[i+1, j]:
            res.append([i+1, j])
            return res, i+1, j
        if i > 0 and a[idx+1] == mat[i-1, j]:
            res.append([i-1, j])
            return res, i-1, j
        if j < n-1 and a[idx+1] == mat[i, j+1]:
            res.append([i, j+1])
            return res, i, j+1
        if j > 0 and a[idx+1] == mat[i, j-1]:
            res.append([i, j-1])
            return res, i, j-1
    except:
        return 'nope'


for i in range(n):
    m = input()
    for j in range(len(m)):
        mat[i,j] = m[j]

        if m[j] == "a":
            apot.append([i,j])

for i in range(len(apot)):

    ipot = apot[i][0]
    jpot = apot[i][1]
    res = [[ipot, jpot]]

    try:
        for idx in range(25):
            res, ipot, jpot = tryFindVoisins(res, ipot, jpot, idx)

        for i in range(26):
            out[res[i][0], res[i][1]] = a[i]
    
    except:
        pass

for i in range(n):

    ligne = ""
    for j in range(n):
        ligne += out[i,j]
    p(ligne)
