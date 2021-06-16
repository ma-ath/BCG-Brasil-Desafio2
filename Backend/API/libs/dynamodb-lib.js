// Import the AWS-SDK
import AWS from "aws-sdk";

// Instantiate a client object of type AWS.DynamoDB.DocumentClient()
const client = new AWS.DynamoDB.DocumentClient();

// Function that handles errors
function err_handler(err, data) {
  if (err) {
      console.error("Unable to run lambda function. Error JSON:", JSON.stringify(err, null, 2));
  }else{
      // print success
      console.log("Success:", JSON.stringify(data));
  }
}

// Export a "default" class with methods for database access in AWS DynamoDB
export default
{
  // Get method
  get: (params) => client.get(params, err_handler).promise(),
  // Put method
  put: (params) => client.put(params, err_handler).promise(),
  // Query method
  query: (params) => client.query(params, err_handler).promise(),
  // Update method
  update: (params) => client.update(params, err_handler).promise(),
  // Delete method
  delete: (params) => client.delete(params, err_handler).promise(),
  // Scan for all data
  scan: (params) => client.scan(params, err_handler).promise(),
};