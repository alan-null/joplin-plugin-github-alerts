const MarkdownItGitHubAlerts = require('markdown-it-github-alerts');

module.exports = {
    default: function (context) {
        return {
            plugin: function (md, pluginOptions) {
                md.use(MarkdownItGitHubAlerts, pluginOptions || {});
            },

            assets: function () {
                const appearance = getComputedStyle(window.top.document.documentElement).getPropertyValue('--joplin-appearance').trim();
                const themeAsset = appearance === 'dark' ? 'gh-alerts-theme-dark.css' : 'gh-alerts-theme-light.css';

                return [
                    { name: 'gh-alerts.css' },
                    { name: themeAsset }
                ];
            },
        }
    }
}