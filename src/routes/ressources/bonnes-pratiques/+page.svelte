<script lang="ts">
	let { data } = $props();

	const pages = data.allPages;
</script>

<h2>Bonnes pratiques</h2>

{#each pages as page}
	<div>
		<p>{page.properties.Title.title[0].plain_text}</p>
	</div>
{/each}
