#!/bin/bash

apt-get update
apt-get install -y pandoc

mkdir -p dist

pandoc index.md \
  -o dist/index.html \
  --css=index.css \
  -s \
  -M title="Purushottam"
