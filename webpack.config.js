var copy = require("copy-webpack-plugin");
var liveReload = require('webpack-livereload-plugin');

module.exports = {
    entry: {
        bundle: "./main.ts",
        zone: "./node_modules/zone.js/dist/zone.js",
        reflect: "./node_modules/reflect-metadata/Reflect.js"
    },

    output: {
        filename: "./dist/assets/[name].js",
    },

    // Enable sourcemaps for debugging webpack's output.
    // devtool: "source-map",
    devtool: "eval",
    watch: true,


    resolve: {
        extensions: ["", ".js", ".ts"]
    },

    module: {
        loaders: [
            // All files with a '.ts' extension will be handled by 'ts-loader'.
            {
                test: /\.ts?$/,
                loader: "ts-loader"
            }
        ]
    },

    plugins: [
        new copy([
            {
                from: "./app/**/*.html",
                to: "./dist/templates/"
            },
            {
                from: "./app/**/*.css",
                to: "./dist/styles/"
            },
            {
                from: "./app/index.html",
                to: "./dist/"
            },
            {
                from: "./app/assets/",
                to: "./dist/assets/"
            }
        ]),
        new liveReload()
    ]
};