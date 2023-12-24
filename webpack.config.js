const path = require('path');

module.exports = {
	entry: './src/index.js',
	mode: 'production',
	output: {
		filename: 'validator.js', // Nazwa pliku wynikowego
		path: path.resolve(__dirname, 'dist'), // Ścieżka do folderu wyjściowego
		library: 'emailValidator', // Nazwa globalnego obiektu
		libraryTarget: 'window', // Docelowe środowisko (globalne dla przeglądarki)
	},
	devtool: 'source-map',
};