<script lang="ts">
	import { onMount } from "svelte";

	let countdown = "00:00:00";
	let cursorX = 0;
	let cursorY = 0;
	let isHovering = false;

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

	function handleMouseMove(event: MouseEvent) {
		cursorX = event.clientX;
		cursorY = event.clientY;
	}

	function addHoverListeners() {
		const interactiveElements = document.querySelectorAll('a, button');
		
		interactiveElements.forEach((element) => {
			element.addEventListener('mouseenter', () => {
				isHovering = true;
			});
			
			element.addEventListener('mouseleave', () => {
				isHovering = false;
			});
		});
	}

	onMount(() => {
		updateCountdown();
		const interval = setInterval(updateCountdown, 1000);
		
		document.addEventListener('mousemove', handleMouseMove);
		
		setTimeout(addHoverListeners, 100);
		
		return () => {
			clearInterval(interval);
			document.removeEventListener('mousemove', handleMouseMove);
		};
	});
</script>

<style>	:global(body) {
		cursor: none !important;
	}
	
	:global(body) {
		background: 
			linear-gradient(rgba(220,223,239,0.9), rgba(220,223,239,0.9)),
			url('/noise.png');
		background-repeat: repeat;
		background-attachment: scroll;
		background-size: auto;
		min-height: 100vh;
	}
		.custom-cursor {
		position: fixed;
		width: 40px;
		height: 40px;
        border: 20px solid white;
		border-radius: 50%;
		pointer-events: none;
		z-index: 9999;
		mix-blend-mode: difference;
		transform: translate(-50%, -50%);
        transition-property: width, height, border;
        transition-duration: 0.15s;
	}
		.custom-cursor.hovering {
		width: 60px;
		height: 60px;
		background-color: transparent;
		border: 18px solid white;
	}
	
	.countdown-tooltip {
		position: relative;
		cursor: pointer;
	}
	
	.countdown-tooltip::after {
		content: "yes, really. get the stickers while you can!";
		position: absolute;
		bottom: -40px;
		left: 50%;
		transform: translateX(-50%) scaleY(calc(1/1.75));
		background-color: #1C222A;
		color: white;
		padding: 8px 12px;
		border-radius: 6px;
		font-size: 14px;
		font-weight: normal;
		white-space: nowrap;
		opacity: 0;
		visibility: hidden;
		transition: opacity 0.3s ease, visibility 0.3s ease;
		transition-delay: 0.5s;
		z-index: 1000;
		pointer-events: none;
	}
	
	.countdown-tooltip:hover::after {
		opacity: 1;
		visibility: visible;
	}
</style>

<div class="absolute inset-0 h-[135vh] bg-gradient-to-b from-[#ECEDF3] to-[#DCDFEF] -z-10" style="background: linear-gradient(to bottom, rgba(236,237,243,0.9), rgba(220,223,239,0.9)), url('/noise.png');"></div>

<!-- custom cursor -->
<div class="custom-cursor {isHovering ? 'hovering' : ''}" style="left: {cursorX}px; top: {cursorY}px;"></div>

<div class="h-screen flex flex-col items-center">
	<div class="text-center pt-8 px-4 z-10 relative">
		<p class="text-2xl text-[#1C222A]">too many websites suck.</p>
	</div>

    <div class="flex-1 w-full relative">
        <img src="/header.png" alt="FIX IT." class="absolute w-full -top-[60px] h-[calc(100%+60px+60px)] object-contain object-center" />
    </div>

	<div class="text-center pb-8 px-4 z-10 relative">
		<p class="text-lg text-[#1C222A] mb-4">make a userscript • get some stickers</p>
		<img src="/chevron.svg" alt="Chevron down" class="mx-auto w-16 h-8 opacity-60" />
	</div>
</div>

<div class="text-center mb-20 py-32">
    <div class="font-mono text-xl font-bold transform scale-y-[1.75] text-[#86344D] countdown-tooltip">
        THIS WEBSITE WILL SELF DESTRUCT IN <span class="text-3xl translate-y-0.5 inline-block">{countdown}</span>
    </div>
</div>
<div class="mx-auto mb-16 max-w-4xl">
    <p class="mb-4 text-lg leading-relaxed text-[#1C222A]">
        <span class="font-bold transform scale-y-175 inline-block origin-center text-[#1C222A] text-xl">FIX IT</span> is a
        <a href="https://ysws.hackclub.com/" class="font-mono text-[#531515] underline">You Ship, We Ship</a> about fixing the internet.
    </p>

    <p class="mb-6 text-lg leading-relaxed text-[#1C222A]">
        The web is broken. Ads everywhere, terrible dark modes, missing features, cluttered interfaces,
        you know the drill. The good news is, you don't have to accept it.
    </p>    <div class="relative">
        <h3 class="mb-4 mt-12 font-bold transform scale-y-175 origin-center text-[#1C222A] text-xl">WHAT'S A USERSCRIPT?</h3>

        <p class="mb-4 text-[#1C222A] pr-72">
            A <a href="https://en.wikipedia.org/wiki/Userscript" class="font-mono text-[#531515] underline">userscript</a> is a small piece of JavaScript
            that runs on websites to modify how they look or work. Userscripts let you:
        </p>

        <ul class="mb-6 list-inside list-disc space-y-2 text-[#1C222A] pr-72">
            <li>Remove annoying elements, like ads</li>
            <li>Add missing features</li>
            <li>Fix broken functionality</li>
            <li>Customize interfaces how <em>you</em> want</li>
            <li>Literally anything else you can think of</li>
        </ul>

        <img src="/deco1.png" alt="" class="absolute top-0 h-86 w-auto opacity-90" style="right: calc((100vw - 100%) / -2);" />
    </div>

<h3 class="mb-4 mt-12 font-bold transform scale-y-175 origin-center text-[#1C222A] text-xl">WHAT DO I NEED TO DO?</h3>

<p class="mb-4 text-[#1C222A]">  
    Spend an hour making a userscript that <em>makes your life easier</em>, upload it to a
    userscript site like <a href="https://greasyfork.org/" class="font-mono text-[#531515] underline">GreasyFork</a> and we'll
    send you some cool stickers!
</p>

<p class="mb-4 text-[#1C222A]">Not sure what to make? Here are some ideas:</p>

<ul class="mb-6 list-inside list-disc space-y-2 text-[#1C222A]">
    <li>Remove autoplay from all videos on a site</li>
    <li>Add a dark mode toggle for a site that doesn't have one</li>
    <li>Automatically expand truncated comments without clicking "read more"</li>
    <li>Hide promoted posts on a social media site</li>
    <li>Convert prices on a shopping site to your local currency automatically</li>
</ul>

<p class="mb-6 text-[#1C222A]">Still stuck? Check out some examples:</p>

<ul class="mb-8 list-inside list-disc space-y-2 text-[#1C222A]">
    <li>
        <a href="https://greasyfork.org/en/scripts/498197-auto-skip-youtube-ads" class="font-mono text-[#531515] underline">Auto Skip Youtube Ads</a> by flentq64
    </li>
    <li><a href="https://victornpb.github.io/undiscord/" class="font-mono text-[#531515] underline">Undiscord</a> by victornpb</li>
    <li>
        <a href="https://github.com/nazdridoy/github-commit-labels" class="font-mono text-[#531515] underline">GitHub Commit Labels</a> by nazafidy
    </li>
    <li>
        <a href="https://github.com/adamlui/autoclear-chatgpt-history" class="font-mono text-[#531515] underline">Auto Clear ChatGPT History</a> by adamlui
    </li>
    <li>        <a href="https://greasyfork.org/en/scripts/423585-discord-amoled-dark-theme" class="font-mono text-[#531515] underline">Discord AMOLED Dark Theme</a> by JustTheo
    </li>
</ul>

<div class="relative">
    <h3 class="mb-4 mt-12 font-bold transform scale-y-175 origin-center text-[#1C222A] text-xl">HOW?</h3>
    
    <img src="/deco2.png" alt="" class="hidden xl:block absolute top-0 h-128 w-auto opacity-90 -translate-x-12" style="left: calc((100vw - 100%) / -2);" />

    <p class="mb-4 text-[#1C222A]">
    Your userscript needs to be written in JavaScript (unless you're a wizard and know how
    to set it up with TypeScript).
</p>

<p class="mb-4 text-[#1C222A]">
    You'll need a userscript manager. I recommend <a
        href="https://violentmonkey.github.io"
        class="font-mono text-[#531515] underline">Violentmonkey</a
    >.
</p>

<p class="mb-4 text-[#1C222A]">
    <strong>To track your time spent, you can't use the built-in editor.</strong> You can use
    whatever editor you want as long as it supports <a href="https://hackatime.hackclub.com/">Hackatime</a>, and and follow
    <a href="https://violentmonkey.github.io/posts/how-to-edit-scripts-with-your-favorite-editor/" class="font-mono text-[#531515] underline">this guide</a> to set it up.
</p>

<p class="mb-6 text-[#1C222A] opacity-50 text-sm">
    <em
        >psst... not using Violentmonkey? try <a href="https://stackoverflow.com/questions/41212558/develop-tampermonkey-scripts-in-a-real-ide-with-automatic-deployment-to-openuser" class="font-mono text-[#531515] underline"
            >this guide</a
        > instead...</em
    >
</p>

<p class="mb-4 text-[#1C222A]">
    There are a ton of great resources online for learning how to make a userscript. If you're not
    sure where to start, check out the <a href="https://violentmonkey.github.io/guide/creating-a-userscript/" class="font-mono text-[#531515] underline"
        >Violentmonkey Guide</a
    >.
</p>

<p class="mb-6 text-[#1C222A]">
    Once you've made your userscript, you need to publish it on <a
        href="https://greasyfork.org/"
        class="font-mono text-[#531515] underline">GreasyFork</a
    >! GreasyFork is the largest online repository for sharing and installing userscripts.
</p>

<p class="mb-8 text-[#1C222A]">Submit your finished userscript down below!</p>
</div>

<h3 class="mb-4 mt-12 font-bold transform scale-y-175 origin-center text-[#1C222A] text-xl">TLDR</h3>

<ol class="mb-12 list-inside list-decimal space-y-2 text-[#1C222A]">
    <li>Set up your editor</li>
    <li>Make a userscript - be creative!</li>
    <li>Publish it on <a href="https://greasyfork.org/" class="font-mono text-[#531515] underline">GreasyFork</a></li>
    <li>Submit it below</li>
    <li>Get some stickers!</li>
</ol>
</div>

<div class="relative h-[25vw]">
    <a class="absolute top-2/5 -translate-y-1/2 w-full" href="https://forms.fillout.com/t/vC9c4xHRmgus">
        <img src="/submit.png" alt="Submit" class="text-6xl h-32 mx-auto">
    </a>

    <img src="/flowers-left.png" alt="" class="absolute left-0 bottom-0 h-auto w-[25vw]">
    <img src="/flowers-right.png" alt="" class="absolute right-0 bottom-0 h-auto w-[25vw]">
</div>

<footer class="w-full bg-[#384455] relative" style="background-image: linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), url('/noise.png'), url('/footer-bg.png'); background-repeat: repeat, repeat, repeat; background-blend-mode: normal, overlay, normal;">
	<div class="text-center py-16">
		<p class="text-[#EFF3FA] font-bold text-xl">
			© 2025 <a href="https://hackclub.com/" class="underline text-[#F7D4D4] font-bold">Hack Club</a>
		</p>
	</div>
</footer>
