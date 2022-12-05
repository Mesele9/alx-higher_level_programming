#!/usr/bin/python3
# 3-print_reversed_list_integer.py

def print_reversed_list_integer(my_list=[]):
    """A function that prints all integers of a list in reverse order."""
    for i in range((len(my_list)-1), -1, -1):
        print("{}".format(my_list[i]))