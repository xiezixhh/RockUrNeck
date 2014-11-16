var setting = require('../setting')
var mongodb = require('./db')
var MongoClient = require('mongodb').MongoClient

function Game(maxAngle, step, duration) {
    this.maxAngle = maxAngle // int
    this.step = step // int
    this.duration = duration // seconds
    this.date = new Date() // format: class Date
}

Game.save = function (maxAngle, step, duration, cb) {
    MongoClient.connect(setting.url, {native_parser: true}, function(err, db) {
        if (err) {
            mongodb.close()
            return cb(err)
        }
        var game = new Game(maxAngle, step, duration)
        db.collection('game', function(err, collection) {
            if (err) { 
                mongodb.close()
                return cb(err)
            }
            collection.insert(game, {safe:true}, function(err, result) {
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

Game.query =  function (callback){
    MongoClient.connect(setting.url, {native_parser:true}, function (err,db){
        if (err){
            mongodb.close()
            return cb(err)
        }
        db.collection('game', function(err, collection){
            if(err){
                db.close()
                return callback(err, null)
            }
            collection.find({}, function (err, games){
                if(!games){
                    return callback(null, null)
                }
                games.toArray(function (err, gameArray){
                    if (err){
                        db.close()
                        return callback(err, null)
                    }else{
                        db.close()
                        return callback(null, gameArray)
                    }
                })
            })
        })
    })
}
module.exports = Game