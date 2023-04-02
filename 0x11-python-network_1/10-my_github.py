#!/usr/bin/python3
""" a Python script that takes your GitHub credentials (username and password)
    and uses the GitHub API to display your id
"""
import requests
import sys

if __name__ == "__main__":
    
    username = sys.argv[1]
    password = sys.argv[2]

    url = "https://api.github.com/user"
    resp = requests.get(url, auth=(username, password))

    try:
        json_resp = resp.json()
        print(resp.json().get('id'))
    except ValueError:
        print("Not a valid JSON")
