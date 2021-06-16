//  Lambda function that saves a product to the DB
//
//  Cada produto possui: productName, productId, productPrice & productQuantity
//

import handler from "../../libs/handler-lib";
import dynamoDb from "../../libs/dynamodb-lib";

export const main = handler(async (event, context) => {
  // Partes the JSON data received from request
  const data = JSON.parse(event.body);
  //  Parameters to be saved on the DynamoDB created. This has two main 'keys': TableName (name of our dynamodb table) and 'Item'.
  const product = {
    //  Name of our DynamoDB Table
    TableName: process.env.productsTableName,
    // The attributes of the item to be created on DB
    Item: {
      // The author ID
      productName: data.name,
      // The author ID
      productId: data.id,// A unique uuid
      // The content data
      productPrice: data.price,// Parsed from request body
      // The attachment data
      productQuantity: data.quantity,// Parsed from request body
      // The date created
      createdAt: Date.now(), // Current Unix timestamp
    },
  };
  // Saves this to the database
  await dynamoDb.put(product);
  // Returns the Item dict
  return product.Item;
});