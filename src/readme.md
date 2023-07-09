To run this application, simply install all necessary dependencies on the package.json file with the command ;

npm install or yarn install, then on your terminal simply type yarn run start or npm run start.

you would need to create a user, with the following details, viz;

* username
* email
* mobile
* walletBallance.

this should be done on the signup route which is "localhost:4130/api/v1/register/signup"

when done, a new user would be created then in order to carry out or test the

functionality of the services you should kindly hit this link;

"localhost:4130/api/v1/notifyuser/notifications/user1",

Note: on this link user1 is an ID so you should have your own ID ready as you do not have access to my mongodb database.

this is how your post request should be;

{

"userId":"64aa6622cacfa76a87d84aeb",

"amount":1000,

"notificationType":"email"

}

you have the option of altering the the "notificationType" to either an "email" or a "mobile",

this would enable the notification to be sent either by using an email address that is valid or a phone number that is valid.

note:  

1. This feature was achieved with the use of nodemailer(dependency for sending mail from a nodejs application) and trilio (another dependency for sending text messages) and you must be connected to the internet for it to work properly.
2. when trying to send a notification through an SMS in order for this functionality to work the twilo dependency requires the number you desire to use to send a mesage to be registered on twilio itself (reason been that this is a free trial on the trilio dependency).  if you decide to proceed to use another phone number, you would get an error stating;																				{

"errorMessage":"The number  is unverified. Trial accounts cannot send messages to unverified numbers; verify  at twilio.com/user/account/phone-numbers/verified, or purchase a Twilio number to send messages to unverified numbers."

}

Warm Regards.
