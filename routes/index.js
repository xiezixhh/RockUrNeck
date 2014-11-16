var express = require('express');
var router = express.Router();

var lasturl = null

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res) {
    // console.log(req.body)
    var data = req.body
    if (lasturl != data.url) {

        // insert both lasturl and new url
        // after that
        lasturl = data.url
    } else {

    }

    // return res.send(new Date())
})

router.get('/relax', function(req, res) {
    res.render('control')
})

router.post('/game', function(req, res) {

})

router.post('/visual', function(req, res) {
    var gamedata, webdata;
    /* query game data */ 
    gamedata = gamedata.slice(0, 8)
    /* query web set data */ 
    var sum = 0;
    for (i = 0; i < webdata.length; i++) {
        sum += webdata[i].freq
    }
    for (int i = 0; i < webdata.length; i++) {
        webdata.freq = webdata.freq * 1.0 / sum
    }
    var all = {
        web: webdata,
        game: gamedata
    }
    return res.send(all)
    // return res.send('success')
})

module.exports = router;
