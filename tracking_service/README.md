# Tracking service

### How to run
* `npm install`
* Install sequelize-cli.
* Setup the config.js file and make sure the database setting are correct and running.
* Run `node_modules/.bin/sequelize db:migrate`
* Run `npm start` to start server (port 4555)

###Available API's:

```
GET /coordinates
```
Return all stored coordinates.

```
POST /coordinates, body: {lat, lng}
```
Create a new Coordinate object with the lat & lng received values.

```
GET /coordinates/:id
```
Return the given Coordinate object details.

```
GET /latest
```
Return the lastest Coordinate object added.