require("dotenv").config();

const db = require("./db/connection");
const request = require("request-promise-native");
const express = require("express");
const cookieSession = require("cookie-session");
const bcrypt = require("bcryptjs");
const server = express();
const bodyParser = require("body-parser");
const database = require("./db/database");
const { array } = require("prop-types");

server.use(bodyParser.json());
server.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Change '*' to a specific domain if needed
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});


const PORT = 8080;
server.use(
  cookieSession({
    name: "session",
    keys: ["aj345", "dfh345"],
    // Cookie Options
    //maxAge: 24 * 60 * 60 * 1000 expire 24 hours
  })
);

server.get("/events", (req, res) => {
  db.query("SELECT * FROM events")
    .then((data) => {
      // Send the retrieved data as a JSON response
      res.json(data.rows);

      console.log('Data from the "events" table:', data.rows);
    })
    .catch((err) => {
      console.error("Error:", error);
      res.status(500).json({ error: "An error occurred" });
    });
});
server.get("/add_event", (req,res) =>{
  const event = {
    event_name: 'stargazing Campout22444',
    date: '2023-12-05',
    description: "Experience a magical night of camping and stargazing under the stars."
  };
  /*
   const event = {
    event_name: req.body.event_name,
    date: req.body.date,
    description: req.body.description
  };
  
  */
  database.add_event(event)
    .then((result) => {
      
        res.status(201).send("Event has been added Successfully");
      
    })
    .catch((err) => {
      console.error("Error:", err);
      res.status(500).json({ error: "An error occurred" });
    });

})

server.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    // checking if email and password is valid or not
    return res.status(400).send("please input valid email and password");
  }
  const values = [email, password];
  const query = `
  SELECT DISTINCT users.name as user, users.email as email,users.id as id, users.password as password
  FROM users
   
  WHERE users.email = $1 and password =$2
`;

  db.query(query, values)
    .then((result) => {
      if (result.rows.length === 0) {
        // User not found or incorrect credentials//
        res
          .status(401)
          .send(
            "Email or Password might be wrong. Please check and retry again"
          );
      } else {
        // we need redirect to home page
        res.json(result.rows.length);
      }
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).send("Internal Server Error");
    });
});
server.get("/users", (req, res) => {
  db.query("SELECT * FROM users")
    .then((data) => {
      // Send the retrieved data as a JSON response
      res.json(data.rows);

      console.log('Data from the "users" table:', data.rows);
    })
    .catch((err) => {
      console.error("Error:", err);
      res.status(500).json({ error: "An error occurred" });
    });
});

server.post("/sign_up", (req, res) => {
  const user = {
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
    password_confirmation: req.body.password_confirmation,
  };

  if (
    !user.email ||
    !user.password ||
    user.password != user.password_confirmation
  ) {
    // checking if email and password is valid or not
    return res
      .status(400)
      .send("please input valid email and password should match");
  }
  //check if the user already signup
  database.getUserWithEmail(user.email).then((users) => {
    console.log(users);
    if (!users) {
      return res.send({
        error: "A registration with this email already exist",
      });
    }
    //register new users
    database.signupUsers(user).then((result) => {
      if (result) {
        return res.status(201).send("User has been registered Successfully");
      }
    });
  });
});

server.get("/api/weather", (req, res) => {
  const fetchMyIP = function () {
    return request("https://api.ipify.org?format=json");
  };
  const fetchCoordsByIP = function (body) {
    const ip = JSON.parse(body).ip;
    console.log(ip);
    return request(`http://ipwho.is/${ip}`);
  };
  const weather_info = function (body) {
    const latitude = JSON.parse(body).latitude;
    const longitude = JSON.parse(body).longitude;

    return request(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relativehumidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,uv_index_clear_sky_max&timezone=auto`
    );
  };

  fetchMyIP()
    .then(fetchCoordsByIP)
    .then(weather_info)
    .then((data) => {
      console.log(JSON.parse(data));
      //console.log(data)

      res.send(data);
    });
});

server.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});