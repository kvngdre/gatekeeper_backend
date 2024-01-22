export default {
  allowedOrigins: [
    "https://gatekeeper-inky.vercel.app",
    "http://localhost:5173",
    "http://localhost:3450",
    "http://127.0.0.1:3450",
  ],

  db: {
    uri: process.env.DB_URI,
  },

  port: process.env.PORT,
};
