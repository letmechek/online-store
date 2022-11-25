
const express = require('express')
const productCtrl = require('../../controllers/api/seed')
const seedRouter = express.Router();



seedRouter.get('/', productCtrl.index);

module.exports = seedRouter;
