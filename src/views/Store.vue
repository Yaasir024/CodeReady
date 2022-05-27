<template>
  <!-- <Hero1 /> -->
  <div class="bg-cd-light-200">
    <div class="flex items-center">
      <div class="w-140px border-r-2 border-slate-300 bg-red-700">
        <h2>Filter</h2>
      </div>
      <div class="w-full">
        BBBBBBBB
        <div
          class="asset-grid grid w-full h-auto sm:grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 p-4 mt-6"
        >
          <div class="p-3">
            <div class="image-wrapper h-350px">
              <img src="../assets/template1.png" alt="" class="h-full w-full" />
            </div>
            <div class="details">
              <span class="text-xs text-gray-600 uppercase font-semibold"
                >Template</span
              >
              <h2>Anime website by the Super Coder</h2>
              <div class="flex items-center justify-between">
                <h2>FREE</h2>
                <div class="">
                  <span>HTML</span>
                  <span>CSS</span>
                </div>
              </div>
            </div>
          </div>
          <div class="p-3">
            <div class="image-wrapper h-350px">
              <img src="../assets/template2.png" alt="" class="h-full" />
            </div>
            <div class="details">
              <span class="text-xs text-gray-600 uppercase font-semibold"
                >Button</span
              >
              <h2 class="text-sm font-light leading-150">
                Anime website by the Super Coder
              </h2>
              <div class="">
                <span>HTML</span>
                <span>CSS</span>
              </div>
              <h2 class="text-xl leading-5 font-semibold">$1.24</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Hero1 from "../components/Hero1.vue";
</script>

<style></style>
