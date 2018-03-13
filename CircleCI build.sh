#!/bin/bash -ex
#--------------

# Copy CircleCI configuration to "Output" directory
cp circle.yml Output

# Setup git
git config user.email "CircleCI@bot"
git config user.name "CircleCI"

# Remove changes from current branch
git checkout -f
git checkout master

# Make sure that local master matches with remote master
# CircleCI merges made changes to master, so need to reset it
git fetch origin master
git reset --hard origin/master

# Gets all needed files from "Output" directory and pushes them to master branch
mv Output /tmp/
rm -rf * .bundle .sass-cache
mv /tmp/Output/* .
git add -A .
git commit --author="Ekidoxx <Ekidoxx@users.noreply.github.com>" -m "Copy files generated from \"source\" branch"
git push origin master
