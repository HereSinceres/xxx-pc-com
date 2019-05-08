module.exports = function (api) {
    api.cache(true);

    const presets = ['@babel/preset-env', '@babel/preset-react'];
    const plugins = ["@babel/plugin-proposal-class-properties"];

    return {
        presets,
        plugins
    };
}
// plugins 用于开发 上线需要删除
// "@babel/plugin-transform-runtime"