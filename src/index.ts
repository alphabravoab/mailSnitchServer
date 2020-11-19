import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as dotenv from 'dotenv';
import * as logger from 'koa-logger';
import * as json from 'koa-json';


dotenv.config();
const port = process.env.PORT;

const app = new Koa();
const router = new Router();

router.get('/', async (ctx, next) =>{
    ctx.body = { msg: "mail call"}
    await next();
});

app.use(json());
app.use(logger());

app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
    console.log(`I hear the whispers on ${port}`)
});