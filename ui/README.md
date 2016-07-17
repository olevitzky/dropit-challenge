# DROPIT ui challenge

## Installations & Scripts
* Install and update packages: `npm install` from root folder.
* Run server on local code (/src folder): `npm start` (port 4557)
* Run server on production code (/dist folder): `npm run build`

###Available routes:

* /map - Display a Google map with a location marker while its data keep being fetch via the Tracking service. The map will change the view when a new location is found.
* /logs - Display all the logs which exists on the Logs service. The scroll view will update when a new message is received.

###package.json

| **Script** | **Description** |
|----------|-------|
| start | Runs tests, lints, starts dev webserver, and opens the app in your default browser. |
| lint:tools | Runs ESLint on build related JS files. (eslint-loader lints src files via webpack when `npm start` is run) |
| build | Bundles all JavaScript using webpack and writes it to /dist. |
| test | Runs tests (files ending in .spec.js) using Mocha & Istanbul and outputs results to the command line with a summary report. |
| test-watch| Run tests and watches all files so tests are re-run upon save.

