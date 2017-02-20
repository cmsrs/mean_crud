    var express = require("express"),
    router = express.Router(),
    user = require("../models/user.js");
     
    router.get("/", function(req, res) {
		//console.log("Jestem w get!!");
		user.find({}, function(err, data) {
			if (err) {
				res.send("err");
				return;
			}
			//console.log( data );
			res.send(data);
		});
    }).get("/:id", function(req, res) {
		var id = req.params.id;
		user.find({ _id: id }, function(err, data) {
			if (err) {
				res.send("err");
				return;
			}
			//console.log( data );
			res.send(data[0]);
		});
    }).post("/", function(req, res) {

		//console.log("Jestem w post!!");
	    var obj = req.body;
		//console.log( obj );
		var model = new user(obj);
		model.save(function(err) {
		if (err) {
			res.send("err");
			return;
		}
		res.send("created");
		});
    }).put("/:id", function(req, res) {
		var id = req.params.id;
		var obj = req.body;
     
		user.findByIdAndUpdate(id, {first_name: obj.first_name,  last_name: obj.last_name , age: obj.age  , first_name_mother: obj.first_name_mother , first_name_father:obj.first_name_father }, 
			function(err) {
				if (err) {
					res.send("err");
					return;
			}
			res.send("updated");
		});
    }).delete("/:id", function(req, res) {
		var id = req.params.id;
		user.findByIdAndRemove(id, function(err) {
		if (err) {
			res.send("err");
			return;
		}
		res.send("deleted");
		});
    }).purge("/", function(req, res) {
		user.remove({}, function(err, data) {
			if (err) {
				res.send("err");
				return;
			}
			res.send("delete_all");
		});
    });
     
    module.exports = router;
