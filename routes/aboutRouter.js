const router = require('express').Router();
const {getAbout,getAboutId, updateAbout, delAbout, addAbout } = require('../controllers/aboutCtrl');
const aboutSchema = require('../models/aboutModel');


// get about user GET = READ
router.get('/about', getAbout)

// add about user  POST = CREATE
router.post('/about', addAbout)

//get spceific user by id GET = READ
router.get('/about/:id', getAboutId)

//update specific user by id PUT = UPDATE OR REPLACE 
router.put('/about/update/:id', updateAbout)

//DELETE specific user by id  
router.delete('/about/:id',delAbout)

module.exports = router;