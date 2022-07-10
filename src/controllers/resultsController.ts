const Results = require('../models/resultsModel')

exports.show = async function(req,res){
    try {
        const results = await Results.findAll();
        console.log(results[0].date.getMonth())
        return res.status(200).json(results);
        } catch (e) {
            console.log(e);
            return res.status(400).json({ error: e });
        } 
}

exports.create = async function(req,res){
    try{
        const result = new Results(req.body)
        result.date = new Date(result.date)
        await result.register()
        if(result.errors.length>0){
           return res.json({ error: result.errors})
        }
        return res.status(200).json(result);
        } 
        catch(e){
            console.log(e)
            return res.status(400).json({ error: e });
        }
}