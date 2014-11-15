var setting = require('../setting')
var mongodb = require('./db')
var MongoClient = require('mongodb').MongoClient

function User(name) {
	this.name = name
}

function Handler() {

}


Handler.createCollection = function (callback){
	MongoClient.connect(setting.url, {native_parser:true}, function (err, db){
		if(err){
			mongodb.close()
			return callback(err, null);
		}
		db.createCollection('records', function (err, collection){
			if (err){
				db.close()
				return callback(err, null)
			}else{
				// db.collection('Records',{strict:true}, function (err, collection){
				// 	if (err){
				// 		db.close()
				// 		return callback(err, null)
				// 	}

				// 	collection.insert(newRecord, {safe : true}, function (err,record){
				// 		if (err){
				// 			db.close()
				// 			return callback(err, null)
				// 		}else {
				// 			db.close()

				// 			return callback(null, record[0])
				// 		}
				// 	})
				// })

				db.close()

			}
		})
	})
}

Handler.insertRecord = function (newRecord, callback){
	MongoClient.connect(setting.url, {native_parser:true}, function (err, db){
		if(err){
			mongodb.close()
			return callback(err, null);
		}
		db.collection('records',{strict:true}, function (err, collection){
			if (err){
				db.close()
				return callback(err, null)
			}

			collection.insert(newRecord, {safe : true}, function (err,record){
				if (err){
					db.close()
					return callback(err, null)
				}else {
					db.close()
					return callback(null, record[0])
				}
			})
		})
	})	
}

module.exports = Handler
