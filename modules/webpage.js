var setting = require('../setting')
var mongodb = require('./db')
var MongoClient = require('mongodb').MongoClient

function WebPage(host) {
    this.host = host
    this.freq = 0
    this.date = new Date()
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
            collection.findOne({host:host}, function (err, result){
            	if (err){
            		db.close()
            		return 	callback (err, null)
            	}
            	if (!result){
            	collection.insert(web, {safe:true}, function(err, result) {
	                if (err) {
	                    mongodb.close()
	                    return cb(err)
	                }
	                mongodb.close()
	                return cb(null, result[0])
	            })
            }
            })
            
        })
    })
}

WebPage.updateLast =  function (host, callback){
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
            collection.update({host:host}, {$inc : {freq:1}}, function (err, count){
                if(err){
                	db.close()
                    return callback(err, null)
                }
                db.close()
                return callback(null, count)                
            })
        })
    })
}

WebPage.query =  function (host, callback){
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
            collection.find({host:host}, function (err, webps){
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
            collection.find({}, function (err, docs){
                if(!docs){
                    return callback(null, null)
                }
                docs.toArray(function (err, data){
                    if (err){
                        db.close()
                        return callback(err, null)
                    }else{
                        db.close()
                        return callback(null, data)
                    }
                })
            })
        })
    })
}

modules.exports = WebPage
