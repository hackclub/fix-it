<script lang="ts">
	import '../app.css';
	
	let { children } = $props();
</script>

{@render children()}

<svelte:head>
	<title>FIX IT.</title>
	<meta name="description" content="The web is broken. FIX IT. Make userscripts and get cool stickers." />
	<meta property="og:title" content="FIX IT." />
	<meta property="og:description" content="The web is broken. FIX IT. Make userscripts and get cool stickers." />
	<meta property="og:image" content="/card.png" />
</svelte:head>
