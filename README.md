## Template customisation

__NOTE: Do not edit contents of the `dist` folder, as this will be overwritten by the build process. If possible, follow the instructions bellow. If not, simply edit & save the `src/scss/custom.scss` file__

#### download 
```BASH
git clone git@github.com:make-it-social/monitors.git
```

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


When running the live server, all edits to src folder will automatically update on the page. Add all css overides to custom.scss, you can add scss or just plain css, it's completely agnostic. If the development server should encounter invalid css, it maty stop. Simply restart the server with 'gulp serve'.

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