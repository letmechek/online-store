const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cors = require('cors')
const ensureLoggedIn = require('./config/ensureLoggedIn');

require('dotenv').config()
require('./config/database')

const app = express();
// const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)

app.use(logger('dev'));
app.use(express.json());
app.use(cors())
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))
app.use(express.static(path.join(__dirname, 'build')))

app.use(require('./config/checkToken'))


app.use('/api/users', require('./routes/api/users'))
app.use('/api/products', require('./routes/api/products'))
app.use('/v1/completions', require('./routes/api/support'))
app.use('/create-checkout-session', require('./routes/api/checkout'))
app.use('/api/orders/success', require('./routes/api/checkout'))
app.use('/api/orders', ensureLoggedIn, require('./routes/api/orders'));




app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

const port = process.env.PORT || 3001

app.listen(port, function() {
    console.log(`Express app running on port ${port}`)
});