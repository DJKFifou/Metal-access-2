import { Client, collectPaginatedAPI } from '@notionhq/client';
import { NOTION_TOKEN, DATA_SOURCE_ID } from '$env/static/private';

export async function load() {
	const notion = new Client({ auth: NOTION_TOKEN });

	const allPages = await collectPaginatedAPI(notion.dataSources.query, {
		data_source_id: DATA_SOURCE_ID
	});

	return {
		allPages
	};
}
