const router = require('express').Router();
const {getAbout,getAboutId, updateAbout, delAbout, addAbout } = require('../controllers/aboutCtrl');
const aboutSchema = require('../models/aboutModel');


// get about user
router.get('/about', getAbout)



// add about user
router.post('/about', addAbout)

//get spceific user by id
router.get('/about/:id', getAboutId)

//update specific user by id
router.put('/about/update/:id', updateAbout)

//delete specific user by id
router.delete('/about/:id',delAbout)

module.exports = router;