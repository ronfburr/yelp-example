'use strict';

const yelp = require('yelp-fusion');
const client = yelp.client('mqjIyyel9uxk9y9Lzfpb3mtk9atPVJe0VO5TiaxSn_3k54euZfr4MIQM7b0dtE9x9ytbkQnioDzx8hoLtYH7rNg71F8spf-zb0jRkX-Ds--d7vWFAg_LYk_M2RCrXnYx');

client.reviews('jenis-splendid-ice-creams-atlanta').then(response => {
  console.log(response.jsonBody.reviews[0]);
}).catch(e => {
  console.log(e);
});
