// @ts-check

const expoCP = require('@expo/config-plugins')

/** @type {expoCP.ConfigPlugin} */
function expoModifyPlugin (config) {
    return expoCP.withAndroidColors(config, config => {
        config.modResults = expoCP.AndroidConfig.Colors.assignColorValue(config.modResults, { name: "colorSurface", "value": "#000000" })
        return config
    })
}

module.exports = expoModifyPlugin;