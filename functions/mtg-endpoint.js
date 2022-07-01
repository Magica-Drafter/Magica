const fetch = require('node-fetch');
require('dotenv').config();

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
};

exports.handler = async ({ 
  // we can destructure from the argument like so
  queryStringParameters: { 
      types, 
      setName,
      colorIdentity,
     }
    }) => {
  try {
    // as long as the newlines don't break the API, i'd prefer to see the key/vals on separate lines for readability/maintainability
    const response = await fetch(
      `https://api.magicthegathering.io/v1/cards?
        pageSize=15
        &contains=imageUrl 
        &types=${types}
        &setName=${setName}
        &colorIdentity=${colorIdentity}
        &random=true`
    );
    const data = await response.json();
    const json = JSON.stringify(data);

    return {
      statusCode: 200,
      headers,
      body: json,
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};
