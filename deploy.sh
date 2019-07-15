#!/bin/bash

git config --global push.default simple

git remote add deploy ssh://deploy@165.22.68.209:/srv/git/cd.git

git push -f deploy HEAD:refs/heads/master
