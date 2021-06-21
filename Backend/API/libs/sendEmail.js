// Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import handler from "./handler-lib";

export const main = handler(async (event, context) => {
    const aws = require("aws-sdk");
    const secrets = require('./secrets.json');
    let ses = new aws.SES({ region: "sa-east-1" });
    let data = JSON.parse(event.body);
    let params = {
        Destination: {
            ToAddresses: [data.ToAddresses, secrets.bgc.email],
     },
        Message: {
            Body: {
                Text: { Data: data.MessageBody},
            },
                Subject: { Data: data.MessageSubject},
        },
            Source: secrets.secrets.email,
    };
    let sendPromise = ses.sendEmail(params, function(err, emailResult) {
        if (err) console.log('Error while sending email', err);
        else {
            console.log("===EMAIL SENT===");
            console.log(params);
            console.log("EMAIL CODE END");
            console.log('EMAIL: ', emailResult);
        }
    }).promise();
    return sendPromise;
});