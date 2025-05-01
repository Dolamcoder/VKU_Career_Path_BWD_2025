require('dotenv').config();
const express = require('express');
const app = express();
const path=require('path');
const port =process.env.port || 3000;
const host_name=process.env.host_name;
const configViewEngine=require('./config/viewEngine');
const webRoute = require('./routes/web');
configViewEngine(app);
//khai bao router
app.use('/', webRoute);
app.listen(port, host_name, () => {
  console.log(`Example app listening on port ${port}`)
});