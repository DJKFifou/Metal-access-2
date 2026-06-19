<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/oeil.svg';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Loader from '$lib/components/Loader.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<Loader />
<Header />
{@render children()}
<Footer />
