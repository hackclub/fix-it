<script>
	import { onMount } from "svelte";

	let countdown = "";

	// 9pm EST on 6/20/24
	const deadline = new Date("2025-06-20T21:00:00-04:00");

	function updateCountdown() {
		const now = new Date();
		const diff = Math.max(0, Math.floor((deadline.getTime() - now.getTime()) / 1000));
		const hours = Math.floor(diff / 3600);
		const minutes = Math.floor((diff % 3600) / 60);
		const seconds = diff % 60;
		countdown = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
	}

	onMount(() => {
		updateCountdown();
		const interval = setInterval(updateCountdown, 1000);
		return () => clearInterval(interval);
	});
</script>

<div class="absolute inset-0 h-[135vh] bg-gradient-to-b from-[#ECEDF3] to-[#DCDFEF] -z-10"></div>
<div class="absolute top-0 left-0 right-0 h-[100vh] bg-[#ECEDF3] -z-20 -translate-y-full"></div>

<div class="flex min-h-screen flex-col items-center justify-center px-4 py-8">
	<div class="text-center mb-8">
		<p class="text-2xl text-primary">too many websites suck.</p>
	</div>

	<div class="flex-1 flex items-center justify-center max-w-4xl w-full">
		<img src="/header.png" alt="FIX IT." class="max-w-full max-h-[60vh] object-contain" />
	</div>

	<div class="text-center mt-8">
		<p class="text-lg text-primary mb-4">make a userscript • get some stickers</p>
		<img src="/chevron.svg" alt="Chevron down" class="mx-auto w-16 h-8 opacity-60" />
	</div>
</div>

<div class="px-4 py-24">
	<div class="text-center mb-20">
		<div class="font-mono text-xl font-bold transform scale-y-[1.75] text-accent">
			THIS WEBSITE WILL SELF DESTRUCT IN <span class="text-3xl translate-y-0.5 inline-block">{countdown}</span>
		</div>
	</div>
	<div class="mx-auto mb-16 max-w-4xl">
		<p class="mb-6 text-lg leading-relaxed text-primary">
			<span class="font-bold transform scale-y-175 inline-block origin-center text-primary text-xl">FIX IT</span> is a
			<a href="https://ysws.hackclub.com/" class="font-mono text-link underline">You Ship, We Ship</a> about fixing the internet.
		</p>

		<p class="mb-6 text-lg leading-relaxed text-primary">
			the web is broken. Ads everywhere, terrible dark modes, missing features, cluttered interfaces,
			you know the drill. The good news is, you don't have to accept it.
		</p>

		<h3 class="mb-4 font-bold transform scale-y-175 origin-center text-primary text-xl">WHAT'S A USERSCRIPT?</h3>

	<p class="mb-4 text-primary">
		A <a href="https://en.wikipedia.org/wiki/Userscript" class="font-mono text-link underline">userscript</a> is a small piece of JavaScript
		that runs on websites to modify how they look or work. Userscripts let you:
	</p>

	<ul class="mb-6 list-inside list-disc space-y-2 text-primary">
		<li>Remove annoying elements, like ads</li>
		<li>Add missing features</li>
		<li>Fix broken functionality</li>
		<li>Customize interfaces how <em>you</em> want</li>
		<li>Literally anything else you can think of</li>
	</ul>

	<div class="mb-8 flex justify-end">
		<div
			class="flex h-32 w-64 items-center justify-center rounded border-2 border-gray-400 bg-gray-300"
		>
			<span class="text-gray-600">[Image placeholder]</span>
		</div>
	</div>

	<h3 class="mb-4 font-bold transform scale-y-175 origin-center text-primary text-xl">WHAT DO I NEED TO DO?</h3>

	<p class="mb-4 text-primary">  
		Spend an hour making a userscript that <em>makes your life easier</em>, upload it to a
		userscript site like <a href="https://greasyfork.org/" class="font-mono text-link underline">GreasyFork</a> and we'll
		send you some cool stickers!
	</p>

	<p class="mb-4 text-primary">Not sure what to make? Here are some ideas:</p>

	<ul class="mb-6 list-inside list-disc space-y-2 text-primary">
		<li>Remove autoplay from all videos on a site</li>
		<li>Add a dark mode toggle for a site that doesn't have one</li>
		<li>Automatically expand truncated comments without clicking "read more"</li>
		<li>Hide promoted posts on a social media site</li>
		<li>Convert prices on a shopping site to your local currency automatically</li>
	</ul>

	<p class="mb-6 text-primary">Still stuck? Check out some examples:</p>

	<ul class="mb-8 list-inside list-disc space-y-2 text-primary">
		<li>
			<a href="https://greasyfork.org/en/scripts/498197-auto-skip-youtube-ads" class="font-mono text-link underline">Auto Skip Youtube Ads</a> by flentq64
		</li>
		<li><a href="https://victornpb.github.io/undiscord/" class="font-mono text-link underline">Undiscord</a> by victornpb</li>
		<li>
			<a href="https://github.com/nazdridoy/github-commit-labels" class="font-mono text-link underline">GitHub Commit Labels</a> by nazafidy
		</li>
		<li>
			<a href="https://github.com/adamlui/autoclear-chatgpt-history" class="font-mono text-link underline">Auto Clear ChatGPT History</a> by adamlui
		</li>
		<li>
			<a href="https://greasyfork.org/en/scripts/423585-discord-amoled-dark-theme" class="font-mono text-link underline">Discord AMOLED Dark Theme</a> by JustTheo
		</li>
	</ul>

	<div class="mb-8 flex justify-center">
		<div
			class="flex h-32 w-64 items-center justify-center rounded border-2 border-gray-400 bg-gray-300"
		>
			<span class="text-gray-600">[Image placeholder]</span>
		</div>
	</div>

	<h3 class="mb-4 font-bold transform scale-y-175 origin-center text-primary text-xl">HOW?</h3>

	<p class="mb-4 text-primary">
		Your userscript needs to be written in <u>JavaScript</u> (unless you're a wizard and know how
		to set it up with <u>TypeScript</u>).
	</p>

	<p class="mb-4 text-primary">
		You'll need a userscript manager. I recommend <a
			href="https://violentmonkey.github.io"
			class="font-mono text-link underline">Violentmonkey</a
		>.
	</p>

	<p class="mb-4 text-primary">
		<strong>To track your time spent, you can't use the built-in editor.</strong> You can use
		whatever editor you want as long as it supports <a href="https://hackatime.hackclub.com/">Hackatime</a>, and and follow
		<a href="https://violentmonkey.github.io/posts/how-to-edit-scripts-with-your-favorite-editor/" class="font-mono text-link underline">this guide</a> to set it up.
	</p>

	<p class="mb-6 text-primary">
		<em
			>psst... not using Violentmonkey? try <a href="https://stackoverflow.com/questions/41212558/develop-tampermonkey-scripts-in-a-real-ide-with-automatic-deployment-to-openuser" class="font-mono text-link underline"
				>this guide</a
			> instead...</em
		>
	</p>

	<p class="mb-4 text-primary">
		There are a ton of great resources online for learning how to make a userscript. If you're not
		sure where to start, check out the <a href="https://violentmonkey.github.io/guide/creating-a-userscript/" class="font-mono text-link underline"
			>Violentmonkey Guide</a
		>.
	</p>

	<p class="mb-6 text-primary">
		Once you've made your userscript, you need to publish it on <a
			href="https://greasyfork.org/"
			class="font-mono text-link underline">GreasyFork</a
		>! GreasyFork is the largest online repository for sharing and installing userscripts.
	</p>

	<p class="mb-8 text-primary">Submit your finished userscript down below!</p>

	<h3 class="mb-4 font-bold transform scale-y-175 origin-center text-primary text-xl">TLDR</h3>

	<ol class="mb-12 list-inside list-decimal space-y-2 text-primary">
		<li>Set up your editor</li>
		<li>Make a userscript - be creative!</li>
		<li>Publish it on <a href="https://greasyfork.org/" class="font-mono text-link underline">GreasyFork</a></li>
		<li>Submit it below</li>
		<li>Get some stickers!</li>
	</ol>
	</div>

	<div class="text-center">
		<div
			class="inline-block rounded-lg bg-gradient-to-r from-pink-400 via-purple-500 to-yellow-400 p-1"
		>
			<div class="rounded-lg bg-white px-8 py-4">
				<h2
					class="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-4xl font-bold text-transparent"
				>
					SUBMIT
				</h2>
			</div>
		</div>
	</div>

	<div class="mt-16 border-t border-gray-300 pt-8 text-center">
		<p class="text-sm text-primary">© 2025 Hack Club</p>
	</div>
</div>
