## Template customisation

The monitors page uses [material design lite](http://www.getmdl.io/) for templating, and can use [material icons](https://www.google.com/design/icons/) or any icons from [fontello.com](http://fontello.com/) if needed.

__NOTE: Do not edit contents of the `dist` folder, as this will be overwritten by the build process. If possible, follow the instructions bellow. If not, simply edit & save the `src/scss/custom.scss` file__

#### download 
Use the command line or Github desktop app.
```BASH
git clone git@github.com:make-it-social/monitors.git
```

Then from the command line. 
#### Install
```BASH
npm install

# if you don't have it already
npm install -g gulp
```

#### Launch live server
```BASH
gulp serve
```


When running the live server, all edits to src folder will automatically update on the page. Add all css overides to custom.scss, you can add scss or just plain css, it's completely agnostic. If the development server should encounter invalid css, it maty stop. Simply restart the server with 'gulp serve'. All css is compiled and vendor specific prefixes are automatically added, so you can make full use of HTML5 & CSS3 native features. 

#### To save your edits.
```BASH
git add --all 
git commit -m "Your commit message here"
```

#### Push edits to master branch
```BASH
git push origin master
```

#### Push edits to live page
```BASH
git push origin master:gh-pages
```