## count-views-test

Count views of a specific product [test task]

Stack: Node, Express, MongoDB, Mongoose

DEV: http://localhost:9000

### Deploy

```shell script
git clone https://happyman125/count-view-node-temp
cd ./count-view-node-temp
nvm use 14
npm i
```

### Environment variables

The `.env` file is required. See the [.env.example](.env.example) for details.

### Launch

```shell script
npm run dev
```

### Available APIs

There are two available APIs:

- **POST** `/api/views`

  This API allows you to create a new View Count record. You should send the following data structure with your request:

  ```json
  {
    "productId": "string",
    "userId": "string"
  }
  ```

  You should receive the similar `200` response if everything is fine:

  ```json
  {
    "datetime": 1605720365290,
    "info": "OK",
    "request": "/api/views [POST]",
    "status": 200,
    "data": {
      "_id": "5fb5592de2c96f92f6267d53",
      "productId": "255",
      "userId": "899",
      "viewDate": "2020-11-18T17:26:05.229Z",
      "created": "1605720365229",
      "updated": "1605720365229",
      "__v": 0
    }
  }
  ```

  You should receive a `400` response if you are missing any data in your `POST` request:

  ```json
  {
    "datetime": 1605723114017,
    "info": "MISSING_DATA",
    "request": "/api/views [POST]",
    "status": 400
  }
  ```

- **GET** `/api/views/{productId}?start={startDate}&end={endDate}`

  This API allows you to access the view counts for the specific product.

  You should specify the following values in your `GET` request:

  - `productId` - a target product ID
  - `start` - optional query parameter, the starting date (format: `YYYY-MM-DD`, example: `2020-11-01`)
  - `end` - optional query parameter, the ending date (format: `YYYY-MM-DD`, example: `2020-12-31`)

  This is an example of a `GET` request that you can send:

  `/api/views/255?start=2020-01-15&end=2020-12-10`

  You should receive a `200` response with the view counts:

  ```json
  {
    "datetime": 1605723914685,
    "info": "OK",
    "request": "/api/views/255?start=2020-01-15&end=2020-12-10 [GET]",
    "status": 200,
    "data": {
      "productId": "255",
      "totalCount": 11,
      "uniqueCount": 5
    }
  }
  ```

Please note, **this server was created purely for the app functionality demonstration and testing purposes**.
