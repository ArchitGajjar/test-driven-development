/**
 * @NOTES:
 * 1. React Presets provides support for JSX elements.
 * 2. React Presets env provides support for all new JavaScript features enabled in ES2015(ES6).
 * 3. Babel cli provides support to compile JSX code and transpiled into normal executable JS.
 * (e.g. import statement converts into requires).
*/
module.exports = {
  presets: ["@babel/preset-react", "@babel/preset-env"]
}