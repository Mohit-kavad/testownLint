import * as prettier from 'prettier';

//formatting custome code which tack options from .prettierrc file and text 
const formatCustomCode = async (text: string) => {
    const configPath = await prettier.resolveConfigFile(__dirname);
    const options = await prettier.resolveConfig(configPath as string);
    console.log(
        '🚀 ~ file: formatWithCustomPrettier.ts:21 ~ formatCustomCode ~ options:',
        options
    );

    return prettier.format(text, {
        ...options,
        parser: 'babel',
    });
};

export default formatCustomCode;
