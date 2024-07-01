var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'farhat.benabdessamad@fsegt.utm.tn',
      pass: 'vzlc ccrw kpcy fpay'
    }
  });
  var name="amira";
  var mailOptions = {
    from: 'farhat.benabdessamad@fsegt.utm.tn',
    to: 'choukiamira77@gmail.com',
    subject: 'bonjour ',
   // text: 'That was easy!'
   html:`<h1 style="color:red;background:blue;">hello ${name}</h1> 
  <img src="https://www.shutterstock.com/image-vector/amira-female-name-beautiful-cursive-260nw-1901201509.jpg" alt="logo"/>
  <p>bonjour farhat </p>  `

  };
  
  transporter.sendMail(mailOptions, (error, info)=>{
    if (error) throw error
     else {
        console.log(info)
      console.log('Email sent: ' + info.response);
    }
  });