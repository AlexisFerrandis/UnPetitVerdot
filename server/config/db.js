const mongoose = require("mongoose");

mongoose
	.connect(`mongodb+srv://${process.env.DB_USER_PASS}@unpetitverdot.k3synfu.mongodb.net/?retryWrites=true&w=majority`, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("Connected to MongoDB"))
	.catch((err) => console.log("Fail to connect to mongoDb", err));
