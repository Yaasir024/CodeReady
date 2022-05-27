<template>
  <!-- <Hero1 /> -->
  <div class="bg-cd-light-200">
    <div class="flex">
      <div class="w-60 border-r-2 border-slate-300 p-4 hidden md:block">
        <div class="border-2 border-slate-300 mt-8 p-2">
          <h2 class="text-3xl font-normal">Filter</h2>
          <ul class="filter ">
            <li class="text-sm font-normal mt-7">Button</li>
            <li class="text-sm font-normal mt-5">Modal</li>
            <li class="text-sm font-normal mt-5">Popup</li>
            <li class="text-sm font-normal mt-5">Form</li>
            <li class="text-sm font-normal mt-5">Navbar</li>
            <li class="text-sm font-normal mt-5">Cards</li>
          </ul>
        </div>
      </div>
      <div class="w-full">
        <div
          class="asset-grid grid w-full h-auto sm:grid-cols-2 gap-5 md:grid-cols-2 lg:grid-cols-3 p-4 mt-2"
        >
          <div class="p-3">
            <div class="image-wrapper h-270px">
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
            <div class="image-wrapper h-270px overflow-hidden">
              <img src="../assets/template2.png" alt="" class="h-full hover:scale-105 transfrom duration-150 ease-in-out" />
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
