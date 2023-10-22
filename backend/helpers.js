const getUserByEmail = function (email,database) {
  for (let user in database) {
    if (database[user].email === email) {
      return database[user];
    }
  }
  return null;
};

const generateRandomString = function (length) {
  //generate random alphanumeric string
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
};




module.exports = {getUserByEmail, generateRandomString};