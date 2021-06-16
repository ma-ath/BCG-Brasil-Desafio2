//  Lambda function that updates a product state in the DB
//
//  Cada produto possui: productName, productId, productPrice & productQuantity
//

import handler from "./libs/handler-lib";
import dynamoDb from "./libs/dynamodb-lib";

export const main = handler(async (event, context) => {
  const data = JSON.parse(event.body);
  const product = {
    TableName: process.env.productsTableName,
    // 'Key' defines the partition key and sort key of the item to be updated
    Key: {
      productName: data.name, // The name of the product
      productId: data.id, // The id of the product from the path
    },
    // 'UpdateExpression' defines the attributes to be updated
    // 'ExpressionAttributeValues' defines the value in the update expression
    UpdateExpression: "SET productPrice = :price, productQuantity = :quantity",
    ExpressionAttributeValues: {
      ":price": data.price || null,
      ":quantity": data.quantity || null,
    },
    // 'ReturnValues' specifies if and how to return the item's attributes,
    // where ALL_NEW returns all attributes of the item after the update; you
    // can inspect 'result' below to see how it works with different settings
    ReturnValues: "ALL_NEW",
  };

  await dynamoDb.update(product);

  return { status: true };
});
