require("dotenv").config({ path: "./config/.env" });

module.exports = (req, res, next) => {
	// if multiple domains
	const corsWhitelist = [`${process.env.CLIENT_URL}`];
	if (corsWhitelist.indexOf(req.headers.origin) !== -1) {
		res.setHeader("Access-Control-Allow-Origin", req.headers.origin);
	}

	res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization, X-Custom-Header");
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
	res.setHeader("Access-Control-Allow-Credentials", "true");

	next();
};
