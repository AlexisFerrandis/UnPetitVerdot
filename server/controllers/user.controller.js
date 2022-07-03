const UserModel = require("../models/user.model");
const ObjectId = require("mongoose").Types.ObjectId;

module.exports.userInfo = (req, res) => {
	if (!ObjectId.isValid(req.params.id)) return res.status(400).send("ID unknown : " + req.params.id);

	UserModel.findById(req.params.id, (err, data) => {
		if (!err) res.send(data);
		else console.log("Id unknown : " + err);
	}).select("-password");
};
