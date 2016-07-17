# Log service

### How to run
* `npm install`
* Install sequelize-cli.
* Setup the config.js file and make sure the database setting are correct and running.
* Run `node_modules/.bin/sequelize db:migrate`
* Run `npm start` to start server (port 4556)

###Available API's:

```
GET /logs
```
Return all stored log messages.

```
POST /logs, body: {severity, content}
```
Create a new LogMessage object with the received values.

```
GET /logs/:id
```
Return the given LogMessage object details.

```
GET /latest
```
Return the lastest LogMessage object added.