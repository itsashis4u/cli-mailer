var nodemailer = require('nodemailer');
var chalk = require('chalk');
var newrelic = require('newrelic');

var transport = nodemailer.createTransport({
	service : 'gmail',
	auth:{
		user: 'itsashis4u@gmail.com',
		pass: 'iphonekiller%!*((&*'
	}
});

var mailOptions = {
	from : 'Ashish Kumar Badtiya <itsashis4u@gmail>',
	to: 'Ashish Kumar Badtiya <b112010@iiit-bh.ac.in>',
	subject: 'Hello World',
	text: 'Hi testing service',
	html: '<b>Hi testing service</b>'
};

transport.sendMail(mailOptions, function(err, info){
	if(err)
		console.log(chalk.red(err));

	console.log(chalk.blue('Message Sent: '+ info.response));
});