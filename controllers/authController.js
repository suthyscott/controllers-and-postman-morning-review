export default {
    handleBaseEndpoint: (req, res) => {
        console.log('hit', req.session)
        const {name, age, favColor} = req.session.me
        res.send(`<h1>Hello there ${name}, ${age} ${favColor}</h1>`)
    },
    handleSeeMe: (req, res) => {
        const {name} = req.query
        res.send(`Hi there ${name}`)
    },
    handleAddMeToSess: (req,res) => {
        const {name, age, favColor} = req.body
        console.log(name, age, favColor)
        req.session.me = {name, age, favColor}
        console.log(req.session)
        res.sendStatus(200)
    }
}