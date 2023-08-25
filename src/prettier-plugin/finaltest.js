const prettierPluginBabel = require("prettier/plugins/babel"); // Import the babel plugin properly

// Define the languages supported by your plugin
const languages = [
  {
    // The language name
    name: "customJs",
    // Parsers that can parse this language.

    parsers: ["customJs-parser"],
  },
];
console.log("🚀 ~ file: finaltest.js:13 ~ languages:", languages);

// Define your custom parser
const myCustomParser = {
  parsers: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    "customJs-parser": {
      async parse(text) {
        console.log("🚀 ~ parse ~ text:", text);
        const ast = await prettierPluginBabel.parsers.babel.parse(text);

        return ast;
      },
      astFormat: "estree",
    },
  },
};

// Define your custom printer
const customPrinter = {
  customPrinter: {
    print(path, options, print) {
      console.log("🚀 ~ file: finaltest.js:34 ~ print ~ print:", print);
      console.log("🚀 ~ file: finaltest.js:34 ~ print ~ options:", options);
      console.log("🚀 ~ print ~ path:", path);
    },
  },
};

// Export the plugin configuration
module.exports = {
  languages,
  parsers: myCustomParser.parsers, // Use myCustomParser.parsers instead of wrapping it in an object
  printers: customPrinter.customPrinter, // Use customPrinter.customPrinter instead of wrapping it in an object
};
