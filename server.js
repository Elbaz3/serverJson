const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");

const app = jsonServer.create();
const router = jsonServer.router("db.json");

// middlewares
app.use(cors());
app.use(jsonServer.defaults());
app.db = router.db;

// auth middleware
app.use(auth);
app.use(router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
