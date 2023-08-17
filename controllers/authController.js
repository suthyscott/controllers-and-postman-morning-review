// we are exporting an object with three properties. The values for each of the properties are anonymous arrow functions. Because these functions will be invoked by the endpoints, they can receive req and res as parameters. 
export default {
    handleSeeMe: (req, res) => {
        // we can received queries from Postman just like a request from the browser.
        const {name} = req.query
        res.send(`Hi there ${name}`)
    },
    handleAddMeToSess: (req,res) => {
        // receving data about the user from the req.body oject and destructuring it. 
        const {name, age, favColor} = req.body
        
        // we then access the session object that we created on req using the express-session library, and add a new property called 'me'. The value of req.session.me is a new object with the three properties from the body.
        req.session.me = {name, age, favColor}
        
        // we're not trying to send back any data from this function, so we just send back a confirmation code (200 means OK) to tell the user that their post request worked. 
        res.sendStatus(200)
    },
    handleBaseEndpoint: (req, res) => {
        // as long as we've used the post request above to add a user's data to the session, we can destructure those session properties and use them however we want, such as sending back some HTML with that information. 
        const {name, age, favColor} = req.session.me
        res.send(`<h1>Hello there ${name}, ${age} ${favColor}</h1>`)
    },
}