var setting = require('../setting')
var mongodb = require('./db')
var MongoClient = require('mongodb').MongoClient

function WebPage(host) {
    this.host = host
    this.freq = 0
    this.date = []
}


WebPage.save = function (host, cb) {
    MongoClient.connect(setting.url, {native_parser: true}, function(err, db) {
        if (err) {
            mongodb.close()
            return cb(err)
        }
        var web = new WebPage(host)
        db.collection('webp', function(err, collection) {
            if (err) { 
                mongodb.close()
                return cb(err)
            }
            collection.insert(web, {safe:true}, function(err, result) {
                if (err) {
                    mongodb.close()
                    return cb(err)
                }
                mongodb.close()
                return cb(null, result[0])
            })
        })
    })
}


