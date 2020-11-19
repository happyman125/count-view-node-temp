const { Router } = require('express');

const createView = require('./create-view.controller');
const getViews = require('./get-views.controller');

const router = Router();

router.get('/:id', getViews);
router.post('/', createView);

module.exports = router;
