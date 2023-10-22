const {getUserByEmail, generateRandomString} = require('./helpers');
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

const users = {
  userRandomID: {
    id: "userRandomID",
    firstName:"first name",
    last_name:"last name",
    email: "user@example.com",
    password: bcrypt.hashSync("123", 10),
  },
  user2RandomID: {
    id: "user2RandomID",
    firstName:"first name",
    last_name:"last name",
    email: "user2@example.com",
    password: bcrypt.hashSync("dishwasher-funk", 10)
  },
};
const events = {
  event1:{
    id: '1',
    name: "event1",
    date: "date",
    description: " description"
  },
  event2:{
    id: '1',
    name: "event1",
    date: "date",
    description: " description"
  },
  event3:{
    id: '1',
    name: "event1",
    date: "date",
    description: " description"
  },
  event4:{
    id: '1',
    name: "event1",
    date: "date",
    description: " description"
  },
}


server.get("/login", (req,res) => {
 /*
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {   // checking if email and password is valid or not
    return res.status(400).send("please input valid email and password");
  }
  if (!getUserByEmail(email, users)) { //checking if the email is registered or not
    return res.status(403).send("sorry the email does not match");
  }
  const user = getUserByEmail(email, users);
  if (!bcrypt.compareSync(password, user.password)) { // checking if password entered is right
    return res.status(403).send("sorry the password  does not match");
  }
  req.session.user_id = user.id;
  
  */
  res.send(users)
});
server.get("/sign_up", (req,res) => {
  /*
  const email = req.body.email;
  const password = req.body.password;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const password_confirmation = req.body.password_confirmation;
 
  if (!email || !password || (password != password_confirmation)) { // checking if email and password is valid or not
    return res.status(400).send("please input valid email and password");
  }
  if (getUserByEmail(email, users)) { //checking if the email is registered or not
    return res.status(400).send(`the  ${email} is already registerd`);
  }

  const hashedPassword = bcrypt.hashSync(password, 10);
  const id = generateRandomString(12);
  users[id] = {
    id: id,
    email: email,
    lastName: lastName,
    firstName: firstName,
    password: hashedPassword,
  };
  req.session.user_id = id;
  
  */
  
  res.json(events)
});
server.get("/api/weather", (req,res) => {
  const fetchMyIP = function() {
    return request("https://api.ipify.org?format=json");
  };
  const fetchCoordsByIP = function(body) {
  const ip = JSON.parse(body).ip;
  console.log(ip)
  console.log(ip)
  return request(`http://ipwho.is/${ip}`);
};
const weather_info = function(body) {
  
    const latitude = JSON.parse(body).latitude;
    const longitude = JSON.parse(body).longitude;

  return request(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relativehumidity_2m,rain,showers,snowfall,snow_depth,cloudcover,cloudcover_low,cloudcover_mid,cloudcover_high,visibility,winddirection_180m`);
}
  
  fetchMyIP()
  .then (fetchCoordsByIP)
  .then(weather_info)
  .then ((data) => {
   console.log(data)
   
    res.send(data)
  })
  
    
   })



server.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
