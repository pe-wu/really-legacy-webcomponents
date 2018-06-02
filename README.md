# really legacy webcomponents
This example aims to run on an outdated Android Browser/Webview, because some users don't ever update their phones.
Especially, it will work when wrapped with Apache Cordova at Android 5.0 Emulator (Chrome 37). Yay! 🎉

## Motivation
Don’t even get me started on build times, when the only environment, where you can reproduce your bugs is the Android Emulator... and, of course, compatibility!

## Installation
`npm install` to get all required node packages

## Build
The app uses [webpack](https://webpack.js.org/) to get the Polymer's [lit-element](https://github.com/Polymer/lit-element) running.
- `npm run build` generates uglified JS
- `npm run dev` generates non-uglified JS (and copies sourcemaps of polyfills too)
- `npm run wds` turns the webpack-dev-server on @ localhost:9000, you can debug the page in any modern browser too! (thanks to [custom-elements-es5-adapter.js](https://github.com/webcomponents/webcomponentsjs#custom-elements-es5-adapterjs)) 

## Reference machine

User-agent of the reference emulator: `Mozilla/5.0 (Linux; Android 5.0.2; Android SDK built for x86_64 Build/LSY66K) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/37.0.0.0 Mobile Safari/537.36`

The page probably works @ Android 4.4.4.

Keywords: webcomponents, webview, old, cordova, compatibility, lollipop 
