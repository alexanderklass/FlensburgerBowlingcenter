require("dotenv").config();
const dbPassword = process.env.DB_PASSWORD;
const sessionSecret = process.env.SESSION_SECRET;
const sessionKey = process.env.SESSION_KEY
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const cors = require("cors");
const server = express();
const mysql = require("mysql");
const bcrypt = require("bcrypt");
const saltRound = 10;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: dbPassword,
  database: "bowlingDB",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("connected to db");
});

server.use(
  cors({
    origin: ["https://www.flensburger-bowlingcenter.de/"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
server.use(cookieParser());
server.use(express.json());
server.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
server.use(
  session({
    key: sessionKey,
    secret: sessionSecret,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
    },
  })
);

server.get("/", (req,res) =>{
  res.send('<h1>Hello World</h1>');
})

server.post("/register", (req, res) => {
  const userName = req.body.userName;
  const userPassword = req.body.userPassword;
  const sqlInsert =
    "INSERT INTO user_data (userName, userPassword) VALUES (?,?)";
  bcrypt.hash(userPassword, saltRound, (err, hash) => {
    err
      ? console.log(err)
      : db.query(sqlInsert, [userName, hash], (err, result) => {
          err ? res.send({ err: err }) : res.send(result);
        });
  });
});

server.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false, user: req.session.user });
  }
});

server.post("/login", (req, res) => {
  const userName = req.body.userName;
  const userPassword = req.body.userPassword;

  const sqlSelect = "SELECT * FROM user_data WHERE userName = ?";
  db.query(sqlSelect, [userName], (err, result) => {
    if (err) {
      res.send({ err: err });
    }

    if (result.length > 0) {
      bcrypt.compare(userPassword, result[0].userPassword, (err, response) => {
        if (err) {
          res.send(err);
        }
        if (response) {
          req.session.user = result;
          res.send(result);
        } else {
          res.send({ message: "Falsches Passwort oder Benutzername!" });
        }
      });
    } else {
      res.send({ message: "Es existiert kein Benutzer!" });
    }
  });
});

// Lanedata SQL Requests
server.post("/portal", (req, res) => {
  const customerName = req.body.customerName;
  const laneOne = req.body.laneOne;
  const laneTwo = req.body.laneTwo;
  const startTime = req.body.startTime;
  const endTime = req.body.endTime;
  const color = req.body.color;
  const dateTime = req.body.date;
  const customerNumber = req.body.customerNumber;
  const workerName = req.body.workerName;
  const customerNotes = req.body.customerNotes;
  const payedStatus = req.body.payedStatus;
  const SQLSelect =
    "SELECT * FROM lane_data WHERE dateTime = ? AND (laneOne <= ? AND laneTwo >= ?) AND (startTime <= ? AND endTime >= ?)";
  const SQLInsert =
    "INSERT INTO lane_data (customerName, laneOne, laneTwo, startTime, endTime, color, dateTime, customerNumber, workerName,customerNotes,payedStatus) VALUES (?,?,?,?,?,?,?,?,?,?,?)";
  db.query(
    SQLSelect,
    [dateTime, laneTwo, laneOne, endTime, startTime],
    (err, result) => {
      if (err) {
        console.log(err);
      } else if (result.length === 0) {
        db.query(
          SQLInsert,
          [
            customerName,
            laneOne,
            laneTwo,
            startTime,
            endTime,
            color,
            dateTime,
            customerNumber,
            workerName,
            customerNotes,
            payedStatus,
          ],
          (err, result) => {
            err ? res.send(err) : res.send({ message: "daten erfasst" });
          }
        );
      } else {
        res.send({ fehler: "kann nicht überschreiben" });
      }
    }
  );
});
server.get("/portal/:date", (req, res) => {
  const dateTime = req.params.date;
  const sqlSELECT = "SELECT * FROM lane_data WHERE dateTime = ?";
  db.query(sqlSELECT, [dateTime], (err, result) => {
    err ? res.send(err) : res.send(result);
  });
});

// Cookingnotes SQL Requests
server.post("/cookingNotes", (req, res) => {
  const cookingNotes = req.body.cookingNotesField;
  const date = req.body.date;
  const SQLSelect = "SELECT * FROM cooking_data WHERE date = ?";
  const SQLUpdate = "UPDATE cooking_data SET cookingNotes = ? WHERE date = ?";
  const SQLInsert =
    "INSERT INTO cooking_data (cookingNotes, date) VALUES (?,?)";
  db.query(SQLSelect, date, (err, result) => {
    if (err) {
      res.send(err);
    } else if (result.length > 0) {
      db.query(SQLUpdate, [cookingNotes, date], (err, result) => {
        err ? res.send(err) : res.send({success: "success update"});
      });
    } else {
      db.query(SQLInsert, [cookingNotes, date], (err, result) => {
        err ? res.send(err) : res.send({success: "success insert"});
      });
    }
  });
});
server.get("/cookingNotes/:date", (req, res) => {
  const date = req.params.date;
  const SQLSelect = "SELECT * FROM cooking_data WHERE date = ?";
  db.query(SQLSelect, [date], (err, result) => {
    result ? res.send(result) : res.send(err);
  });
});

// Cluproomnotes SQL Requests
server.post("/clupRoomNotes", (req, res) => {
  const clupRoomNotes = req.body.clupRoomNotesField;
  const date = req.body.date;
  const SQLSelect = "SELECT * FROM cluproom_data WHERE date = ?";
  const SQLUpdate = "UPDATE cluproom_data SET clupRoomNotes = ? WHERE date = ?";
  const SQLInsert =
    "INSERT INTO cluproom_data (cluproomNotes, date) VALUES (?,?)";
  db.query(SQLSelect, [date], (err, result) => {
    if (err) {
      res.send(err);
    } else if (result.length > 0) {
      db.query(SQLUpdate, [clupRoomNotes, date], (err, result) => {
        err ? res.send(err) : res.send({success: "success update"});
      });
    } else {
      db.query(SQLInsert, [clupRoomNotes, date], (err, result) => {
        err ? res.send(err) : res.send({success: "success insert"});
      });
    }
  });
});
server.get("/clupRoomNotes/:date", (req, res) => {
  const date = req.params.date;
  const SQLSelect = "SELECT * FROM cluproom_data WHERE date = ?";
  db.query(SQLSelect, [date], (err, result) => {
    result ? res.send(result) : res.send(err);
  });
});

//ExtraNotes SQL Request
server.post("/extraNotes", (req, res) => {
  const extraNotes = req.body.extraNotes;
  const date = req.body.date;
  const SQLSelect = "SELECT * FROM extra_data WHERE date = ?";
  const SQLUpdate = "UPDATE extra_data SET extraNotes = ? WHERE date = ?";
  const SQLInsert = "INSERT INTO extra_data (extraNotes, date) VALUES (?,?)";
  db.query(SQLSelect, [date], (err, result) => {
    if (err) {
      res.send(err);
    } else if (result.length > 0) {
      db.query(SQLUpdate, [extraNotes, date], (err, result) => {
        err ? res.send(err) : res.send({success: "success update"});
      });
    } else {
      db.query(SQLInsert, [extraNotes, date], (err, result) => {
        err ? res.send(err) : res.send({success: "success insert"});
      });
    }
  });
});
server.get("/extraNotes/:date", (req, res) => {
  const date = req.params.date;
  const SQLSelect = "SELECT * FROM extra_data WHERE date = ?";
  db.query(SQLSelect, [date], (err, result) => {
    result ? res.send(result) : res.send(err);
  });
});

//Delete Request
server.post("/delete", (req, res) => {
  const customerNumber = req.body.customerNumber;
  const customerName = req.body.customerName;
  const dateTime = req.body.date;
  const SQLDelete =
    "DELETE FROM lane_data WHERE customerNumber = ? AND customerName = ? AND dateTime = ?";
  db.query(
    SQLDelete,
    [customerNumber, customerName, dateTime],
    (err, result) => {
      if (err) {
        res.send(err);
      } else if (result) {
        res.send({ message: "gelöscht" });
      }
    }
  );
});

//Update Payment Request
server.post("/payment", (req, res) => {
  const customerName = req.body.customerName;
  const customerNumber = req.body.customerNumber;
  const dateTime = req.body.date;
  const payedStatus = req.body.payedStatus;
  const SQLUpdate =
    "UPDATE lane_data SET payedStatus = ? WHERE customerName = ? AND customerNumber = ? AND dateTime = ?";
  db.query(
    SQLUpdate,
    [payedStatus, customerName, customerNumber, dateTime],
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send({ message: "bezahlt" });
      }
    }
  );
});

//Update change lane
server.post("/changeLane/:date", (req, res) => {
  const laneOne = req.body.changeLaneOne;
  const laneTwo = req.body.changeLaneTwo;
  const dateTime = req.params.date;
  const customerName = req.body.customerName;
  const customerNumber = req.body.customerNumber;
  const SQLSelectFirst =
    "SELECT startTime, endTime FROM lane_data WHERE dateTime = ? AND customerName = ? AND customerNumber = ?";
  const SQLSelectSecond =
    "SELECT * FROM lane_data WHERE dateTime = ? AND (laneOne <= ? AND laneTwo >= ?) AND (startTime <= ? AND endTime >= ?) AND customerName != ? AND customerNumber != ?";
  const SQLUpdate =
    "UPDATE lane_data SET laneOne = ?, laneTwo = ? WHERE dateTime = ? AND customerName = ? AND customerNumber = ?";
  db.query(
    SQLSelectFirst,
    [dateTime, customerName, customerNumber],
    (err, result) => {
      if (err) {
        console.log(err);
      } else if (result) {
        db.query(
          SQLSelectSecond,
          [
            dateTime,
            laneTwo,
            laneOne,
            result[0].endTime,
            result[0].startTime,
            customerName,
            customerNumber,
          ],
          (err, result) => {
            if (err) {
              res.send(err);
              console.log(err);
            } else if (result.length === 0) {
              db.query(
                SQLUpdate,
                [laneOne, laneTwo, dateTime, customerName, customerNumber],
                (err, result) => {
                  if (err) {
                    console.log(err);
                    res.send(err);
                  } else if (result) {
                    res.send({ success: "lane wurde geupdated" });
                  }
                }
              );
            } else {
              res.send({ fehler: "second kein erfolg" });
            }
          }
        );
      } else {
        res.send({ message: "first kein erfolg" });
      }
    }
  );
});

//Update change time
server.post("/changeTime/:date", (req, res) => {
  const startTime = req.body.changeStartTime;
  const endTime = req.body.changeEndTime;
  const dateTime = req.params.date;
  const customerName = req.body.customerName;
  const customerNumber = req.body.customerNumber;
  const SQLSelectFirst =
    "SELECT laneOne, laneTwo FROM lane_data WHERE dateTime = ? AND customerName = ? AND customerNumber = ?";
  const SQLSelectSecond =
    "SELECT * FROM lane_data WHERE dateTime = ? AND (laneOne <= ? AND laneTwo >= ?) AND (startTime <= ? AND endTime >= ?) AND customerName != ? AND customerNumber != ?";
  const SQLUpdate =
    "UPDATE lane_data SET startTime = ?, endTime = ? WHERE dateTime = ? AND customerName = ? AND customerNumber = ?";
  db.query(
    SQLSelectFirst,
    [dateTime, customerName, customerNumber],
    (err, result) => {
      if (err) {
        console.log(err);
      } else if (result) {
        db.query(
          SQLSelectSecond,
          [
            dateTime,
            result[0].laneTwo,
            result[0].laneOne,
            endTime,
            startTime,
            customerName,
            customerNumber,
          ],
          (err, result) => {
            if (err) {
              res.send(err);
              console.log(err);
            } else if (result.length === 0) {
              db.query(
                SQLUpdate,
                [startTime, endTime, dateTime, customerName, customerNumber],
                (err, result) => {
                  if (err) {
                    console.log(err);
                    res.send(err);
                  } else if (result) {
                    res.send({ success: "lane wurde geupdated" });
                  }
                }
              );
            } else {
              res.send({ fehler: "second kein erfolg" });
            }
          }
        );
      } else {
        res.send({ message: "first kein erfolg" });
      }
    }
  );
});

server.listen(3001, () => {
  console.log("connected to server");
});
