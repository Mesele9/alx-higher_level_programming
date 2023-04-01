#!/usr/bin/python3
import urllib.request
import sys


url = sys.argv[1]
request = urllib.request.Request(url)
with urllib.request.urlopen(request) as data:
    print(data.getheader('X-Request-Id'))
