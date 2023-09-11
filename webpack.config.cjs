const path = require('path');

module.exports = {
	entry: './src/react-dialog/index.tsx',
	resolve: {
		modules: [path.resolve(__dirname, 'src'), 'node_modules'],
	},
	output: {
		path: path.join(__dirname, 'lib'),
		filename: 'react-dialog.js',
		library: 'ReactDialog',
		libraryTarget: 'umd',
		umdNamedDefine: true,
	},
	externals: {
		react: {
			root: 'React',
			commonjs2: 'react',
			commonjs: 'react',
			amd: 'react',
		},
		'react-dom': {
			root: 'ReactDOM',
			commonjs2: 'react-dom',
			commonjs: 'react-dom',
			amd: 'react-dom',
		},
		'prop-types': {
			root: 'PropTypes',
			commonjs2: 'prop-types',
			commonjs: 'prop-types',
			amd: 'prop-types',
		},
		'styled-components': {
			commonjs: 'styled-components',
			commonjs2: 'styled-components',
			amd: 'styled-components',
		},
	},
	mode: 'development',
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						babelrc: true,
					},
				},
			},
		],
	},
};
