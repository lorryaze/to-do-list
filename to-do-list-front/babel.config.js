/*{
  "presets": [
    ["@babel/preset-env", { "targets": { "esmodules": true } }],
    ["@babel/preset-react", { "runtime": "automatic" }],
    ["@babel/plugin-syntax-jsx"]
  ]
}
require("@babel/core").transformSync("code", {
  plugins: [
    ["@babel/plugin-syntax-jsx"],
    ["@babel/preset-env", { targets: { esmodules: true } }],
    ["@babel/preset-env", { targets: { esmodules: true } }],
  ],
});*/
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          chrome: "58",
          ie: "11",
        },
        useBuiltIns: "usage",
        corejs: 3,
      },
    ],
    ["@babel/preset-react", { runtime: "automatic" }],
    //"@babel/preset-react"
  ],
  //rootDir: "./to-do-list-front",
};

require("@babel/core").transformSync("code", {
  plugins: [
    ["@babel/plugin-syntax-jsx"],
    //["@babel/preset-env", { targets: { esmodules: true } }],
  ],
});
