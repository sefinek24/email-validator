const path = require('path');

module.exports = {
	entry: './src/index.js',
	mode: 'production',
	output: {
		filename: 'email-validator.js',
		path: path.resolve(__dirname, 'dist'),
	},
	devtool: 'source-map',
};