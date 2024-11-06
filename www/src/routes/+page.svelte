
<script lang='ts'>
  import Button from "$lib/components/button/button.svelte";
  import Input from "$lib/components/input/input.svelte";
  import Todo from "$lib/components/todo/todo.svelte";

  export let data; 


</script>
<div class="container mx-auto md:px-20">
<div class="flex flex-col  items-center w-full p-2">
<h1 > {"hello".toUpperCase()} <strong>{data.user}</strong> </h1>
<div class="todoes h-max w-full flex justify-center py-4">
  <div class=" w-full ">
    <form  class =" flex flex-row gap-4 justify-center " action="?/add_todo" method="POST" >
      <input class="hidden" value={data.user} name="user" type="text">
    <div class="flex-1"> <Input name="todo" req={true} /></div>
    <div class="w-max"> <Button title="add todo" /></div>

  </form>
  </div>
</div>
</div>

<div class="flex flex-col gap-4 p-2">
{#each data.data?.todos??[] as todo}
<form action="?/remove_todo" method="POST">
<input type="text" class="hidden" name="todo_id" value={todo.id}>
  <Todo  title= {todo.title}></Todo>
</form>
{/each}
</div>
</div>