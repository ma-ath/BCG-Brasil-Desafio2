//  Deleta um produto do banco de dados
//
//  Cada produto possui: productName, productId, productPrice & productQuantity
//

import handler from "./libs/handler-lib";
import dynamoDb from "./libs/dynamodb-lib";

export const main = handler(async (event, context) => {
  const data = JSON.parse(event.body);
  const product = {
    TableName: process.env.productsTableName,
    // 'Key' defines the partition key and sort key of the item to be removed
    Key: {
      productName: data.name, // The name of the product
      productId: data.id,     // The id of the product
    },
  };

  await dynamoDb.delete(product);

  return { status: true };
});