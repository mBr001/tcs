#!/usr/bin/python3

import numpy as np  #   data types

import sys
import os
import time
import serial

ser = serial.Serial("/dev/serial0")
ser.baudrate = 115200

def sendSerial (message):
    message = [chr(i) for i in message]     # convert to integers
    message = ''.join(message)
    print(message)
    ser.write(message)
    return

if __name__ == '__main__':
    command = [0x10]    #    Set all motors
    command.append(0x00)
    command.append(0x40)
    command.append(0xC0)
    command.append(0x7F)
    command.append(0x0D)
    command.append(0x0A)
    sendSerial(command)
