import handler from "./libs/handler-lib";
import dynamoDb from "./libs/dynamodb-lib";

export const main = handler(async (event, context) => {
  const data = JSON.parse(event.body);
  const params = {
    TableName: process.env.productsTableName,
    // 'KeyConditionExpression' defines the condition for the query
    // - 'productName = :productName': only return items with matching 'productName'
    //   partition key
    KeyConditionExpression: "productName = :productName",
    // 'ExpressionAttributeValues' defines the value in the condition
    // - ':productName': defines 'productName' to be the name of the product
    ExpressionAttributeValues: {
      ":productName": data.name,
    },
  };

  const result = await dynamoDb.query(params);

  // Return the matching list of items in response body
  return result.Items;
});