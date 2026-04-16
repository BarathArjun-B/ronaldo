#!/bin/bash
cd /Users/baratharjun/Desktop/full_stack/website/cr7

git init
git branch -M main

git remote remove origin 2>/dev/null
git remote add origin https://github.com/BarathArjun-B/ronaldo.git

git add .
git commit -m "Initial commit of cr7"

for i in {1..10}
do
  echo "<!-- Auto update $i: $(date) -->" >> README.md
  git add README.md
  git commit -m "docs: Automate update $i in README.md"
done

git push -u origin main
