<script>
  import { goto } from "$app/navigation";
</script>

<div class=" bg-zinc-800 w-xs h-screen">
  <div class="h-full flex flex-wrap shrink-0 content-center text-white">
    {#each ["HOME", "NEWS", "MOVIES", "CHAT"] as item}
      <button
        class="w-full h-11 hover:bg-zinc-700 transition-colors rounded-md"
        on:click={() => goto(`/main/${item.toLowerCase()}`)}
      >
        <div class="text-xl text-center p-[6px] select-none">{item}</div>
      </button>
    {/each}
  </div>
</div>
