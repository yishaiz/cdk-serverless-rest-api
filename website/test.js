console.log('This is a test file for the serverless REST API project.');

const url =
  'https://.execute-api.us-east-1.amazonaws.com/prod/empl?id=bffc6492-9c79-49dd-be7f-971481715ef4';

fetch(url, {
  method: 'GET',
}).then((response) => {
  console.log(response);
});

const tsUrl =
  'https://.execute-api.us-east-1.amazonaws.com/prod/empl?id=bffc6492-9c79-49dd-be7f-971481715ef4';

fetch(tsUrl, {
  method: 'GET',
}).then((response) => {
  console.log(response);
});
