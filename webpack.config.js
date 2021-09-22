const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
	entry: "./src/index.js",
	mode: "development",
	devtool: "inline-source-map",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"),
		clean: true
	},
	devServer: {
		static: "./dist"
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "github os",
			template: "./src/public/index.html"
		})
	],
	resolve: {
		extensions: [".jsx",".js", ".json"],
		mainFiles: ["index"]
	},
	module: {
		rules: [
			{
				test: /\.less$/,
				use: [{
					loader: "style-loader" // creates style nodes from JS strings
				}, {
					loader: "css-loader" // translates CSS into CommonJS
				}, {
					loader: "less-loader", // compiles Less to CSS
					options: {
						lessOptions: {
							modifyVars: { "@primary-color": "#1DA57A" },
							javascriptEnabled: true,
						},
					},
				}]
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: ["@babel/preset-env"]
						}
					}
				]
			}
		]
	}
};