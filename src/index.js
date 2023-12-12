require('dotenv').config();

const express = require('express');
require('express-async-errors');

const cors = require('./app/middlewares/cors');
const routes = require('./routes');
const errorHandlers = require('./app/middlewares/errorHandlers');

const app = express();

app.use(express.json());
app.use(cors);
app.use(routes);
app.use(errorHandlers);

app.listen(3001, () => console.log('Server started at http://localhost:3001'));
