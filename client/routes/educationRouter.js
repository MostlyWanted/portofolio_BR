const router = require('express').Router();
const {getEducation,getEducationId, updateEducation, delEducation, addEducation } = require('../controllers/educationCtrl');


// get education user GET = READ
router.get('/education', getEducation)

// add education user  POST = CREATE
router.post('/education', addEducation)

//get specific education by id GET = READ
router.get('/education/:id', getEducationId)

//update specific education by id PUT = UPDATE OR REPLACE 
router.put('/education/update/:id', updateEducation)

//DELETE specific education by id  
router.delete('/education/:id',delEducation)

module.exports = router;