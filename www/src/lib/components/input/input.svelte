
<script lang='ts'>
    export let title:string = "placeholder"; 
    export let name:string = "input"; 
    export let req:boolean= false;
</script>

<div class=" w-full h-full flex  justify-center items-center">
<input required={req} class=" w-full border rounded bg-gray-50 active:bg-white focus:bg-white transition-all px-2 py-1 "  type="text" name={name} placeholder={title}>
</div>