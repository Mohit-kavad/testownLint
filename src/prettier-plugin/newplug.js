const babelParser = require('@babel/parser');

module.exports = {
    parsers: {
        customJS: {
            parse: (text) => {
                console.log("🚀 ~ file: newplug.js:7 ~ text:", text)
                // Directly use @babel/parser
                return babelParser.parse(text, {
                    sourceType: 'module',
                    plugins: [
                        'jsx',
                        'typescript',
                        'classProperties',
                        'javascript' /* any other plugins you want to support */,
                    ],
                });
            },
            astFormat: 'customJS',
            locStart: (node) => node.start,
            locEnd: (node) => node.end,
        },
    },
    printers: {
        customJS: {
            print: (path, options, print) => {
                const node = path.getValue();
                
                console.log("🚀 ~ file: newplug.js:27 ~ node:", node);
                
                if (node.type === 'StringLiteral') {
                    node.value = node.value.replace(/"/g, "'");
                    return `'${node.value}'`;
                }
        
                if (node.type === 'ObjectExpression') {
                    console.log("🚀 ~ file: newplug.js:36 ~ node:", node)
                    const properties = path.map.print(print, "properties");
                    return `{\n${properties.join(",\n")}\n}`;
                  }

                return path.call(print);
            },
        },
    },

};
