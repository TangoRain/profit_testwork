
<script lang='ts'>
  import { Icon } from "svelte-icons-pack";
  import { CgAdd, CgRemove } from "svelte-icons-pack/cg";
  import { IoRemove } from "svelte-icons-pack/io";

export let title:string; 
</script>

<div class="w-full flex justify-center items-center border p-2 rounded">
<p class=" flex-1 text-center ">{title}</p>
<button><div class=" border rounded active:scale-105 transition-all"><Icon size=24 src={IoRemove}></Icon></div></button>
</div>
