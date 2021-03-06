'use strict';

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.goodbye = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Goodbye'
      },
      null,
      2
    ),
  };
};
module.exports.submit = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'This is a post route',
      input: event,
    }),
  };

  callback(null, response);

};