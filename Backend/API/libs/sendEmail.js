// Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import handler from "./handler-lib";

export const main = handler(async (event, context) => {
    const secrets = require('./secrets.json');
    var nodemailer = require('nodemailer');
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: secrets.secrets.email,
            pass: secrets.secrets.password
        }
    });
    // Primeiro email
    var mailOptions = {
        from: secrets.secrets.email,
        to: event.ToAddresses,
        subject: event.MessageSubject,
        text: event.MessageBody
    };
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
    //Segundo email
    mailOptions = {
        from: secrets.bgc.email,
        to: event.ToAddresses,
        subject: event.MessageSubject,
        text: event.MessageBody
    };
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
});