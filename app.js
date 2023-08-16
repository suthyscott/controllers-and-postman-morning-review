import express from 'express' 
import session from 'express-session'

const PORT = 4545

const app = express()

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'asdf;alsdkjfas;ldgkj'
}))



app.listen(4545, () => console.log(`Take us to warp ${PORT}`))