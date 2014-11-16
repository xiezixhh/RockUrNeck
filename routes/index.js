var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res) {
    console.log(req.body)
    return res.send(new Date())
})

router.get('/relax', function(req, res) {
    res.render('control')
})

router.post('/game', function(req, res) {

})

router.post('/visual', function(req, res) {
    console.log(req.body)
    return res.send('success')
})

module.exports = router;
