var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;

var TAPS_COLLECTION = "taps";

var app = express();
app.use(bodyParser.json());

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

// Connect to the database before starting the application server.
mongodb.MongoClient.connect(process.env.MONGODB_URI, function (err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = database;
  console.log("Database connection ready");

  // Initialize the app.
  var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});

// TAPS API ROUTES BELOW

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

/*  "/api/taps"
 *    GET: finds all taps
 *    POST: creates a new tap

  {
    "_id": <ObjectId>,
    "name": <string>,
    "beer": { // or <beer>
      "name": <string>,
      "brewery": <string>
      "url": <uri>,
      "abv": <number>,
      "ibu": <number>,
      "description": <string>
    }
  }
*/
app.get("/api/taps", function(req, res) {

 db.collection(CONTACTS_COLLECTION).find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get contacts.");
    } else {
      res.status(200).json(docs);
    }
  });
});

app.post("/api/taps", function(req, res) {
    var newTap = req.body;
     if (!req.body.name) {
      handleError(res, "Invalid user input", "Must provide a name.", 400);
    }

    db.collection(CONTACTS_COLLECTION).insertOne(newTap, function(err, doc) {
      if (err) {
        handleError(res, err.message, "Failed to create new tap.");
      } else {
        res.status(201).json(doc.ops[0]);
      }
    });
});

/*  "/api/tap/:id"
 *    GET: find tap by id
 *    PUT: update tap by id
 *    DELETE: deletes tap by id
 */

app.get("/api/taps/:id", function(req, res) {
});

app.put("/api/taps/:id", function(req, res) {
});

app.delete("/api/taps/:id", function(req, res) {
});


// BEERS API ROUTES

/*  "/api/beers"
 *    GET: finds all beers
 *    POST: creates a new tap
 */

/*
  {
      "_id": <ObjectId>,
      "name": <string>,
      "brewery": <string>
      "brewer_url": <uri>,
      "beer_url": <uri>,
      "abv": <number>,
      "ibu": <number>,
      "description": <string>
    }
*/
app.get("/api/beers", function(req, res) {
});

app.post("/api/beers", function(req, res) {
});

/*  "/api/tap/:id"
 *    GET: find tap by id
 *    PUT: update tap by id
 *    DELETE: deletes tap by id
 */

app.get("/api/beers/:id", function(req, res) {
});

app.put("/api/beers/:id", function(req, res) {
});

app.delete("/api/beers/:id", function(req, res) {
});



// BREWERIES API ROUTES

/*  "/api/breweries"
 *    GET: finds all brewries
 *    POST: creates a new brewery
 */

/*
  {
      "_id": <ObjectId>,
      "name": <string>,
      "website": <string>
    }
*/
app.get("/api/breweries", function(req, res) {
});

app.post("/api/breweries", function(req, res) {
});

/*  "/api/breweries/:id"
 *    GET: find brewery by id
 *    PUT: update brewery by id
 *    DELETE: deletes brewery by id
 */

app.get("/api/breweries/:id", function(req, res) {
});

app.put("/api/breweries/:id", function(req, res) {
});

app.delete("/api/breweries/:id", function(req, res) {
});
