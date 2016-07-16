# DROPIT ui challenge

## Installations & Scripts
* Install and update packages: `npm install` from root folder.
* Run server on local code (/src folder): `npm start`
* Run server on production code (/dist folder): `npm run build`

###package.json

| **Script** | **Description** |
|----------|-------|
| start | Runs tests, lints, starts dev webserver, and opens the app in your default browser. |
| lint:tools | Runs ESLint on build related JS files. (eslint-loader lints src files via webpack when `npm start` is run) |
| build | Bundles all JavaScript using webpack and writes it to /dist. |
| test | Runs tests (files ending in .spec.js) using Mocha & Istanbul and outputs results to the command line with a summary report. |
| test-watch| Run tests and watches all files so tests are re-run upon save.

