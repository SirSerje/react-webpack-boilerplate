# Fresh React Webpack Boilerplate

Exhaustive template for react webpack inspired with [FerJSsilva/webpack-4-react-boilerplate](https://github.com/FerJSsilva/webpack-4-react-boilerplate)

CircleCI: [![CircleCI](https://circleci.com/gh/SirSerje/react-webpack-boilerplate.svg?style=svg)](https://circleci.com/gh/SirSerje/react-webpack-boilerplate) Checks if npm can execute `install`, `test` & `build` commands properly.


## Motivation
Finding a universal configuration for webpack is sometimes difficult. Tutorials are limited by few extensions, like CSS or prettier / etc. This repo called to close all needs with React Boilerplate. This boilerplate doesn’t solve too complex cases (tricky compilation / typescript support / extra optimisations), but in future I will try to improve this. If you looking for template for common react app - this template is you choice.

## Prerequisites:
* `node` v10.18.1 (at least, project tested on this version)
* `npm` or `yarn`


## Available Commands: 
* `yarn start` - run project on local machine with dev env
* `yarn build` - create optimized build with prod env
* `yarn analyse` - runs webpack bundle analyzer to discrover deps size
* `yarn test` - runs jest
* `yarn test:coverage` - runs jest and collect code coverage
* `yarn start:reload` - not discoverable yet
* `yarn start:style` - not discoverable yet

## What’s in case:
* React 16.13+ ⚛️
* Webpack (build analyzer included)📦
* CSS, Sass / Less
* Hot Module Reload, React Hot Reload 🔥
* eslint (lints through Babel, configured for dev env) 🖊️
* Jest, Enzyme 🃏
* All deps are fresh 🥬(24.03.2020)

## What about static typization: 
Configuration already included. Please, take a look onto .babelrc.js, .flowconfig, .eslintrc.js. These
files has commented functionality to work properly with flow. Also, src/components/App.jsx has example 
flow implementation. Just uncomment functionality and satisfy :) Do not forget setup your IDE 
to develop correctly (Webstorm : 'Settings' > 'Language and Frameworks' > 'JavaScript' > set language version to flow)

Please give create issue on feature request if you need TypeScript boilerplate.

## What will be added:
* style lint
* CI validation ✅
* Docker build 
* chunk splitting 
* lazy loading
* You can add your suggestions in the [issues](https://github.com/SirSerje/react-webpack-boilerplate/issues) or [pull request](https://github.com/SirSerje/react-webpack-boilerplate/pulls) page



## Troubleshooting & FAQ:
> Any questions about eslint / prettier:

My solution based on approach when error (not warning type) means some code issue which not asseptable. So in this way eslint (runs through babel) blocks runtime (in dev mode). (!) please, add all your preferable rules to eslint config. Prettier is good to solve syntax issues, but I prefer to know more, than losen space in end of the line.

> I’ve tried to add `react-toolbox`, but app is crashed. What’s wrong? 

React toolbox http://react-toolbox.io/#/ is good UI toolkit library, but it hasn’t update more than 2 years https://github.com/react-toolbox/react-toolbox/issues/1787. It based on webpack 2.2+ and requires additional postCSS configuration on your’s project side. If you definitely need to use it, please do not use THIS repo, otherwise try to use another use kit (like react-bootstrap or react-material-ui)

> Im trying to install dependencies, but I received error with `node-sass` / `node-gyp`, what should I do?

First at all take a look at troubleshooting section https://github.com/nodejs/node-gyp and https://github.com/sass/node-sass (this repos uses not only JS code, so issues on may differ on platforms)

> Can I use this template for docker build?

You can try to put this build in docker, but this option is not tested for this time.

> My dist folder doesn't refresh after each build

CleanWebpackPlugin was removed to minimize package. Potentially you can receive this bug if your shell
do not support `rm -rf` command (windows).


Do not hasitate! Add issues, PR's, feature requests in the [issues](https://github.com/SirSerje/react-webpack-boilerplate/issues) or [pull request](https://github.com/SirSerje/react-webpack-boilerplate/pulls) page
