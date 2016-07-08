Angular2Simple
===================

`Angular2Simple` is a simple seed project for Angular 2 using WebPack. I needed a seed project to seed the boilerplate code for my Angular 2 projects, and the only generators and seeds I could find were heavy and bulky with 50 plugins I would never use. So I decided to make one on my own from scratch.

Currently it is really basic and will get you up and running with Angular 2 in no time. The goal was to add the minimal amount of things necessary to make a workflow for Angular 2 development. Currently it has the following:

 1. Webpack for package bundling and typescript compilation.
 2. Angular Router support.
 3. LiveReload
 4. Simple `server.js` http server that works well with angular, and redirects 404 to `index.html` so that html5 routing works.
 5. Default components.

After cloning the repository, just run `npm install` to install all the dependencies & `typings install` to install all the typescript typings. Make sure typings is installed first, which can be done by `npm install -g typings`.

Once you have everything in place, you can run `webpack` on the directory to run webpack which runs in watch mode by default with livereload, meaning every time you make a change, webpack will compile automatically and livereload will refresh your browser page if you have the plugin installed. Make sure you have webpack installed globally as well, which can be done using `npm install -g webpack`.

The built in web server will run in port 3000, and can be accessed at `http://localhost:3000`.

Feedback, issues and pull requests are welcome.