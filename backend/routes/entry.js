const router = require('express').Router();
let Guest = require('../model/entry.model');
  
const cron = require("node-cron");
const express = require("express");
const nodeMailer = require('nodemailer');
var helper = require('sendgrid').mail;
const async = require('async');

const sgMail = require('@sendgrid/mail');

const sendgridApi = process.env.SENDGRID_API;

sgMail.setApiKey(sendgridApi);


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
      
      


      
      console.log("successfully sent.");
      // cron.schedule(st, function () {
      //   console.log("Running Cron Job for checkin mail");
       
       
        
      //   sgMail.send({
      //     to:hostEmail,
      //     from:email,
      //     subject:"Check In mail",
      //     text:checkInMsg,
      //     html:checkInMsg
      //   });
       
      // });

      // cron.schedule(st1, function () {
      //   console.log("Running Cron Job for checkout mail");
        
      //   sgMail.send({
      //     to:email,
      //     from:hostEmail,
      //     subject:"Check Out mail",
      //     text:checkOutMsg,
      //     html:checkOutMsg
      //   });
        
      // });
      
      

    }

    

    )
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;