"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const Router = require("koa-router");
const logger = require("koa-logger");
const json = require("koa-json");
const app = new Koa();
const router = new Router();
router.get('/', async (ctx, next) => {
    ctx.body = { msg: "mail call" };
    await next();
});
app.use(json());
app.use(logger());
app.use(router.routes()).use(router.allowedMethods());
app.listen(3000, () => {
    console.log("I hear the whispers on port 3000");
});
//# sourceMappingURL=index.js.map