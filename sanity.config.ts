import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash';
import { codeInput } from '@sanity/code-input';
import { apiVersion, dataset, projectId } from './sanity/env';
import { schema } from './sanity/schema';

export default defineConfig({
	basePath: '/studio',
	projectId,
	dataset,
	schema,
	plugins: [
		structureTool(),
		unsplashImageAsset(),
		codeInput(),
		visionTool({ defaultApiVersion: apiVersion }),
	],
});
