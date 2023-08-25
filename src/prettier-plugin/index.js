const prettier = require("prettier");

// custom implementation
function print(path, options, print) {
  console.log("🚀 ~ file: index.js:4 ~ formatCustomJob ~ path:", path);

  if (node.type === "StringLiteral") {
    console.log(
      "🚀 ~ file: my-prettier-plugin.js:30 ~ node.type === ",
      node.type === "StringLiteral",
    );

    node.value = node.value.replace(/"/g, "'");
    return `'${node.value}'`;
  }

  // if (path.getValue().type === 'ObjectExpression') {
  //     const properties = path.map.print(print, 'properties');

  //     return `{\n${properties.join('\n,')}\n}`;
  // }
}
console.log("custom plugin file");

/* this is an object that contains the default printer implementation for the Prettier's built-in
 languages and syntax. By spreading this object  **/
const printer = {
  ...prettier.__printer,
  print,
};

module.exports = {
  languages: [
    {
      name: "Custom Job",
      parsers: ["babel"],
      extensions: [".js", ".jsx", ".ts", ".tsx"],
      vscodeLanguageIds: ["javascript", "typescript"],
    },
  ],
  printers: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    "babel-parser-ast": printer,
  },
};
