#!/usr/bin/python3
"""The module 1-square contains a class Squarethat define
a square private instance attribut, size"""


class Square:
    """A class that defines a square by private instance attribute, size"""
    def __init__(self, size=0):
        """Initialization of class with the size parameter"""
        self.__size = size
