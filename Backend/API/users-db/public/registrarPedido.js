// Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import handler from "../../libs/handler-lib";
import {v4 as uuidv4} from 'uuid';
import dynamoDb from "../../libs/dynamodb-lib";

export const main = handler(async (event, context) => {
    // Partes the JSON data received from request
    const data = JSON.parse(event.body);
    //  Parameters to be saved on the DynamoDB created. This has two main 'keys': TableName (name of our dynamodb table) and 'Item'.
    const product = {
      //  Name of our DynamoDB Table
      TableName: process.env.usersTableName,
      // The attributes of the item to be created on DB
      Item: {
        // Item
        pedidoId: uuidv4(),
        // The pedido data
        productData: data,// A unique uuid
        // The date created
        createdAt: Date.now(), // Current Unix timestamp
      },
    };
    // Saves this to the database
    await dynamoDb.put(product);
    // Returns the Item dict
    return product.Item;
  });