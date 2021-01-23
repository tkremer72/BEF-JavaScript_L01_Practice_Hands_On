var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Amazing U.S. Cities',
    cities: [
      {
        name: 'San Francisco',
        state: 'CA',
        population: 864816
      },
      {
        name: 'Denver',
        state: 'CO',
        population: 682545
      },
      {
        name: 'Seattle',
        state: 'Washington',
        population: 704352
      },
      {
        name: 'Portland',
        state: 'Oregon',
        population: 639863
      },
      {
        name: 'New York City',
        state: 'NY',
        population: 8.238
      },
      {
        name: 'Charlotte',
        state: 'NC',
        population: 842051
      },
      {
        name: 'Pittsburgh',
        state: 'PA',
        population: 303625
      }
    ]
  });
});

module.exports = router;
