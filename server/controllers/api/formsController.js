const formsController = require("express").Router();

const db = require("../../models");
const {JWTVerifier} = require("../../lib/passport");

formsController.post('/', (req, res)=>{
    const {name} = req.body;

    db.Forms.create({name})
        .then(formName => res.json(formName))
        .catch(err => res.json(err));
});

formsController.get('/', JWTVerifier, (req, res) => {
    db.Forms.find({})
    .then(results => {
        res.json(results);
    })
    .catch(err=> {
        if(err) throw err
    })
})

module.exports = formsController;


