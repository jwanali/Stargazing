require("dotenv").config();

const db = require("./db/connection");
const request = require("request-promise-native");
const express = require("express");
const cookieSession = require("cookie-session");
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
const server = express();
server.use(bodyParser.json());
server.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);


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
      const message = {
        message: data.rows,
      };
      // Send the retrieved data as a JSON response
      res.json(message);

      console.log('Data from the "events" table:', data.rows);
    })
    .catch((err) => {
      const error = {
        err: err,
      };

      res.status(500).json(error);
    });
});

// server.get("/events/:category", (req, res) => {
  
//   const event_name = req.params.category
//   console.log(event_name,1)
  
//   db.query("SELECT * FROM events WHERE event_name = $1 ORDER BY date",[event_name])
//     .then((data) => {
//       const message = {
//         message: data.rows,
//       };
//       // Send the retrieved data as a JSON response
//       res.json(message);

//       console.log('Data from the "events" table:', data.rows);
//     })
//     .catch((err) => {
//       const error = {
//         err: err,
//       };

//       res.status(500).json(error);
//     });
// });

server.post("/events/add_event",(req, res) => {
  console.log(req.session.user_id);
  console.log(req.body.user_id)
  if (req.session.user_id == req.body.user_id) {
   const event = {
    event_name: req.body.event_name,
    date: req.body.date,
    description: req.body.description,
    user_id : req.body.user_id
  };
  console.log(event)
  
  
  database
    .add_event(event)
    .then((result) => {
      if (result === 1) {
        const message = {
          message: "Event has been added Successfully",
        };
        res.status(201).json(message);
      } else {
        const error = {
          error: "error faild to insert",
        };
        res.status(500).json(error);
      }
      
    })
    .catch((err) => {
      const error = {
        error: err,
      };
      res.status(500).json(error);
    });
  } else {
    const message = {
      message: "please login first",
    };
    res.status(201).json(message);

  }
  
});

server.get("/events/:id", (req, res) => {
  if (req.session.user_id) {
    const user_id = req.params.id;
    console.log(user_id)
    /** JOIN users_events ON $1 = users_events.user_id
  JOIN events ON events.id = users_events.event_id ; */
  
  db.query(`SELECT event_id, events. event_name , users.name as user_name, events.date, events.description FROM users_events  JOIN events ON  users_events.event_id = events.id JOIN users ON users.id = users_events.user_id  WHERE users_events.user_id = $1 `,[user_id])
    .then((data) => {
      const message = {
        message: data.rows,
      };
      // Send the retrieved data as a JSON response
      res.json(message);

      console.log('Data from the "events" table:', data.rows);
    })
    .catch((err) => {
      console.log(err)
      const error = {
        err: err,
      };

      res.status(500).json(error);
    });
  } else {
    const message = {
      message: "please login first",
    };
    res.status(201).json(message);
  }
  
});
server.post("/events/:id/delete", (req,res) => {
  if (req.session.user_id) {
    const user_id = req.session.user_id
    const event_id = req.params.id;
  database
    .delete_event(event_id, user_id)
    .then((result) => {
      if (result) {
        const message = {
          message: "Event deleted"
        };
        res.status(201).json(message);
      } else {
        const error = {
          error : `failed to delete`
        };
        res.status(500).json(error);
      }
      
    })
    .catch((err) => {
      const error = {
        error: err,
      };
      res.status(500).json(error);
    });
  } else {
    const message = {
      message: "please login first",
    };
    res.status(201).json(message);
  }
  
});
server.post("/events/:id/update", (req,res) => {
  if (req.session.user_id) {
    const event_id = req.params.id;
  const event = {
    event_name: req.body.event_name,
    date: req.body.date,
    description: req.body.description
  };
  
  database
    .update_event(event_id,event)
    .then((result) => {
      const message = {
        message: "Event updated"
      };
      console.log(event_id)
      console.log("Event updated")
      res.status(201).json(message);
    })
    .catch((err) => {
      const error = {
        error: err,
      };
      res.status(500).json(error);
    });
  } else {
    const message = {
      message: "please login first",
    };
    res.status(201).json(message);
  }
  
  
})



server.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  if (!email || !password) {
    // checking if email and password is valid or not
    const message = {
      message: "please input valid email and password",
    };
    return res.status(400).json(message);
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
        const message = {
          message:
            "Email or Password might be wrong. Please check and retry again",
        };
        res.status(401).json(message);
      } else {
        user_id = result.rows[0].id;
        // we need redirect to home page
        req.session.user_id = user_id;
        res.json(result.rows);
      }
    })
    .catch((err) => {
      const error = {
        error: err,
      };
      res.status(500).json(error);
    });
});
/*
server.get("/users", (req, res) => {
  db.query("SELECT * FROM users")
    .then((data) => {
      // Send the retrieved data as a JSON response
      res.json(data.rows);

      console.log('Data from the "users" table:', data.rows);
    })
    .catch((err) => {
      const error = {
        error: err,
      };
      res.status(500).json(error);
    });
});
*/
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
    const error = {
      error: "please input valid email and password should match",
    };
    return res.status(400).json(error);
  }
  //check if the user already signup
  database.getUserWithEmail(user.email)
  .then((users) => {
    console.log(users.length);
    if (users.length) {
      return res.send({
        error: "A registration with this email already exist",
      });
    } else {
      database.signupUsers(user)
      .then((result) => {
        if (result) {
          const message = {
            message: "User has been registered Successfully",
          };
          console.log(result.id);
          req.session.user_id = result.id
          return res.status(201).json(message);
        }
      })
      .catch((err) => {
        const error = {
          error: err,
        };
        res.status(500).json(error);
      })
    }
  });
});
server.post("/logout", (req,res) => {
  req.session.user_id = null;
  const message = {
    message: "User has been loged out",
  };
  res.status(201).json(message);

})

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

      res.json(data);
    });
});

server.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
