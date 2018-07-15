import os  
  
  
path = r'D:\workProject\fanke\src\assets'  
head = path.split('\\')[-1]

arr = os.walk(path)

t = []
  
for fpathe,dirs,fs in arr:  
    for f in fs:  
            t.append('../' + head + '/' + f)


print(t)
