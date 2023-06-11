<script lang="ts">
	import { onMount } from 'svelte';

	let status = 'qabż';
	$: statusFa = status === 'basṭ' ? 'بسط' : 'قبض';

	$: offset = status === 'basṭ' ? 'lg:mr-[25vw]' : 'lg:mr-[50vw]';

	onMount(async () => {
		const res = await fetch('https://qabz.fly.dev/en');
		status = await res.text();
	});
</script>

<svelte:head>
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
	class:bg-bast={status === 'basṭ'}
	class:bg-qabz={status === 'qabż'}
>
	<div
		class="mt-8 h-fit rounded-lg bg-gray-100 px-10 py-6 font-arabic text-5xl font-medium {offset}"
		class:pt-4={status === 'qabż'}
		class:pb-8={status === 'qabż'}
	>
		{statusFa}
	</div>
</div>
