'use strict';

const yelp = require('yelp-fusion');
const client = yelp.client('mqjIyyel9uxk9y9Lzfpb3mtk9atPVJe0VO5TiaxSn_3k54euZfr4MIQM7b0dtE9x9ytbkQnioDzx8hoLtYH7rNg71F8spf-zb0jRkX-Ds--d7vWFAg_LYk_M2RCrXnYx');

client.search({
  term: 'Ice Cream',
  location: 'atlanta, ga',
  radius: 40000,
  limit: 5,
  sort_by: 'rating'
}).then(response => {
  //console.log(response.jsonBody.businesses);
  console.log('Search Term: Ice Cream (Based on Autocomplete Call)')
  console.log('Location: Atlanta, Ga')
  console.log('Sort By: Rating')
  console.log('Other: 40 km Radius and Limit of 5')
  console.log('-------------------------------------------------------------------------\n')
  let results = response.jsonBody.businesses;
  for (let i = 0; i < results.length; i++ ) {
    let result = results[i].name + '\n';
    result += 'Alias: ' + results[i].alias + '\n';
    result += 'Rating: ' + results[i].rating + '\n';
    result += 'Review Count: ' + results[i].review_count + '\n';
    result += 'Price: ' + results[i].price + '\n';
    result += 'Distance: ' + results[i].distance.toFixed(0) + ' m\n';
    result += 'Address: ' + results[i].location.address1;
    result += ', ' + results[i].location.city;
    result += ', ' + results[i].location.state + '\n';
    result += 'Phone: ' + results[i].display_phone + '\n\n';
    console.log(result)
  }
}).catch(e => {
  console.log(e);
});
