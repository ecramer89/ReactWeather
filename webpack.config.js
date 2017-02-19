/* config file for webpack allows us to pass in various middling tools to the webpack main transform command */
//when we write a config file the webpack command on terminal (available because of global) will automatically apply the commands that we previously placed on command lin e(i.e., webpack entrypoint and endpoint)
//the config file also enables us to specify more complicated dirctives, suchas the babelloader
var webpack = require('webpack');

module.exports = {
  entry: [
    //script! == modulename! (name of a special loader that we loaded with npm)
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  //externals: set of kvp pairs, where key is module name and value is name we want available in our modules
  externals: {
    jquery: 'jQuery'
  },
  //plugins allow us to make symbols from an external module available to our other scripts without needing to explicitly load in themodule each time (webpack will lookup the def in the required modules for us)
  plugins: [
    new webpack.ProvidePlugin({
      //key: variable name to watch for
      //value: module to replace it with
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {//allows us to require named components without having to speicfy the entire file path
    },
    extensions: ['','.js', '.jsx'],
    alias: {
      Main: "app/components/Main.jsx",
      Navigation: "app/components/Navigation.jsx",
      Weather: "app/components/Weather.jsx",
      WeatherForm: "app/components/WeatherForm.jsx",
      WeatherMessage: "app/components/WeatherMessage.jsx",
      About: "app/components/About.jsx",
      Examples: "app/components/Examples.jsx",
      OpenWeatherMap: "app/api/openWeatherMap.js"
    } //...sothe alias... needs to omit the first forward slash. not sure wh
  },

  module: {
    loaders: [
      {
      loader: 'babel-loader',
      query: { //need stage-0 in order to use experimental es6 features such as object spread
        presets: ['react', 'es2015', 'stage-0']
      },
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
