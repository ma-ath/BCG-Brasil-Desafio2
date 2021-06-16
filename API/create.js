//  Lambda function that saves data to the DB

import * as uuid from "uuid";               //Create a random, unic user id
import handler from "./libs/handler-lib";
import dynamoDb from "./libs/dynamodb-lib";

export const main = handler(async (event, context) => {
  // Partes the JSON data received from request
  const data = JSON.parse(event.body);
  //  Parameters to be saved on the DynamoDB created. This has two main 'keys': TableName (name of our dynamodb table) and 'Item'.
  const params = {
    //  Name of our DynamoDB Table
    TableName: process.env.tableName,
    // The attributes of the item to be created on DB
    Item: {
      // The author ID
      userId: event.requestContext.identity.cognitoIdentityId,
      // The author ID
      noteId: uuid.v1(), // A unique uuid
      // The content data
      content: data.content, // Parsed from request body
      // The attachment data
      attachment: data.attachment, // Parsed from request body
      // The date created
      createdAt: Date.now(), // Current Unix timestamp
    },
  };
  // Saves this to the database
  await dynamoDb.put(params);
  // Returns the Item dict
  return params.Item;
});
