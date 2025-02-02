const path = require('path');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
  entry: './background.js', // Entry point (replace with your entry file)
  output: {
    path: path.resolve(__dirname + "/dist"), // Output folder
    filename: 'bundle.js', // Output file
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'], // Transpile JS for compatibility
          },
        },
      },
    ],
  },
  plugins: [
    new NodePolyfillPlugin()
  ],
  resolve: {
    fallback: {
        fs: false, // If you don't need fs, you can set it to false
        https: require.resolve('https-browserify'),
        http: require.resolve('stream-http'),
        url: require.resolve('url/'),
        stream: require.resolve('stream-browserify'),
        util: require.resolve('util/'),
        zlib: require.resolve('browserify-zlib')
      },
  },
  mode: 'production', // For production
};
