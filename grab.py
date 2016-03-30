# -*- Encoding: utf-8 -*-
import requests
import os
import re


url_home = 'http://2479.com/'


def request(url, name):
    if os.path.exists(name):
        print 'ignore %s' % url
        return

    print 'downloading %s' % url
    r = requests.get(url)
    content = r.text.encode(r.encoding or 'utf8')
    with open(name, 'wb') as f:
        f.write(content)
    return content


def request_img(url, name):
    if os.path.exists(name):
        print 'ignore %s' % url
        return

    print 'downloading %s' % url
    r = requests.get(url)
    content = r.content
    with open(name, 'wb') as f:
        f.write(content)
    return content


def download_page(url, name):
    c = request(url, name)  # html

    if c is None:
        with open(name, 'rb') as f:
            c = ''.join(f.readlines())

    links = find_css(c) + find_js(c)

    for link in links:
        try:
            if link.startswith('/'):
                link = link[1:]
                link_url = os.path.join(url_home, link)
            else:
                link_url = os.path.join(url, link)

            name = os.path.join('public', link)
            if name.find('?') != -1:
                name = name[:name.find('?')]
            dirname = os.path.dirname(name)
            if not os.path.exists(dirname):
                print 'mkdir -p %s' % dirname
                os.makedirs(dirname)
            request(link_url, name)
        except Exception as e:
            print e
            print link

    links = find_img(c)
    for link in links:
        try:
            if link.startswith('/'):
                link = link[1:]
                link_url = os.path.join(url_home, link)
            else:
                link_url = os.path.join(url, link)

            name = os.path.join('public', link)
            if name.find('?') != -1:
                name = name[:name.find('?')]
            dirname = os.path.dirname(name)
            if not os.path.exists(dirname):
                print 'mkdir -p %s' % dirname
                os.makedirs(dirname)
            request_img(link_url, name)
        except Exception as e:
            print e
            print link




def find_css(content):
    ptn = re.compile(r'<link [^>]*href="([^"]+)"[^>]*>')
    return ptn.findall(content)


def find_js(content):
    ptn = re.compile(r'<script [^>]*src="([^"]+)"[^>]*>')
    return ptn.findall(content)


def find_img(content):
    ptn = re.compile(r'<img [^>]*src="([^"]+)"[^>]*>')
    return ptn.findall(content)


if __name__ == '__main__':
    path = 'public'
    if not os.path.exists(path):
        os.makedirs(path)

    # request home page
    # home_name = os.path.join(path, 'index.html')
    # download_page(url_home, home_name)

    url = 'http://2479.com/HopeHome.aspx'
    name = os.path.join(path, 'HopeHome.html')
    download_page(url, name)
