// Function that encapsulates default behaviours of lambda functions.

export default function handler(lambda)
{
  // async function
  return async function (event, context)
  {
    let body, statusCode;
    let CORS = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    };
    try{
      // Run the Lambda function and waits for its response. Lambda return goes to the body argument
      body = await lambda(event, context);
      // Returns 200, which is the default HTTP response for 'OK'
      statusCode = 200;
    }
    catch (e){
      // If and error occurs, catchs this error and return it in the 'body' argument;
      body = { error: e.message };
      // Returns status code 500, which is the default HTTP response for 'Internal Server Error'
      statusCode = 500;
    }
      // Return the HTTP response from the server
    return{
      statusCode,                                 //Status code
      body: JSON.stringify(body),                 //Lambda return
      headers: CORS,                              //CORS headers for Lambda function response (Cross-Origin Resource Sharing)
    };
  };
}