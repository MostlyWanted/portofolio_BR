const router = require('express').Router();
const nodemailer = require('nodemailer');

router.get('/', (req, res) => {
    res.send('contacted')
})


router.post('/', (req, res)=>{
    //smtp is a protocol for transporting messages every email providers support this protocol

    let smtpTrraansport = nodemailer.createTransport({
        service:'Gmail',
        //the port for connection
        port:465,
        //for authentication
        auth:{
            user:'bijanrajaie@gmail.com',
            pass:'****'
        }

    })

    let mailOptions= {
        from: data,
        to:'bijanrajaie@gmail.com',
        subject:`'Message from ${data.name}`,
        html:`
        <h3>Informations</h3>
        <ul>
        <li>Name:${data.name}</li>
        <li>Name:${data.email}</li>
        
        </ul>
        <h3>Message</h3>
        <p>${data.message}</p>
    
        
        `
    }
    smtpTransport.sendMail(mailOptions, (err, reponts)=>{
        try {
            if(err) return res.status(400).json({msg:err})
            
            else{
                return res.status(200).json({msg:`Message was sent`})
            }
        } catch (err) {
            res.status(500).json({msg:err})
            
        }
    })
});




module.exports = router;