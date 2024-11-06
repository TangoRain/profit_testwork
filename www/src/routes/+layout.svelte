<script lang="ts">
	import '../app.css';
	let { children } = $props();
	const title = "test work for (PROFIT) company / <strong>Ivan D</strong>"
</script>
<div class="text-xl w-full justify-center flex text-gray-700  border-b py-2 shadow bg-white">
	<h1>
	{@html title}
</h1>
</div>
{@render children()}
