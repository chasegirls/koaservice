const Koa = require("koa");
const app = new Koa();
const staticCache = require("koa-static-cache");
const { home } = require('./controller')
const path = require("path");

app.use(
  staticCache(path.join(__dirname, "static"), {
    prefix: "/static",
    maxAge: 365 * 24 * 60 * 60,
  })
);
app.use(home.routes());
const port =
  process.env.NODE_ENV === "production" ? process.env.NODE_PORT : 3002;
app.listen(port);
