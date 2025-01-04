const MarkdownItGitHubAlerts = require('markdown-it-github-alerts');

module.exports = {
    default: function (context) {
        return {
            plugin: function (md, pluginOptions) {
                md.use(MarkdownItGitHubAlerts, pluginOptions || {});
            },

            assets: function () {
                return [
                    { name: 'gh-alerts.css' }
                ];
            },
        }
    }
}