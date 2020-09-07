# Hitcounter
A counter that triggers every time you hit any key.

## Dependencies
This require mongodb up and running.  You can create a db and a collection below.

## Usage
pull this down.
Get the dependencies:
$npm init
Start the server with
$npm run dev

The server will start up on port 4000 by default.
You can use these targets:

Reset the counter to 0
localhost:4000/reset

Create a db and collection 
localhost:4000/create

If your db gets multiple records for whatever reason, you can delete by id as well.  I didn't want that exposed in the api so you can edit /controllers/justdid.controller.js and change line 80 from the zero shown below to an id (I usually get them from mongo shell).
JustdidModel.findByIdAndRemove('0')

## Credit
Thanks:
[Tutorial for starting code](https://www.javaguides.net/2020/02/nodejs-express-and-mongodb-restful-crud-api-tutorial.html)
