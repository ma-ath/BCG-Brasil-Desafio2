// Import the AWS-SDK
import AWS from "aws-sdk";

// Instantiate a client object of type AWS.DynamoDB.DocumentClient()
const client = new AWS.DynamoDB.DocumentClient();

// Export a "default" class with methods for database access in AWS DynamoDB
export default
{
  // Get method
  get: (params) => client.get(params).promise(),
  // Put method
  put: (params) => client.put(params).promise(),
  // Query method
  query: (params) => client.query(params).promise(),
  // Update method
  update: (params) => client.update(params).promise(),
  // Delete method
  delete: (params) => client.delete(params).promise(),
};