#!/bin/bash
# Förkompilerar alla .jsx-filer till dist/app.js. Kör efter varje .jsx-ändring.
cd "$(dirname "$0")" || exit 1
mkdir -p dist
osascript -l JavaScript build.js
