<script lang="ts">
	import '../app.css';
	
	let { children } = $props();
</script>

{@render children()}

<svelte:head>
	<title>FIX IT.</title>
	<meta name="description" content="The web is broken. FIX IT. Make userscripts, automate the web, and get free stickers with Hack Club." />
	<meta property="og:title" content="FIX IT." />
	<meta property="og:description" content="The web is broken. FIX IT. Make userscripts, automate the web, and get free stickers with Hack Club." />
	<meta property="og:image" content="/card.png" />
</svelte:head>
