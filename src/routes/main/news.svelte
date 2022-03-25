<script>
  import { onMount } from "svelte";

  export let news;

  onMount(() => {
    const dom = document.createElement("div");
    dom.innerHTML = news;
    const contents = dom.getElementsByClassName("news_wrap");
    for (let i = 0; i < contents.length; i++) {
      console.log(
        contents.item(i).querySelector(".news_thumb .thumb").style
          .backgroundImage
      );
    }
  });
</script>

<div class="size-full flex-center basis-160">
  <div class="size-full">
    <div class="text-flex text-white text-4xl">Hello</div>
  </div>
</div>
