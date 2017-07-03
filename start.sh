#!/bin/bash

command -v yarn >/dev/null 2>&1 || { echo >&2 "Yarn is required to run this script, see the README for the manual method or install at https://yarnpkg.com"; exit 1; }

cd public
yarn
yarn build
cd ..
yarn
yarn start
