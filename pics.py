# -*- Encoding: utf-8 -*-

from httplib2 import Http
import os
import re

h = Http()

url_home = 'http://2479.com'
path = 'public'

ptn = re.compile( ur'<img.*?src=".*?(/images/.*?)"', re.DOTALL )
pic_ret = []

for f in os.listdir(path):
    filename = path + '/' + f
    text = ''
    with open(filename) as fp:
        text = ''.join(fp.readlines()).decode('utf8')
    
        for item in ptn.findall(text):
            pic_url = url_home + item
                pic_ret.append(pic_url)


if 'images' not in os.listdir('./'):
    os.makedirs('images')


for purl in pic_ret:
    rs,content = h.request(purl)
    ret_path = os.path.basename(purl)
    if ret_path not in os.listdir('./images'):
        with open('images'+'/'+ ret_path, 'wb') as f:
            f.write(content)
