/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const express = require("express");
const mongoose = require('mongoose');
const router = express.Router();
var fetchuser = require('../middeware/fetchuser');
const Note = require('../models/Note');
const { body, validationResult } = require("express-validator");

// route1 : get all the notes using : Post
try {
    router.get('/fetchallnotes',fetchuser,async ( req, res)=>{
        const notes =  await Note.find({user: req.user.id});
                
    res.json(notes)
})
} catch (error) {

    console.error(error.message);
    res.status(500).send("internal error occured");
}

//router 2 : add notes. login required
router.post('/addnote',fetchuser,[

    body("title", "enter a vaild title").isLength({ min: 3 }),
    body("description", "descrpiption must be alteast 5 character").isEmail(),
    body("password").isLength({ min: 5 }),

],async ( req, res)=>{
    try {
        
   
    const {title, description, tag}= req.body;
// if there are errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const note = new Note({
        title,description,tag,user:req.user.id

    })
    const saveNote = await note.save()
    
    res.json(savedNote)
} catch (error) {
    console.error(error.message);
    res.status(500).send("internal error occured");
}
})

module.exports = router;
