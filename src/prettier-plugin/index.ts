// export const customPlugin = {
//   printers: {
//     myCustomPrinter: {
//       print: (path: any, options: any, print: any) => {
//         console.log("🚀 ~ file: index.ts:5 ~ options:", options);
//         const node = path.getValue();

//         // Customize how to format arrays and objects
//         if (node.type === "ArrayExpression") {
//           return `[${node.elements.map(print).join("/n , ")}]`;
//         }
//         if (node.type === "ObjectExpression") {
//           return `{${node.properties.map(print).join("/n, ")}}`;
//         }
//         // Use the default printer for other nodes
//         return print(path);
//       },
//     },
//   },
// };

// customPlugin.ts
// interface ASTNode {
//   indentation: string;
//   content: string;
// }

// const customParser = (text: string): ASTNode[] => {
//   // Split the input text into lines
//   const lines = text.split("\n");

//   // Initialize an empty AST (Abstract Syntax Tree)
//   const ast: ASTNode[] = [];

//   // Iterate through each line and identify indentation level and content
//   for (const line of lines) {
//     const indentation = line.match(/^\s*/)![0]; // Extract leading whitespace
//     const content = line.trim(); // Remove leading/trailing whitespace

//     // Skip empty lines
//     if (content === "") {
//       continue;
//     }

//     // Add an object to the AST for each non-empty line
//     ast.push({ indentation, content });
//   }

//   return ast;
// };

// const customPrinter = (path: ASTNode[], options: any, print: any): string => {
//   // Reconstruct the formatted code using the AST
//   return path
//     .map((node) => {
//       return node.indentation + node.content;
//     })
//     .join("\n");
// };

// export const customPlugin = {
//   parsers: {
//     custom: {
//       parse: customParser,
//       astFormat: "custom",
//     },
//   },
//   printers: {
//     custom: {
//       print: customPrinter,
//     },
//   },
// };

export const customPlugin = {
  printers: {
    myCustomPrinter: {
      print: (path: any, options: any, print: any) => {
        const node = path.getValue();
        console.log("🚀 ~ file: index.ts:80 ~ node:", node);

        // Customize how to format arrays and objects
        if (node.type === "ArrayExpression") {
          return `[${node.elements.map(print).join("\n\t, ")}]`;
        }
        if (node.type === "ObjectExpression") {
          return `{${node.properties.map(print).join("\n\t, ")}}`;
        }
        // Use the default printer for other nodes
        return print(path);
      },
    },
  },
};
