const path = require("path");

module.exports = {
    mode: "production",
    entry: "./src/index.ts",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        libraryTarget: "umd"
    },
    resolve: {
        extensions: ['.ts', '.tsx'],
    },
    externals: {
        react: 'react',
        "styled-components": {
            commonjs: "styled-components",
            commonjs2: "styled-components",
            amd: "styled-components",
        }
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                use: ['ts-loader'],
                exclude: /node_modules/
            }
        ],
    }
}
