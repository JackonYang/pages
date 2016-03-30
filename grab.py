# -*- Encoding: utf-8 -*-
import requests
import os
import re


def request(url, name):
    print 'downloading %s' % url
    r = requests.get(url)
    content = r.text.encode(r.encoding or 'utf8')
    with open(name, 'wb') as f:
        f.write(content)
    return content


def download_page(url, name):
    c = request(url, name)  # html

    links = find_css(c) + find_js(c)

    for link in links:
        link_url = os.path.join(url, link)

        name = os.path.join('public', link)
        if name.find('?') != -1:
            name = name[:name.find('?')]
        dirname = os.path.dirname(name)
        if not os.path.exists(dirname):
            print 'mkdir -p %s' % dirname
            os.makedirs(dirname)

        request(link_url, name)


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

    # request home page
    home_name = os.path.join(path, 'index.html')
    download_page(url_home, home_name)
