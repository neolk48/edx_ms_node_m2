const express = require('express');
const logger = require('morgan');
const errorhandler = require('errorhandler');
const bodyParser = require('body-parser');
const routes = require('./routes');

let app = express();

app.use(bodyParser.json());
app.use(logger('dev'));
app.use(errorhandler());

routes.initPosts(app);
routes.initComments(app);

app.listen(3000);
