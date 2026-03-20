#!/bin/bash
apt-get update
apt-get install -y pandoc
pandoc index.md -o index.html --css=index.css -s -M title="Purushottam"
