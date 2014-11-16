var mongodb = require('./db')
var MongoClient = require('mongodb').MongoClient

function Handler(){

}

module.exports = Handler

Handler.createCollection = function createCollection(callback){
	MongoClient.connect("mongodb://localhost:27017/neckcare", {native_parser:true}, function (err, db){
		if(err){
			mongodb.close()
			return callback(err, null);
		}
		db.createCollection('Records', function (err, collection){
			if (err){
				db.close()
				return callback(err, null)
			}else{
				db.createCollection('Game', function (errGame, gameCollection){
					if (err){
						db.close()
						return callback(errGame, null)
					}
					else{

					}
				})
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

Handler.insertRecord = function insertRecord(newRecord, callback){
	MongoClient.connect("mongodb://localhost:27017/neckcare", {native_parser:true}, function (err, db){
		if(err){
			mongodb.close()
			return callback(err, null);
		}
		db.collection('Records',{strict:true}, function (err, collection){
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

Handler.insertGameRec = function insertGameRec (newGameRec, callback){
	MongoClient.connect("mongodb://localhost:27017/neckcare", {native_parser:true}, function (err,db){
		if (err){
			mongodb.close()
			return callback(err, null)
		}
		db.collection('Game', function (err, collection){
			if (err){
				db.close()
				return callback(err, null);
			}
			collection.insert(newGameRec, {safe : true}, function (err, record){
				if (err){
					db.close();
					return callback(err, null)
				}else{
					db.close()
					return callback(nulll, record[0]);
				}
			})
		})
	})
}