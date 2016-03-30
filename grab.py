# -*- Encoding: utf-8 -*-
import requests
import os
import re


def download(url, name):
    r = requests.get(url)
    print r.status_code
    print r.encoding
    with open(name, 'wb') as f:
        f.write(r.text.encode(r.encoding or 'utf8'))


def download_rel(root, rel):
    url = os.path.join(root, rel)

    rel = os.path.join('public', rel)
    if rel.find('?') != -1:
        name = rel[:rel.find('?')]
    else:
        name = rel
    print url, name
    download(url, name)


def find_css(content):
    ptn = re.compile(r'<link[^>]+href="([^"]+)"[^>]+\/>')
    return ptn.findall(content)


def find_js(content):
    ptn = re.compile(r'<script type="text/javascript" src="([^"]+)">')
    return ptn.findall(content)


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
    for link in links:
        download_rel(url_home, link)

    links = find_js(c)
    for link in links:
        download_rel(url_home, link)
