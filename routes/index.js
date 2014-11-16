var express = require('express');
var router = express.Router();

var WebPage = require('../modules/webpage')
var Game = require('../modules/game')

var lasturl = null

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res) {
    // console.log(req.body)
    var data = req.body
    if (lasturl != data.url) {
        WebPage.save(data.url, function(err, doc) {
            if (err) {
                console.log('save url error')
                return res.send('error')
            }
            console.log('ok')
            return res.send('save url')
        })
        // insert both lasturl and new url
        // after that
        lasturl = data.url
    } else {

    }

    // return res.send(new Date())
})

router.get('/', function(req, res) {
    res.render('control')
})

router.post('/game', function(req, res) {
    var data = req.body
    Game.save(data.maxAngle, data.step, data.duration, 
        function(err, doc) {
            if (err) {
                console.log('error')
                return res.send('error')
            }
            console.log("save")
            return res.send('save')
    })
})

router.post('/visual', function(req, res) {
    var gamedata, webdata;
    /* query game data */ 
    Game.
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
