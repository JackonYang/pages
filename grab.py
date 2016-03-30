# -*- Encoding: utf-8 -*-
import requests
import os
import re


def download(url, name):
    r = requests.get('http://2479.com/')
    with open(name, 'wb') as f:
        f.write(r.text.encode(r.encoding))


def find_css(content):
    return ['css']


if __name__ == '__main__':
    url_home = 'http://2479.com/'
    path = 'public'
    if not os.path.exists(path):
        os.makedirs(path)

    # download home page
    home_name = os.path.join(path, 'index.html')
    # download(url_home, home_name)

    with open(home_name, 'rb') as f:
        c = ''.join(f.readlines())

    links = find_css(c)
    print links
