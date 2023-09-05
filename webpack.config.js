const path = require('path');

module.exports = {
  mode: 'development', // Set the mode to 'development' or 'production'
  entry: './calc.js', // Specify your chosen entry point
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      // Add any necessary rules for your project's file types
    ],
  },
};
