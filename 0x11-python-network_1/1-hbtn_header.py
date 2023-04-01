#!/usr/bin/python3
import urllib.request
import sys

with urllib.request.urlopen(sys.argv[1]) as data:
    print(dict(data.headers).get("X-Request-Id"))
