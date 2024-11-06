<script lang='ts'>
  export let title:string = "btn";
  export let isActive:boolean = true; 
</script>


<button class={`px-5 py-2 border rounded transition-all text-gray-800  ${isActive? "active:scale-105 active:bg-slate-100" :" bg-gray-200 text-gray-600 cursor-default "}` } >{title}</button>