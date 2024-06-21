import os
imgs = os.listdir()
i = 1
for img in (imgs):
    if img=='bg.jpg':
        pass
    elif img=='change.py':
        pass
    else:
        try:
            os.rename(img,f'{i}.jpg')
            i+=1
        except:
            pass
