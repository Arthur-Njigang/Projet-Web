const express = require('express');
const router = new express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Afrifoods' });
});

/* GET home page. */
router.get('/Page', (req, res, next) => {
  res.render('Afri-foods', { title: 'Afrifoods' });
});

module.exports = router;
