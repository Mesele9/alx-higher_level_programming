#!/usr/bin/python3
# 0-print_list_integer.py

def print_list_integer(my_list=[]):
    """A function that prints all the integers of a list"""
    for i in range(len(my_list)):
        print("{}".format(my_list[i]))
