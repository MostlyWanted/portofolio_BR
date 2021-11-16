const experienceSchema = require('../models/experienceModel');

//show experience
exports.getExperience = async (req, res)=>{
    const experience = await experienceSchema.find();

    try{
        res.json(experience);
    }catch(error) {
        res.status(500).json({msg:'server problem'})
    }
  
    //second way
    // experienceSchema.find()
    // .then(experience=>res.json(experience))
    // .catch(err=>res.status(500).json(`error:${err}`))
};
    
// create new experience
exports.addExperience = async (req,res)=>{
    const {experience} = req.body;

    try {
        const newExperience = new experienceSchema({
            experience
        })
        await newExperience.save();
        res.json({msg:'Experience added'});

    }catch(error){
        res.status(500).json({msg:'server problem'})
    }



    // second way promises
    // const newExperience = new experienceSchema({
    //     experience
    // })

    // newExperience.save()
    // .then(experience=>res.json('the article was sent'))
    // .catch(error=>res.status(500).json(`error:${err}`))

};


//get specific experience
exports.getExperienceId = async (req,res)=>{
try{
    const experience = await experienceSchema.findById(req.params.id);
    res.json(experience);
}catch(error){
    res.status(500).json({msg:'server problem'})
}
// second way promises
//    experienceSchema.findById(req.params.id)
//    .then(experience=>res.json(experience))
//    .catch(err=>res.status(400).json({msg:err}))

};

//update experience by Id
exports.updateExperience = async (req,res)=>{
const {experience} = req.body;  
try {
    const newExperience = await experienceSchema.findByIdAndUpdate(req.params.id, {
    experience 
});

let results = await newExperience.save();
await results;
res.json({msg:'Item Updated'});
    
} catch (error) {
    res.status(500).json({msg:'server problem'})
}
};


//delete experience
exports.delExperience = async (req,res)=>{
    const experience = await experienceSchema.findByIdAndDelete(req.params.id)

    experience;

    res.json({msg:"Item deleted"})

};
