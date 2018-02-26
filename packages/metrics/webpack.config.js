const slsw = require("serverless-webpack");

module.exports = {
  entry: slsw.lib.entries,
  node: {
    __filename: true,
    __dirname: true
  },
  target: "node",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: [
              "@babel/plugin-proposal-class-properties",
              "@babel/plugin-transform-runtime"
            ],
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: {
                    node: "6.10"
                  }
                }
              ]
            ]
          }
        },
        include: __dirname,
        exclude: /node_modules/
      }
    ]
  }
};
