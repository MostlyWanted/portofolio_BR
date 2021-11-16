const aboutSchema = require('../models/aboutModel');


//show about
exports.getAbout = async (req, res)=>{
    const about = await aboutSchema.find();

    try{
        res.json(about);
    }catch(error) {
        res.status(500).json({msg:'server problem'})
    }
  
    //second way
    // aboutSchema.find()
    // .then(about=>res.json(about))
    // .catch(err=>res.status(500).json(`error:${err}`))
};
    
// create new about
exports.addAbout = async (req,res)=>{
    const {about} = req.body;

    try {
        const newAbout = new aboutSchema({
            about
        })
        await newAbout.save();
        res.json(newAbout);

    }catch(error){
        res.status(500).json({msg:'server problem'})
    }



    // second way promises
    // const newAbout = new aboutSchema({
    //     about
    // })

    // newAbout.save()
    // .then(about=>res.json('the article was sent'))
    // .catch(error=>res.status(500).json(`error:${err}`))

};


//get specific about
exports.getAboutId = async (req,res)=>{
try{
    const about = await aboutSchema.findById(req.params.id);
    res.json(about);
}catch(error){
    res.status(500).json({msg:'server problem'})
}
// second way promises
//    aboutSchema.findById(req.params.id)
//    .then(about=>res.json(about))
//    .catch(err=>res.status(400).json({msg:err}))

};

//update about by Id
exports.updateAbout = async (req,res)=>{
const {about} = req.body;  
try {
    const newAbout = await aboutSchema.findByIdAndUpdate(req.params.id, {
    about 
});

let results = await newAbout.save();
await results;
res.json({msg:'Item Updated'});
    
} catch (error) {
    res.status(500).json({msg:'server problem'})
}
};


//delete about
exports.delAbout = async (req,res)=>{
    const about = await aboutSchema.findByIdAndDelete(req.params.id)

    about;

    res.json({msg:"Item deleted"})

};
