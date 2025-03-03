const sharetribeIntegrationSdk = require('sharetribe-flex-integration-sdk');
require('dotenv').config();

const integrationSdk = sharetribeIntegrationSdk.createInstance({
  clientId: process.env.SHARETRIBE_INTEGRATION_SDK_CLIENT_ID,
  clientSecret: process.env.SHARETRIBE_INTEGRATION_SDK_CLIENT_SECRET,
});

//id is first param
const listingId = process.argv[2];

if (!listingId) {
  console.error('ERROR - id is required');
  process.exit(1);
}

integrationSdk.stock.compareAndSet({
  listingId,
  oldTotal: 0,
  newTotal: 1,
}).then((response) => {
  console.log('Success');
  console.log('---');
  console.log(response);
}).catch((error) => {
  console.error('Failed', error)
});
