import os  
  
  
path = r'F:\HTMLproject\pyFiles\123.txt'  
head = path.split('\\')[-1]

arr = os.walk(path)

# t = []
  
# for fpathe,dirs,fs in arr:  
#     for f in fs:  
#             t.append('../' + head + '/' + f)

print(1)
print(path)
