#!/usr/bin/env sh

set -e

npm run build

cd dist

cp index.html 404.html

git init 
git add .
git commit -m "deploy to gitpage"

git push -f git@github.com:your-repo.git master:gh-pages

cd -
