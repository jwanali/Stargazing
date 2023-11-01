const {getUserByEmail, generateRandomString,create_new_user} = require('./helpers');
const db = require("./db/connection");
const request = require('request-promise-native');
const express = require("express");
const cookieSession = require("cookie-session");
const bcrypt = require("bcryptjs");
const server = express();
const PORT = 8080;
server.use(
  cookieSession({
    name: "session",
    keys: ["aj345", "dfh345"],
    // Cookie Options
    //maxAge: 24 * 60 * 60 * 1000 expire 24 hours
  })
);

server.get("/events", (req,res) => {
  db.query('SELECT * FROM events')
  .then((data) => {
    // Send the retrieved data as a JSON response
    res.json(data.rows);
    
    console.log('Data from the "users" table:', data.rows);
  })
  .catch((err) => {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred' });
  });
});


server.get("/login", (req,res) => {
 
  // const email = req.body.email; 
  // const password = req.body.password;
  const email = 'sebastianguerra@ymail.com';
  const password = 'password';
  

  if (!email || !password) {   // checking if email and password is valid or not
    return res.status(400).send("please input valid email and password");
  }
  const values = [email];
  const query = `
  SELECT DISTINCT users.name as user, users.email as email,users.id as id, users.password as password
  FROM users
   
  WHERE users.email = $1
`;

db.query(query, values)
  .then((result) => {
  
  if (result.rows.length === 0) {
    // User not found or incorrect credentials
    res.status(401).send('sorry Invalid eamil');
    
  } else if (result.rows[0].password != password) {
  
    res.status(401).send('sorry wrong  password ');
  } else {
    
    res.json(result.rows);
  }})
.catch((err) => {
console.log(err.message);
res.status(500).send('Internal Server Error');
});

});
server.get('/users', (req,res) => {
 
  db.query('SELECT * FROM users')
    .then((data) => {
      // Send the retrieved data as a JSON response
      res.json(data.rows);
      
      console.log('Data from the "users" table:', data.rows);
    })
    .catch((err) => {
      console.error('Error:', err);
      res.status(500).json({ error: 'An error occurred' });
    });
})

server.get("/sign_up", (req,res) => {
  /*
  const user = {
   email : req.body.email,
   password : req.body.password,
   name : req.body.firstName,
   password_confirmation : req.body.password_confirmation,
  };
  */
  const user = {
   email :'jwan111@example.1com',
   password : 'password',
   name : 'jwan',
   password_confirmation : 'password',
  };
 
  if (!user.email || !user.password || (user.password != user.password_confirmation)) { // checking if email and password is valid or not
    return res.status(400).send("please input valid email and password should match");
  }
  const values = [user.email];
  const query = `
  SELECT DISTINCT users.name as user, users.email as email,users.id as id, users.password as password
  FROM users
   
  WHERE users.email = $1
`;

db.query(query, values)
  .then((result) => {
  
  if (result.rows.length === 0) {
    const values = [
      user.name,
      user.email,
      user.password]
    const query2 = `INSERT INTO users (name , email, password )
  VALUES ($1, $2, $3);`
  db.query(query2, values)
    .then ((data) => {
      db.query('SELECT * FROM users')
      .then((data) => {
        // Send the retrieved data as a JSON response
        console.log('Data from the "users" table:', data.rows);
        res.json(data.rows[data.rows.length - 1]);  
      })
      .catch((err) => {
        console.error('Error:', err);
        res.status(500).json({ error: 'An error occurred' });
      });
    })
  .catch((err) => {
    console.log(err.message);
    res.status(500).send('Internal Server Error');
  });
  } else {
    res.status(401).send('sorry this user already exist ');
  }})
.catch((err) => {
console.log(err.message);
res.status(500).send('Internal Server Error');
});
});


server.get("/api/weather", (req,res) => {
  const fetchMyIP = function() {
    return request("https://api.ipify.org?format=json");
  };
  const fetchCoordsByIP = function(body) {
  const ip = JSON.parse(body).ip;
  console.log(ip);
  return request(`http://ipwho.is/${ip}`);
};
const weather_info = function(body) {
  
    const latitude = JSON.parse(body).latitude;
    const longitude = JSON.parse(body).longitude;

  return request(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relativehumidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,uv_index_clear_sky_max&timezone=auto`);
}
  
  fetchMyIP()
  .then (fetchCoordsByIP)
  .then(weather_info)
  .then ((data) => {
    console.log(JSON.parse(data))
   //console.log(data)
   
    res.send(data)
  })
  
    
   })
const availableRouts = "<div>";
server.get('/', (req,res) => {
  res.send('Stargazin')
})

server.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
