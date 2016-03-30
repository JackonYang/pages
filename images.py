# -*- Encoding: utf-8 -*-
import requests
import os

url_home = 'http://2479.com/'

source = 'public/Css/image_url.txt'


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


if __name__ == '__main__':
    with open(source, 'rb') as f:
        for line in f.readlines():
            rel = line.strip()

            name = os.path.join('public', rel)
            url = os.path.join(url_home, rel)

            dirname = os.path.dirname(name)
            if not os.path.exists(dirname):
                print 'mkdir -p %s' % dirname
                os.makedirs(dirname)

            request_img(url, name)
