const express = require('express');
const objectsController = require('../controllers/objects');

const router = express.Router();

router.post('/create-person', objectsController.createPerson);

module.exports = router;
