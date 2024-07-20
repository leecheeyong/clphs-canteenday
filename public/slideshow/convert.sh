#!/bin/bash

if [ $# -ne 0 ]; then
	PARAMS=$@;
fi

cd $(pwd)

shopt -s nullglob nocaseglob extglob

for FILE in *.@(webm); do 
    ffmpeg -i "$FILE" -q "75" -an "${FILE%.*}".mp4;
done