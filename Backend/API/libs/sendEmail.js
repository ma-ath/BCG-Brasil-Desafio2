// Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import handler from "./handler-lib";

export const main = handler(async (event, context) => {
    var aws = require("aws-sdk");
    var ses = new aws.SES({ region: "sa-east-1" });
    const secrets = require('./secrets.json');
    var params = {
        Destination: {
        ToAddresses: [event.ToAddresses, secrets.bgc.email],
     },
     Message: {
        Body: {
            Text: { Data: event.MessageBody },
            },
            Subject: { Data: event.MessageSubject },
        },
        Source: secrets.secrets.email,
    };
    var sendPromise = ses.sendEmail(params).promise();
    console.log(sendPromise);
});