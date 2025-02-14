# NTS Radio Player

A simple Electron app to play NTS Radio on your desktop.

## Installation
Clone the repo and install dependencies:
```sh
npm install
npm start
```

## Packaging
To build the app:
```sh
npx electron-packager . nts-linux --platform=linux --arch=x64 --overwrite
```
This will generate a folder like nts-linux-linux-x64/ containing the executable.