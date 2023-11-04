const db = require("./connection.js");
const signupUsers = function (user) {
  return db
    .query(
      `INSERT INTO users(name,email, password) Values($1,$2,$3) RETURNING *;`,
      [user.name, user.email, user.password]
    )
    .then((result) => {
      return Promise.resolve(result.rows[0]);
    })
    .catch((err) => {
      console.log(err.message);
    });
};


const getUserWithEmail = function (id) {
  return db
    .query(`SELECT * FROM users WHERE email = $1;`, [id])
    .then((result) => {
      return Promise.resolve(result.rows);
    })
    .catch((err) => {
      console.log(err.message);
    });
};
const add_event = function (event) {
  return db
    .query(
      `INSERT INTO events (event_name, date, description)
      VALUES 
      ($1,$2,$3)`,
      [event.event_name, event.date, event.description]
    )
    .then((result) => {
      console.log(result)
     console.log('event added');
    })
    .catch((err) => {
      console.log(err.message);
    });
}
const delete_event = function (id) {
  return db
    .query(`DELETE FROM events WHERE id = $1 RETURNING *; `,[id])
    .then((result) => {
      console.log('event deleted');
     })
     .catch((err) => {
       console.log(err.message);
     });
};
const update_event = function (id,event) {
  return db
    .query(`UPDATE events SET event_name = $2, date = $3, description =$4  WHERE id = $1;`,[id, event.event_name, event.date, event.description])
    .then((result) => {
      console.log('event updated');
     })
     .catch((err) => {
       console.log(err.message);
     });
}

module.exports = {
  signupUsers,
  getUserWithEmail,
  add_event,
  delete_event,
  update_event
};