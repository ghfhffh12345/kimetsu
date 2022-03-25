<script>
  import Video from "./video.svelte";

  export let url;
</script>

<div class="opacity-30 absolute -z-10 w-full h-full">
  <Video src={url} type="video/mp4">
    해당 브라우저는 video 태그를 지원하지 않습니다.
  </Video>
</div>
