/**
 * App helper functions
 */

/**
 * Validates an email address.
 *
 * @param {string} email The email address to validate.
 * @returns {boolean} `true` if the email address is valid, `false` otherwise.
 */
export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

/**
 * Validates a password.
 *
 * @param {string} password The password to validate.
 * @returns {boolean} `true` if the password is valid, `false` otherwise.
 */
export const validatePassword = (password) => password.length >= 6;

/**
 * Generates a random ID string.
 *
 * @returns {string} A random ID string, 4 characters long.
 */
export const generateRandomID = () => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let id = "";

  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    id += characters[randomIndex];
  }

  return id;
};

/**
 * Validates the login data.
 *
 * @param {object} loginData The login data to validate.
 * @param {function} setLoginDataErr A function that sets the login data error.
 * @returns {boolean} `true` if the login data is valid, `false` otherwise.
 */
export const validateLogin = (loginData, setLoginDataErr) => {
  let email = "",
    password = "",
    flag = true;

  if (!validateEmail(loginData.email)) {
    email = "Email must be a valid email address!";
    flag = false;
  }

  if (!validatePassword(loginData.password)) {
    password = "Password must be at least 6 characters!";
    flag = false;
  }

  setLoginDataErr({ password, email });

  return flag;
};
