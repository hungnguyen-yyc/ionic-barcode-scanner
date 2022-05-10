# ionic-barcode-scanner
- Make sure you have initial setup correctly https://ionicframework.com/docs/intro/environment
- Pull the repository to your local.
- Then run these to install required package globally
```
$ npm i -g native-run 
$ npm i -g cordova
```
- Then run this so that it can prepare the build for browser (you'll need to update the platform to whatever you want to run on)
```
$ ionic cordova build browser
```
- Then run
```
$ ionic serve --cordova --platform browser
```
