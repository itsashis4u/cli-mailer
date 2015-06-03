var nodemailer = require('nodemailer');
var prompt = require('prompt');


var s = {
	properties:{
		fullname:{
			description: 'Full Name',
			pattern: /^[a-zA-Z\s]+$/,
			required: true
		},
		password:{
			description: 'Password',
			pattern: /^[a-zA-Z0-9-_\s!]{6,20}$/,
			hidden: true,
			message: 'Password should contain letters, numbers, hyphen or underscore and must be within 6-20 letters'
		}
	}
};
prompt.start();

prompt.get( s, function(err, res){
	if(err)
		console.log(err);
	else{
	console.log('Full Name: ' +res.fullname.blue);
	console.log('Password: '+res.password.green);
}
});

