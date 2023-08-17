import express from 'express' 
import session from 'express-session'
// Here we are importing the default export from the authController.js file. This will be an object with all the functions we've declared (as methods in an object).
import ctrl from './controllers/authController.js'

const PORT = 4545

const app = express()

// To 'parse' in code essentially means to translate from one language or format to another. In the below examples, we're parsing an object from the 'urlencoded' format or the JSON format into a JavaScript object. 

// This parses body objects that come directly from an html form, which sends them in a format called "urlencoded". You can also send body objects using this format manually from Postman, as seen in the 'form-encoded.png' file in this repo. 
app.use(express.urlencoded({extended: false}))

// This parses body objects that are formatted as raw json. We will be sending requests with JSON objects soon, but you can do this manually with Postman as seen in the image file called 'raw-json.png' in this repo. 
app.use(express.json())

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'asdf;alsdkjfas;ldgkj'
}))

// destructuring the handler functions we need from the object we're exporting from the authController. 
const {handleSeeMe, handleBaseEndpoint, handleAddMeToSess} = ctrl

// Instead of writing handler functions right here, we use the functions we destructured from the controller above. These are callback functions we're passing in, so they should not be invoked. 
app.get('/', handleBaseEndpoint)

app.get('/seeme', handleSeeMe)

app.post('/me', handleAddMeToSess)



app.listen(4545, () => console.log(`Take us to warp ${PORT}`))