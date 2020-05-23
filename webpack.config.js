const path = require("path");
const nodeExternals = require("webpack-node-externals");
const {NODE_ENV = "production"} = process.env;

module.exports = {
	entry: "./build-server/server.js",
	mode: NODE_ENV,
	target: "node",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "server.js",
	},
	resolve: {
		extensions: [".js"],
	},
	externals: NODE_ENV === "development" ? [nodeExternals()] : [],
};
