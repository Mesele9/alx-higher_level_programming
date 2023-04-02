#!/usr/bin/python3
"""
    Python script that takes 2 arguments in order to
    list 10 commits froma repo.
"""
import requests
import sys

if __name__ == "__main__":

    repo_name = sys.argv[1]
    repo_owner = sys.argv[2]

    url = f"https://api.github.com/repos/{repo_owner}/{repo_name}/commits"
    resp = requests.get(url)

    try:
        json_resp = resp.json()
        for commit in json_resp[:10]:
            print(f"{commit['sha']}: {commit['commit']['author']['name']}")
    except ValueError:
        print("Not a valid JSON")
