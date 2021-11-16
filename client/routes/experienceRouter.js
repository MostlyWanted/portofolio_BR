const router = require('express').Router();
const {getExperience,getExperienceId, updateExperience, delExperience, addExperience } = require('../controllers/experienceCtrl');


// get experience user GET = READ
router.get('/experience', getExperience)

// add experience user  POST = CREATE
router.post('/experience', addExperience)

//get specific experience by id GET = READ
router.get('/experience/:id', getExperienceId)

//update specific experience by id PUT = UPDATE OR REPLACE 
router.put('/experience/update/:id', updateExperience)

//DELETE specific experience by id  
router.delete('/experience/:id',delExperience)

module.exports = router;