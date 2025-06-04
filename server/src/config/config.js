import dotenv from "dotenv";
dotenv.config();

const config = {
  PORT: process.env.PORT,
  DB_URI: process.env.MONGODB_URI,
  jwtSecret: process.env.JWTSECRET,
  jwtExpire: process.env.JWT_ACCESS_EXPIRATION_MINUTES,
  SMTPemail: process.env.NODE_EMAIL,
  SMTPPassword: process.env.NODE_PASSWORD,
  APP_URL: process.env.APP_URL,
};

export default config;
