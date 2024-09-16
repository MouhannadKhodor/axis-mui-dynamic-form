const path = require("path");

module.exports = {
  entry: "./src/index.js", // Path to your main file
  output: {
    path: path.resolve(__dirname, "dist"), // Output folder for the bundle
    filename: "index.js",
    libraryTarget: "umd", // UMD format for compatibility
    globalObject: "this",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Transpile JS and JSX
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/, // For handling CSS files
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  externals: {
    // External dependencies won't be bundled with your package
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "react",
      root: "React",
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "react-dom",
      root: "ReactDOM",
    },
  },
};
