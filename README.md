# Web-API-Client-Server-Scoping

## How To Install
1. client : `cd client && npm install`
2. server : `cd server && npm install`

## How To Run App
1. client : `gulp`
2. server : `npm start`

## Dependencies
1. express framework
2. cors
3. bootstrap
4. jQuery
5. gulp
6. browser-sync



## End Point API Routes
Default development host and port : http://localhost:3000

| Routes | HTTP | Action |
|--------|------|--------|
| /api/meals | GET | get 1 random meals |

## package.json (server)

```
{
  "name": "server",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "node ./bin/www"
  },
  "dependencies": {
    "body-parser": "~1.15.1",
    "cookie-parser": "~1.4.3",
    "cors": "^2.8.1",
    "debug": "~2.2.0",
    "express": "~4.13.4",
    "jade": "~1.11.0",
    "morgan": "~1.7.0",
    "serve-favicon": "~2.3.0"
  }
}

```

## package.json (client)

```
{
  "name": "client",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "bower": "^1.8.0",
    "browser-sync": "^2.17.5",
    "gulp": "^3.9.1",
    "purl": "^1.0.4"
  }
}
```

## File App's Structure

```
.
├── README.md
├── client
│   ├── bower.json
│   ├── gulpfile.js
│   ├── index.html
│   ├── js
│   │   ├── purl.js
│   │   └── script.js
│   ├── lib
│   │   ├── bootstrap
│   │   └── jquery
│   ├── meals.html
│   ├── package.json
│   └── skills.html
└── server
    ├── app.js
    ├── bin
    │   └── www
    ├── controller
    │   └── index.js
    ├── package.json
    ├── public
    │   ├── images
    │   ├── javascripts
    │   └── stylesheets
    ├── routes
    │   └── index.js
    └── views
        ├── error.jade
        ├── index.jade
        └── layout.jade

14 directories, 17 files
```


## Contributor
Ken Duigraha Putra &copy; 2016

## License
MIT
