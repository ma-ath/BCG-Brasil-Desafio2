import handler from "../../libs/handler-lib";
import dynamoDb from "../../libs/dynamodb-lib";

export const main = handler(async (event, context) => {
  const data = JSON.parse(event.body);
  const product = {
    TableName: process.env.productsTableName,
    // 'Key' defines the partition key and sort key of the item to be retrieved
    Key: {
      productName: data.name // The id of the author
    },
  };

  const result = await dynamoDb.get(product);
  if (!result.Item) {
    throw new Error("Item not found.");
  }

  // Return the retrieved item
  return result.Item;
});