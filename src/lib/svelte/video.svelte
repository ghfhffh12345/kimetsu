<script>
  export let src;
  export let type;
  export let tailwind;
</script>

<video
  class="absolute top-0 left-0 w-full h-full object-cover {tailwind}"
  muted
  autoplay
  loop
>
  <source {src} {type} />
  <strong><slot /></strong>
</video>
