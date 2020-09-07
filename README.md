# Hitcounter version 1.0
A counter that triggers every time you hit any key.<br>

## Dependencies
This requires mongodb up and running.  You can create a db and a collection using the /create target noted below.<br>
I found I need to have node > version 10 to get this all running.
<br>
## Usage
pull this down.<br>
Get the dependencies:<br>
$npm init<br>
Start the server with<br>
$npm run dev<br>

The server will start up on port 4000 by default.<br>
You can use these targets:<br>

Reset the counter to 0<br>
localhost:4000/reset<br>

Create a db and collection <br>
localhost:4000/create<br>

If your db gets multiple records for whatever reason, you can delete by id as well.  I didn't want that exposed in the api so you can edit /controllers/justdid.controller.js and change line 80 from the zero shown below to an id (I usually get them from mongo shell).
JustdidModel.findByIdAndRemove('0')
<br>
## Credits
Thanks!<br>
[Tutorial for starting code](https://www.javaguides.net/2020/02/nodejs-express-and-mongodb-restful-crud-api-tutorial.html)
