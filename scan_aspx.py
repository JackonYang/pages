# -*- Encoding: utf-8 -*-
import requests
import os
import re

def find_aspx(html_name):
    with open(html_name, 'rb') as f:
        content = ''.join(f.readlines())

    ptn = re.compile(r'<a [^>]*?href="([^>]*?)\.aspx">')
    return ptn.findall(content)

urls = []

for f in os.listdir('public/'):
    if f.endswith('.html'):
        urls.extend(find_aspx(os.path.join('public', f)))

for i in set(urls):
    print i
