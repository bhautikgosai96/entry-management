const router = require('express').Router();
let Guest = require('../model/entry.model');
  
const cron = require("node-cron");
const express = require("express");
const nodeMailer = require('nodemailer');
var helper = require('sendgrid').mail;
const async = require('async');

router.route('/').get((req, res) => {
  Guest.find()
    .then(guests => res.json(guests))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const phone = Number(req.body.phone);
  const checkIn = Date.parse(req.body.checkIn);
  const checkOut = Date.parse(req.body.checkOut);
  const address = req.body.address;
  const hostName = req.body.hostName;
  const hostEmail = req.body.hostEmail;
  const hostPhone = req.body.hostPhone;

  const newGuest = new Guest({name,hostName,email,phone,checkIn,checkOut,address,hostEmail,hostPhone,});

  //console.log(checkIn);
  let checkDate = req.body.checkIn;
  checkDate = new Date(checkDate).toLocaleString("en-US", {timeZone: "Asia/Kolkata",hour12: false});
  
  let d= new Date(checkDate);
  let dd= d.getDate();
  let mm= d.getMonth()+1;
  let h= d.getHours();
  let minu=d.getMinutes();
  //console.log(" day "+dd+" mon " +mm +" hour "+h + " second "+minu);

  let outDate = req.body.checkOut;
  outDate = new Date(outDate).toLocaleString("en-US", {timeZone: "Asia/Kolkata",hour12: false});
  let d1= new Date(outDate);
  let dd1= d1.getDate();
  let mm1= d1.getMonth()+1;
  let h1= d1.getHours();
  let minu1=d1.getMinutes();

  newGuest.save()
    .then(() => {
      res.json('Guest added!');
      let st = String(minu) + " " + String(h) + " " + String(dd)  + " " + String(mm)  + " *"; 
      let st1 = String(minu1) + " " + String(h1) + " " + String(dd1)  + " " + String(mm1)  + " *";
      
      let checkInMsg = name + " has checked in to office. Phone number - "+phone+" Check-in time -"+d+" check-out time - "+d1;
      let checkOutMsg = name + " has checked out from office. Phone number - "+phone+" Check-in time -"+d+" check-out time - "+d1+" host name - "+hostName+ " address visited - "+address;
      
      cron.schedule(st, function () {
        console.log("Running Cron Job for checkin mail");
        
        let transporter = nodeMailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
              user: 'dawn.ernser@ethereal.email',
              pass: '8yanhncNcShcXQfwnQ'
            }
          });

       
        const mailOptions = {
            from: 'dawn.ernser@ethereal.email', // sender address
            to: hostEmail, // list of receivers trevor.swaniawski@ethereal.email
            subject: 'Check In mail', // Subject line
            text: checkInMsg, // plain text body
            html: checkInMsg // html body
        };
    
        transporter.sendMail(mailOptions, function (error, info) {
            
            if (error) {
              console.log('error');
                console.log(error);
            }else{
              console.log('info');
              console.log(info);
            }
        });
      });

      cron.schedule(st1, function () {
        console.log("Running Cron Job for checkout mail");
        
        let transporter = nodeMailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
              user: 'dawn.ernser@ethereal.email',
              pass: '8yanhncNcShcXQfwnQ'
            }
          });

       
        const mailOptions = {
            from: hostEmail, // sender address
            to: email, // list of receivers trevor.swaniawski@ethereal.email
            subject: 'Check Out mail', // Subject line
            text: checkOutMsg, // plain text body
            html: checkOutMsg // html body
        };
    
        transporter.sendMail(mailOptions, function (error, info) {
            
            if (error) {
              console.log('error');
                console.log(error);
            }else{
              console.log('info');
              console.log(info);
            }
        });
      });
      
      

    }

    

    )
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;