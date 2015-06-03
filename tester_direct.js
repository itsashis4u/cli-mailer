var nodemailer = require('nodemailer');
var chalk = require('chalk');


var transporter = nodemailer.createTransport();
transporter.sendMail({
   from : 'Ashish Kumar Badtiya <itsashis4u@gmail>',
	to: 'Ashish Kumar Badtiya <b112010@iiit-bh.ac.in>',
	subject: 'Hello World',
	text: 'Hi testing service',
	html: '<b>Hi testing service</b>'
}, function(err, info){
	if(err)
		console.log(chalk.red(err));

	console.log(chalk.green('Message Sent: '+ JSON.stringify(info)));
});