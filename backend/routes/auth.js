const express = require("express");
const User = require('../models/User')
const router = express.Router();
const { body, validationResult } = require('express-validator');
// create a user using : Post "/api/auth". doesn't require auth 



router.post("/createuser",[
    body('name','enter a vaild name').isLength({min:3}),
    body('email', 'enter a vaild email').isEmail(),
    body('password').isLength({min:5}),

]

, async(req, res) => {
//if there are error return bad request and the errors


    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array()});
    }

    //check whether the user is already exist and email
    try{
    let user = await User.findOne({email: req.body.email});
    if(user){
        return res.status(400).json({error:"sorry a user with this email is already existed"})
    }
    user = await User.create({
        name:req.body.name,
        password:req.body.password,
        email:req.body.email,
    })
    
    // .then(user=>res.json(user))
    // .catch(err=>{console.log(err)
    // res.json({error:'please enter a unique value for email'})})



// console.log(req.body);
// const user =User(req.body);
// user.save()
res.json(user)
}catch (error){
    console.error(error.message);
    res.status(500).send("some error occured");
}
});
module.exports = router;
