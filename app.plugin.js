// @ts-check

const expoCP = require('@expo/config-plugins')

/** @type {expoCP.ConfigPlugin} */
function expoModifyPlugin (baseConfig) {
    const colorExpoConfig = expoCP
        .withAndroidColors(baseConfig, config => {
            config.modResults = expoCP.AndroidConfig.Colors.assignColorValue(config.modResults, { name: "colorSurface", "value": "#000000" })
            return config
        })
    const expoThemeConfig = expoCP
        .withAndroidStyles(colorExpoConfig, config => {
            config.modResults = expoCP.AndroidConfig.Styles.assignStylesValue(config.modResults, { name: "colorSurface", "value": "@color/colorSurface", add: true, parent: expoCP.AndroidConfig.Styles.getAppThemeLightNoActionBarGroup()})
            return config
        })

    return expoThemeConfig;
}

module.exports = expoModifyPlugin;