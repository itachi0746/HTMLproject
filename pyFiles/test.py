import os  
  
  
path = r'E:\html\HTMLproject\小猪佩奇\img'  
head = path.split('\\')[-1]

arr = os.walk(path)

t = [1,2,3,4,5]
  
if t and len(t)%5==0:
    print('hello')
