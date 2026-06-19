<script>
	import { onMount } from 'svelte';
	import loader from '$lib/assets/loader.gif';
	import { loaderDone } from '$lib/stores/loader';

	let visible = $state(true);
	let fading = $state(false);

	onMount(() => {
		setTimeout(() => {
			fading = true;
			loaderDone.set(true);
			setTimeout(() => {
				visible = false;
			}, 600);
		}, 1000);
	});
</script>

{#if visible}
	<div
		class="fixed inset-0 w-full h-lvh bg-theme-black flex items-center justify-center z-[9999]"
		class:fade-out={fading}
	>
		<img src={loader} alt="Loader" class="w-20 h-20" />
	</div>
{/if}

<style>
	div {
		transition: opacity 0.6s ease;
	}
	.fade-out {
		opacity: 0;
	}
</style>
