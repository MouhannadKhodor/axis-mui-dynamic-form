const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js", // Path to the main file to bundle
  output: {
    path: path.resolve(__dirname, "dist"), // Directory where the output file will be placed
    filename: "index.js", // Name of the output file
    libraryTarget: "umd", // Universal Module Definition pattern for the output
    globalObject: "this", // Ensures compatibility with both browser and Node environments
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Matches both .js and .jsx files
        exclude: /node_modules/, // Excludes the node_modules directory
        use: {
          loader: "babel-loader", // Uses babel-loader to transpile JavaScript files
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"], // Presets for modern JS and React
          },
        },
      },
      {
        test: /\.css$/, // Matches .css files
        use: ["style-loader", "css-loader"], // Uses style-loader and css-loader to handle CSS
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // Automatically resolve these extensions
  },
  externals: {
    react: {
      commonjs: "react", // Configuration for CommonJS
      commonjs2: "react", // Configuration for CommonJS2
      amd: "react", // Configuration for AMD
      root: "React", // Global variable for UMD
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "react-dom",
      root: "ReactDOM",
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV), // Define plugin to set NODE_ENV
    }),
  ],
};
