<script>
  import Menu from "$lib/svelte/menu.svelte";
  import "../../app.css";

  const large = 1024;
  let screen_width;
</script>

<svelte:window bind:innerWidth={screen_width} />

<div class="w-full h-full flex shrink-0">
  {#if screen_width >= large}
    <div class="basis-xs relative z-10"><Menu /></div>
  {/if}
  <div class="w-full h-screen bg-zinc-800 flex-center">
    <slot />
  </div>
</div>
