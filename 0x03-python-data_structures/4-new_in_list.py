#!/usr/bin/python3
# 4-new_in_list.py

def new_in_list(my_list, idx, element):
    """Replace an element in a list at a specific position without
    modifying the original list"""

    new_list = my_list.copy()
    if idx > 0 and idx < len(my_list) - 1:
        new_list[idx] = element
    return new_list
