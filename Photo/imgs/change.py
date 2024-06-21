import os
imgs = os.listdir()

for n, img in enumerate(imgs):
    if img=='bg.jpg':
        pass
    else:
        os.rename(img,f'{n}.jpg')
