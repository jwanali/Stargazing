const db = require("./db/connection");

const getUserByEmail = function (email) {
  
    const query = `
  SELECT DISTINCT users.name as user, users.email as email,users.id as id, users.password as password
  FROM users
   
  WHERE users.email = $1
`;
  const values = [email];

   db.query(query, values)
    .then((result) => {
      
      if (result.rows.length === 0) {
        // User not found or incorrect credentials
        result.status(401).send('sorry Invalid eamil');
      } else {
        const user = result.rows;
        console.log(user)
        
        return user;
      }})
    .catch((err) => {
    console.log(err.message);
    //return err.status(500).send('Internal Server Error');
  });


     



      
  
  

};
const create_new_user = function(user) {
  
  const values = [
    user.name,
    user.eamil,
    user.password]
  const query = `INSERT INTO users (name , email, password )
  VALUES ($1, $2, $3);`
  db.query(query, values)
  .catch((err) => {
    console.log(err.message);
    res.status(500).send('Internal Server Error');
  });
  
}





module.exports = {getUserByEmail, create_new_user};