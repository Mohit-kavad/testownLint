import { AstPath, Doc, doc } from "prettier";

const { group, indent, join, line, softline } = doc.builders;
console.log("hi there");
module.exports = {
  languages: [
    {
      name: "customJS",
      parsers: ["babel"],
    },
  ],
  parsers: {
    customJS: {
      parse: (text: string) => {
        console.log("🚀 ~ file: newplug.js:7 ~ text:", text);

        const newValue = text.replace(/simform/g, "simformsolutions");
        return newValue;
      },
      astFormat: "customJS",
    },
  },
  printers: {
    customJS: {
      print: (path: AstPath, options: any, print: any) => {
        const node = path.getNode();

        console.log("🚀 ~ file: newplug.js:27 ~ node:", node);
        // switch (node.type) {
        //   case "list":
        //     return group([
        //       "(",
        //       indent([softline, join(line, path.map(print, "elements"))]),
        //       softline,
        //       ")",
        //     ]);

        //   case "pair":
        //     return group([
        //       "(",
        //       indent([softline, print("left"), line, ". ", print("right")]),
        //       softline,
        //       ")",
        //     ]);

        //   case "symbol":
        //     return node.name;
        // }
      },
    },
  },
  options: {
    openingBraceNewLine: {
      type: "boolean",
      category: "Global",
      default: true,
      description: "Move open brace for code blocks onto new line.",
    },
  },
  defaultOptions: {
    tabWidth: 4,
  },
};
