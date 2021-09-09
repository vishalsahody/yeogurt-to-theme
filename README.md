# Yeogurt to Theme
THe aim of this project is to provide a Frontend Framework that can be easily extended to build Static websites, App and Themes. This project started as a mean to easily build Drupal theme.

## How to use?
Once checkouted you need to set the path where the assets will be copied across in the `configurations.json`. If you wish to also copy the assets to a remote location that support SFTP, you should first enable `"copyacross": true` in the `configurations.json` and define the remote path in the same file. You will also need to make a copy of the `credentials.blank.json` and rename it `credentials.json`. In the `credentials.json` file you will define the SFTP credentials.

With the configurations done, run `npm i` (you need to have node.js installed). The framework has been tested on node `14.17.6`. If everything installed successfully you can run `gulp serve` and start coding.

As the name suggest, this framework uses `yeogurt` and more information about that here [generator-yeogurt@3.1.2](https://github.com/larsonjj/generator-yeogurt).

## How to add font icons?
Under `src\typography\icons` there is a bunch of files. The most important one is the `selection.json` which is the font icons collection definition. This file is used on [icomoon](https://icomoon.io/app/#/select). After adding/substraction from the set you download a zip file which should be unzipped directly in `src\typography\icons`. Stop and re-run `gulp serve` just to make sure it copies everything accross.

## Todo
- [ ] Assets are not currently compiling on production build `gulp serve --production`
- [ ] Test on Drupal build
- [ ] Test on Wordpress build
- [ ] Test on Hybrid application build