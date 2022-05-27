<template>
  <!-- :class="showNav ? 'shadow-2xl h-64 md:pb-8 ' : 'h-16'" -->
  <nav
    class="lg:px-6 px-4 py-15px transition-all ease-in-out duration-700 border-b-2 md:border-none overflow-hidden"
  >
    <div class="flex items-center justify-between">
      <!-- <img src="../assets/logo.svg" alt="Company Logo" /> -->
      <div class="logo ml-2 flex items-center">
      <svg
        class="fill-black w-8 mr-0.5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 512"
      >
        <path
          width="25"
          d="M414.8 40.79L286.8 488.8C281.9 505.8 264.2 515.6 247.2 510.8C230.2 505.9 220.4 488.2 225.2 471.2L353.2 23.21C358.1 6.216 375.8-3.624 392.8 1.232C409.8 6.087 419.6 23.8 414.8 40.79H414.8zM518.6 121.4L630.6 233.4C643.1 245.9 643.1 266.1 630.6 278.6L518.6 390.6C506.1 403.1 485.9 403.1 473.4 390.6C460.9 378.1 460.9 357.9 473.4 345.4L562.7 256L473.4 166.6C460.9 154.1 460.9 133.9 473.4 121.4C485.9 108.9 506.1 108.9 518.6 121.4V121.4zM166.6 166.6L77.25 256L166.6 345.4C179.1 357.9 179.1 378.1 166.6 390.6C154.1 403.1 133.9 403.1 121.4 390.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4L121.4 121.4C133.9 108.9 154.1 108.9 166.6 121.4C179.1 133.9 179.1 154.1 166.6 166.6V166.6z"
        />
      </svg>
      <span class="text-black">Ready</span>
    </div>
      <div class="links hidden md:flex">
        <router-link to="/">Home</router-link>
        <router-link to="loaders" class="ml-30px">Loaders</router-link>
        <router-link to="store" class="ml-30px">Store</router-link>
        <router-link to="color-palette" class="ml-30px">Color Palette</router-link>
      </div>

      <div class="right-nav hidden md:flex items-center">
        <router-link to="about" class="ml-30px">Login</router-link>
        <router-link to="faqs" class="ml-30px">
          <button class="py-2 px-4 text-white bg-unify-primary rounded-xl">
            Sign Up
          </button>
        </router-link>
        
      </div>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="md:hidden cursor-pointer"
        @click="showOpenNav"

      >
        <path
          d="M21 7H3.00002"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M21 17H3.00002"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </nav>



  <div
    :class="
      openNav ? 'block transition-all ease-in-out duration-700' : 'hidden'
    "
    class="md:hidden w-full p-11 bg-white border-2 border-t-0 z-20 absolute over"
  >
    <nav>
      <div class="">
        <div class="links flex flex-col items-start justify-center">
          <router-link to="/" class="mb-30px" @click="closeNavOnRoute"
            >Home</router-link
          >
          <router-link to="loaders" class="mb-30px" @click="closeNavOnRoute"
            >Loaders</router-link
          >
          <router-link to="store" class="mb-30px" @click="closeNavOnRoute"
            >Store</router-link
          >
          <router-link to="color-palette" class="" @click="closeNavOnRoute"
            >Color-Palette</router-link
          >
        </div>
      </div>
    </nav>
  </div>
</template>
<script setup>
import { ref } from "@vue/reactivity";
const openNav = ref(false);
const mobilePro = ref(false);
const showOpenNav = () => {
  openNav.value = !openNav.value;
};

const showMobilePro = () => {
  mobilePro.value = !mobilePro.value;
};

const closeNavOnRoute = () => {
  openNav.value = false;
};
</script>

<style scoped>
nav a {
  transition: all .2s ease-in;
}
nav a.router-link-exact-active {
  padding: 0 20px;
  border-right: 2px solid black;
  border-left: 2px solid black;
  border-radius: 15px;
}
nav a:hover {
  transform: translatey(-5px);
}

.over {
  left: 50%;
  transform: translate(-50%);
}

.show {
  display: block;
}

.hide {
  display: none;
}
</style>
