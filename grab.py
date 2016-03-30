# -*- Encoding: utf-8 -*-
import requests


def download(url, name):
    r = requests.get('http://2479.com/')
    with open(name, 'wb') as f:
        f.write(r.text.encode(r.encoding))


home = 'http://2479.com/'

download(home, 'index.html')
