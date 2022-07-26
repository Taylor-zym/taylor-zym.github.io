import os,re

target = "<li><a href='$name$'/index.html'$'>$name$</a></li>"
list_ = os.listdir()
conts = ''
for li in list_:
    if os.path.isdir(li) and li[0]!='.':
        s = target.replace('$name$',li+'/index.html')
        conts += s+'\n'
with open('index1.html','r',encoding='utf-8') as f:
    code = f.read()
    
code_ = re.sub(r'</h1>[.*?,\n]','</h1>\n'+conts,code)
with open('index.html','w',encoding='UTF-8')as f:
    f.write(code_)
        
