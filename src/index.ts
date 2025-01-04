import joplin from 'api';
import { ContentScriptType } from 'api/types';

const pluginId = "com.github.alan-null.joplin-plugin-github-alerts";

joplin.plugins.register({
	onStart: async function () {
		// eslint-disable-next-line no-console
		console.info('Github Alerts plugin started!');

		await joplin.contentScripts.register(
			ContentScriptType.MarkdownItPlugin,
			pluginId,
			'./gh-alerts.js'
		);
	},
});
