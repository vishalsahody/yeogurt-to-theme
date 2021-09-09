# Yeogurt to Theme
THe aim of this project is to provide a Frontend Framework that can be easily extended to build Static websites, App and Themes. This project started as a mean to easily build Drupal theme.

## How to use?
Once checkouted you need to set the path where the assets will be copied across in the `configurations.json`. If you wish to also copy the assets to a remote location that support SFTP, you should first enable `"copyacross": true` in the `configurations.json` and define the remote path in the same file. You will also need to make a copy of the `credentials.blank.json` and rename it `credentials.json`. In the `credentials.json` file you will define the SFTP credentials.

With the configurations done, run `npm i` (you need to have node.js installed). The framework has been tested on node `14.17.6`. If everything installed successfully you can run `gulp serve` and start coding.

As the name suggest, this framework uses `yeogurt` and more information about that here [generator-yeogurt@3.1.2](https://github.com/larsonjj/generator-yeogurt).


## Technologies used

JavaScript

- [Browserify](http://browserify.org/)with ES6/2015 support through [Babel](https://babeljs.io/)
- [Node](https://nodejs.org/)

Styles

- [Sass](http://sass-lang.com/) via ([node-sass](https://github.com/sass/node-sass))

Markup

- [Pug](https://pugjs.org/api/reference.html)

Optimization

- [Imagemin](https://github.com/imagemin/imagemin)
- [Uglify](https://github.com/mishoo/UglifyJS)

Server

- [BrowserSync](http://www.browsersync.io/)

Linting

- [ESlint](http://eslint.org/)

Automation

- [Gulp](http://gulpjs.com)

Code Management

- [Editorconfig](http://editorconfig.org/)
- [Git](https://git-scm.com/)

## Automated tasks

This project uses [Gulp](http://gulpjs.com) and npm scripts (i.e. `npm run...`) to run automated tasks for development and production builds.
The tasks are as follows:

`npm run build`: Build a production version of your site/app

`npm run serve`: Compiles preprocessors and boots up development server
`npm run serve -- --open`: Same as `npm run serve` but will also open up site/app in your default browser
`npm run serve:prod`: Same as `npm run serve` but will run all production tasks so you can view the site/app in it's final optimized form

`npm test`: Lints all `*.js` file in the `source` folder using eslint

**_Adding the `-- --debug` option to any npm script command to display extra debugging information (ex. data being loaded into your templates)_**
