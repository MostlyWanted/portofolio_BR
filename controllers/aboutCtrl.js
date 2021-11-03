exports.getAbout = (req, res)=>{
    res.send('hello from get about')
}
exports.addAbout = (req,res)=>{
    res.send('hello from post router')
}
exports.getAboutId = (req,res)=>{
    res.send('hello from specific post router')
}
exports.updateAbout = (req,res)=>{
    res.send('hello from updated post router')
}
exports.delAbout = (req,res)=>{
    res.send('hello from delete post router')
}
