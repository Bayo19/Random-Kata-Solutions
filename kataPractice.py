def check(seq, elem):
    for i in range(len(seq)):
        if seq[i] == elem:
            return True
        if elem not in seq:
            return False

print(check([1,2,3], 1))

# above is iterative search

# def more_zeros(s):
#     start = list(s)
#     result = []
#     for i in range(len(start)):
#         result.append(bin(ord(start[i])))
#     return result
        
            



# print(more_zeros('abcde'))

