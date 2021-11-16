const educationSchema = require('../models/educationModel');

//show education
exports.getEducation = async (req, res)=>{
    const education = await educationSchema.find();

    try{
        res.json(education);
    }catch(error) {
        res.status(500).json({msg:'server problem'})
    }
  
    //second way
    // educationSchema.find()
    // .then(education=>res.json(education))
    // .catch(err=>res.status(500).json(`error:${err}`))
};
    
// create new education
exports.addEducation = async (req,res)=>{
    const {education} = req.body;

    try {
        const newEducation = new educationSchema({
            education
        })
        await newEducation.save();
        res.json(newEducation);

    }catch(error){
        res.status(500).json({msg:'server problem'})
    }



    // second way promises
    // const newEducation = new educationSchema({
    //     education
    // })

    // newEducation.save()
    // .then(education=>res.json('the article was sent'))
    // .catch(error=>res.status(500).json(`error:${err}`))

};


//get specific education
exports.getEducationId = async (req,res)=>{
try{
    const education = await educationSchema.findById(req.params.id);
    res.json(education);
}catch(error){
    res.status(500).json({msg:'server problem'})
}
// second way promises
//    educationSchema.findById(req.params.id)
//    .then(education=>res.json(education))
//    .catch(err=>res.status(400).json({msg:err}))

};

//update education by Id
exports.updateEducation = async (req,res)=>{
const {education} = req.body;  
try {
    const newEducation = await educationSchema.findByIdAndUpdate(req.params.id, {
    education 
});

let results = await newEducation.save();
await results;
res.json({msg:'Item Updated'});
    
} catch (error) {
    res.status(500).json({msg:'server problem'})
}
};


//delete education
exports.delEducation = async (req,res)=>{
    const education = await educationSchema.findByIdAndDelete(req.params.id)

    education;

    res.json({msg:"Item deleted"})

};
