<script lang="ts">
	import { onMount } from 'svelte';

	let status = 'qabż';
	$: statusFa = status === 'basṭ' ? 'بسط' : 'قبض';

	onMount(async () => {
		const res = await fetch('https://qabz.fly.dev/en');
		status = await res.text();
	});
</script>

<div
	class="flex h-screen items-end justify-center bg-cover bg-center"
	class:bg-bast={status === 'basṭ'}
	class:bg-qabz={status === 'qabż'}
>
	<div
		class="mb-12 rounded-lg bg-gray-100 px-10 py-6 font-arabic text-5xl font-medium"
		class:pt-4={status === 'qabż'}
		class:pb-8={status === 'qabż'}
	>
		{statusFa}
	</div>
</div>
