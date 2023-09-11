const express = require("express");
const User = require('../models/User')
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const JWT_SECRET = 'Akashisagoodb$oy';
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
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password,salt)
    user = await User.create({
        name:req.body.name,
        password:secPass,
        email:req.body.email,
    })
    
    // .then(user=>res.json(user))
    // .catch(err=>{console.log(err)
    // res.json({error:'please enter a unique value for email'})})



// console.log(req.body);
// const user =User(req.body);
// user.save()
const data = {
    user :{
        id: user.id
    }
    
}
const authtoken = jwt.sign(data, JWT_SECRET);



res.json(authtoken)
}catch (error){
    console.error(error.message);
    res.status(500).send("internal error occured");
}
});
// authenticate a user using post
router.post("/login",[
    body('email', 'enter a vaild email').isEmail(),
    body('password', 'Password cannot be blank').exists(),
],
     async(req, res) => {{
//if there are errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) 
      return res.status(400).json({errors: errors.array()});
    }
    const {email, password}=req.body;
    try {
        let user = await User.findone({email,password});
        if(user){
            return res.status(400).json({error:"please use correct credentials"});
        }
        const passwordCompare = await bcrypt.compare(password, user.password);
        if(!passwordCompare){
            return res.status(400).json({error:"please try to login with correct credentials"});

        }

        const data ={
            user:{
                id:user.id
            }
        }
        const authtoken =jwt.sign(data,JWT_SECRET);
        res.json(authtoken)

    } catch (error){
        console.error(error.message);
        res.status(500).send("internal error occured");
    }

})
module.exports = router;
