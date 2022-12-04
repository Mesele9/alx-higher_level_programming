#!/usr/bin/python3
# 3-infinite_add.py

if __name__ == '__main__':
    import sys

    count = len(sys.argv) - 1
    s = 0
    for i in range (count):
        s += int(sys.argv[i + 1])

    print(s)
