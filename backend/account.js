const sgMail = require('@sendgrid/mail');

const sendgridApi = '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';

sgMail.setApiKey(sendgridApi);

sgMail.send({
    to:"201911064@daiict.ac.in",
    from:"201911064@daiict.ac.in",
    subject:"test mail 1",
    text:"successfully send test mail:)!!!!!",
    html:"success!!!"
  });