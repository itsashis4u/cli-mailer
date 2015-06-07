var nodemailer = require('nodemailer');
var prompt = require('prompt');


// var s = {
// 	properties:{
// 		fullname:{
// 			description: 'Full Name',
// 			pattern: /^[a-zA-Z\s]+$/,
// 			required: true
// 		},
// 		password:{
// 			description: 'Password',
// 			pattern: /^[a-zA-Z0-9-_\s!]{6,20}$/,
// 			hidden: true,
// 			message: 'Password should contain letters, numbers, hyphen or underscore and must be within 6-20 letters'
// 		}
// 	}
// };

var r = {
	properties:{
		username:{
			description: 'Google Email',
			required:true
		},
		pass:{
			description: 'Google Password',
			required: true,
			hidden: true
		},
		sender_email:{
			description: 'Sender Email ID',
			pattern: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
			required: true,
			message: 'Invalid Email Address'
		},
		recipient_email:{
			description: 'Recipient Email ID',
			pattern: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
			required: true,
			message: 'Invalid Email Address'
		},
		subject:{
			description: 'Subject',
			required: true,
		},
		text:{
			description: 'Message',
			required: true
		}

	}
};
prompt.start();

prompt.get( r, function(err, res){
	if(err)
		console.log(err);
	else{
	// console.log('Full Name: ' +res.fullname.blue);
	// console.log('Password: '+res.password.green);
	console.log('\u2713'.green+'  Sender Email: '.grey+res.sender_email.green);
	console.log('\u2713'.green+'  Recipient Email: '.grey+res.recipient_email.green);

	var transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth:{
			user: res.username,
			pass: res.pass
		}
	});

	var mailOptions = {
		from: res.sender_email,
		to: res.recipient_email,
		subject: res.subject,
		text: res.text
	};

	transporter.sendMail(mailOptions, function(error, info){
		if(error)
			console.log(error);
		else
			console.log("Mail sent: "+ info.response)
	});
}
});

//https://www.udacity.com/course/viewer#!/c-cs101/l-48719336/e-48682640/m-48701421
