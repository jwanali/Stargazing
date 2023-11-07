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
      ($1,$2,$3) RETURNING id;`,
      [event.event_name, event.date, event.description]
    )
    .then((result) => result.rows[0].id)
    .then((data) => 
      db.query(`INSERT INTO users_events (user_id, event_id)
    VALUES ($1,$2) RETURNING id`,[event.user_id,data]))
    .then((result) => 1)
    .catch((err) => {
      console.log(err.message,'error');
    });
}

const delete_event = function (event_id,user_id) {
  return db
    .query(`SELECT user_id FROM users_events  WHERE users_events.event_id = $1 ;`,[event_id])
    .then ((result) => result.rows[0])
    .then((data) => (data.user_id === user_id))
    .then((res) =>  db.query(`DELETE FROM events WHERE id = $1 RETURNING *; `,[event_id]) )
    .catch((err) => {
      console.log(err.message);
    });
}
/*
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
*/
const update_event = function (id,event) {

  return db
            .query(`SELECT * FROM events WHERE  id = $1`,[id])
            .then ((result) => result.rows[0].id)
            .then((data) => db.query(`UPDATE events SET event_name = $1, date = $2, description =$3  WHERE id = $4;`,[event.event_name, event.date, event.description, id]))
            .then((result) => 1)
             .catch((err) => {
               console.log(err.message);
             });
  /*
  return db
    .query(`UPDATE events SET event_name = $1, date = $2, description =$3  WHERE id = $4;`,[event.event_name, event.date, event.description, id])
    .then((result) => {
      console.log(result)
      console.log('event updated',1);
     })
     .catch((err) => {
       console.log(err.message);
     });
     */
}

module.exports = {
  signupUsers,
  getUserWithEmail,
  add_event,
  delete_event,
  update_event
};