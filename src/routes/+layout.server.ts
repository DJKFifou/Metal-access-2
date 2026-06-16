import { Client } from '@notionhq/client';
import { NOTION_TOKEN, DATABASE_ID } from '$env/static/private';

export async function load() {
	const notion = new Client({ auth: NOTION_TOKEN });

	const database = await notion.databases.retrieve({
		database_id: DATABASE_ID
	});

	return {
		database
	};
}
