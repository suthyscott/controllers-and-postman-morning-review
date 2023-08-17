import express from 'express' 
import session from 'express-session'
import ctrl from './controllers/authController.js'
const PORT = 4545

const app = express()

app.use(express.urlencoded({extended: false}))
// app.use(express.json())
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'asdf;alsdkjfas;ldgkj'
}))

const {handleSeeMe, handleBaseEndpoint, handleAddMeToSess} = ctrl


app.get('/', handleBaseEndpoint)

app.get('/seeme', handleSeeMe)

app.post('/me', handleAddMeToSess)



app.listen(4545, () => console.log(`Take us to warp ${PORT}`))