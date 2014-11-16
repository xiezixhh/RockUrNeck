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

WebPage.query =  function (callback){
    MongoClient.connect(setting.url, {native_parser:true}, function (err,db){
        if (err){
            mongodb.close()
            return cb(err)
        }
        db.collection('webp', function(err, collection){
            if(err){
                db.close()
                return callback(err, null)
            }
            collection.find({}, function (err, webps){
                if(!webps){
                    return callback(null, null)
                }
                webps.toArray(function (err, webArray){
                    if (err){
                        db.close()
                        return callback(err, null)
                    }else{
                        db.close()
                        return callback(null, webArray)
                    }
                })
            })
        })
    })
}

modules.exports = WebPage