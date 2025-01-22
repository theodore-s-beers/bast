<script lang="ts">
	import { onMount } from "svelte";

	let status: string | null = $state(null);
	let statusFa = $derived(status === "basṭ" ? "بسط" : status === "qabż" ? "قبض" : null);

	let offset = $derived(
		status === "basṭ" ? "lg:mr-[25vw]" : status === "qabż" ? "lg:mr-[50vw]" : null,
	);

	onMount(async () => {
		const res = await fetch("https://qabz.fly.dev/en");
		status = await res.text();
	});
</script>

<svelte:head>
	<link rel="preload" as="image" href="./bast.jpg" />
	<link rel="preload" as="image" href="./qabz.jpg" />

	<meta name="description" content="A signal of my state of mind" />

	<meta property="og:type" content="website" />
	<meta property="og:title" content="قبض و بسط" />
	<meta property="og:url" content="https://www.theobeers.com/bast/" />
	<meta property="og:image" content="https://www.theobeers.com/bast/og.jpg" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="قبض و بسط" />

	<title>قبض و بسط</title>
</svelte:head>

<div
	class="flex h-screen justify-center bg-cover bg-center lg:items-center"
	class:bg-bast={status === "basṭ"}
	class:bg-qabz={status === "qabż"}
	class:bg-gray-100={status === null}
>
	<div
		class="mt-8 h-fit rounded-lg bg-gray-100 px-10 py-6 font-arabic text-5xl font-medium {offset}"
		class:pt-4={status === "qabż"}
		class:pb-8={status === "qabż"}
	>
		{statusFa}
	</div>
</div>
