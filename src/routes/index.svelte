<script>
  import BackgroundVideo from "$lib/svelte/kimeshu_video.svelte";
  import { goto } from "$app/navigation";

  export let url;
</script>

<BackgroundVideo {url} />

<div
  class="absolute top-p42 md:top-1/2 -translate-y-1/2 translate-x-[calc(50vw-50%)]"
>
  <div class="max-w-md md:max-w-5xl">
    <div class="flex flex-wrap md:flex-nowrap  justify-center items-center">
      <div class="w-3/4 sm:w-[90%] md:w-[400px] lg:w-28 translate-x-[-5%]">
        <img src="/logo.svg" alt="logo" />
      </div>
      <div class="-translate-y-20 sm:-translate-y-25 md:translate-y-[0]">
        <div class="text-white text-center md:text-left">
          <div class="text-[8vw] leading-none sm:text-5xl md:text-6xl">
            귀멸의 칼날
          </div>
          <div class="text-sm lg:text-base">
            주인공 탄지로가 여동생을 구하기 위해 떠나는 이야기
          </div>
          <div class="md-center -translate-x-1/2 md:translate-x-0">
            <button
              class="btn-primary w-50 h-15 mt-2.5"
              on:click={() => goto("/main/home")}
            >
              더 알아보기
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
