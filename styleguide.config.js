const fs = require('fs');
const path = require('path');

function resolve(...paths) {
    return fs.realpathSync(path.join(__dirname, ...paths));
}

module.exports = {
	styleguideDir: './docs',
	components: 'src/components/**/[A-Z]*.js',
	styleguideComponents: {
			Wrapper: resolve('./Wrapper.js'),
	},
	webpackConfig: {
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					loader: 'babel-loader',
				},
				{
					test: /\.css$/,
					loader: 'style-loader!css-loader',
				},
			],
		},
	},
};
