const Users = require('../models/userModel')
// const crypto = require("crypto");

exports.create = async function(req,res){
    try{
        const user = new Users(req.body)
        console.log(user)
        await user.register()
        if(user.errors.length>0){
           return res.json({ error: user.errors})
        }
        return res.status(200).json(user.body.name);
        } 
        catch(e){
            console.log(e)
            return res.status(400).json({ error: e });
        }
}