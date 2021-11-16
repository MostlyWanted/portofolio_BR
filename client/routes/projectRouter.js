const router = require('express').Router();
const projectSchema = require('../models/projectModel');

//........projects......
// get project user GET = READ
router.get("/project",async (req, res)=>{
    try {
      const project = await projectSchema.find(req.body);
      res.json(project);
    } catch (err) {
        res.status(500).json({msg:err})
    }
  })
// add project user  POST = CREATE
router.post('/project', async (req,res)=> {
const {title, product_id, description, images} = req.body;

try {
    const project = new projectSchema({
        title, 
        product_id, 
        description, 
        images
    })

    await project.save();
    res.json({msg:"Product added"})
} catch (error) {
    res.status(500).json({msg:error})

}
})

//get specific project by id GET = READ
router.get('/project/:id',async(req,res)=> {
try {
    let project = await projectSchema.findById(req.params.id)
    res.json(project)
} catch (error) {
    res.status(500).json({msg:error})

}
})



//update specific project by id PUT = UPDATE OR REPLACE 
router.put('/project/update/:id', async (req,res)=> {
    const {title, product_id, description, images} = req.body;

    try {
        const project = await projectSchema.findByIdAndUpdate(req.params.id, {
        title, 
        product_id, 
        description, 
        images
    })
    await project.save();
    res.json({msg:"Item updated"})

    } catch (error) {

        res.status(500).json({msg:error})

    }
})

//DELETE specific project by id  
router.delete('/project/:id',async(req,res)=> {
let project = await projectSchema.findByIdAndDelete(req.params.id);
try {
    await project;
    res.json({msg:"Item deleted"})
} catch (error) {
    res.status(500).json({msg:error})

}
})

module.exports = router;