# -*- Encoding: utf-8 -*-
import requests
import os
import re

def find_img(css_name):
    with open(css_name, 'rb') as f:
        content = ''.join(f.readlines())

    ptn = re.compile(r'url\((.*?)\)')
    return ptn.findall(content)

pics = []

for f in os.listdir('.'):
    if f.endswith('.css'):
        pics.extend(find_img(f))

for i in set(pics):
    print i
