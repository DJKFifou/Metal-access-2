<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { data, children } = $props();
	console.log('data:', data);
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
{@render children()}
