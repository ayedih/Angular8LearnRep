var faker = require('faker');

var database = { products: []};

for (var i = 1; i<= 300; i++) {
  database.products.push({
    id: i,
    name: faker.commerce.productName(),
    description: faker.lorem.sentences(),
    price: faker.commerce.price(),
    imageUrl: "https://source.unsplash.com/1600x900/?product",
    quantity: faker.random.number()
  });
}

console.log(JSON.stringify(database));

/*We first imported faker, and next we defined an object with one empty array for products. Next, we entered a for loop to create 300 fake entries using faker methods like  faker.commerce.productName()  for generating product names. Check all the available methods. Finally we converted the database object to a string and logged it to standard output.*/


/* $ npm run generate : generate my database */

/* $ npm run server to run the json server as API REST :
Resources :
/products 300x
To access and modify resources, you can use any HTTP method:

GET POST PUT PATCH DELETE OPTIONS */

/* You can now send HTTP requests to the server just like any typical REST API server. Your server will be available from the  http://localhost:3000/  address. */