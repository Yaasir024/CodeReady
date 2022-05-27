<template>
  <div class="palette-section bg-cd-light-200 min-h-screen">
    <div class="intro- flex px-11 py-16 border-b-2 border-slate-300">
      <h1 class="text-5xl md:w-2/4 sm:w-3/4 w-full">
        Choose from our Library of color Palettes for your next big project
      </h1>
    </div>
    <div
      class="palette-grid grid w-full h-auto sm:grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 p-4 mt-6"
    >
      <div
        class="p-2.5 flex flex-col w-full overflow-hidden bg-white rounded-lg border shadow-slate-300 shadow-sm border-slate-200"
        v-for="palette in allPalettes"
        :key="palette.id"
      >
        <div
          class="flex w-full overflow-hidden border border-slate-200 rounded-md"
        >
          <div
            class="flex flex-col items-center justify-center w-1/4 h-32 hover:w-3/4 transform duration-150 ease-in-out group hover:cursor-pointer"
            :style="{ 'background-color': palette.colors.main }"
          >
            <p
              class="flex-col items-center hidden p-3 mb-0 bg-black rounded-md group-hover:flex bg-opacity-10"
            >
              <button
                class="hidden mt-0 mb-0 font-semibold text-white group-hover:flex"
              >
                {{ palette.colors.main }}
              </button>
            </p>
          </div>
          <div
            class="flex flex-col items-center justify-center w-1/4 h-32 hover:w-3/4 transform duration-150 ease-in-out group hover:cursor-pointer"
            :style="{ 'background-color': palette.colors.primary }"
          >
            <p
              class="flex-col items-center hidden p-3 mb-0 bg-black rounded-md group-hover:flex bg-opacity-10"
            >
              <button
                class="hidden mt-0 mb-0 font-semibold text-white group-hover:flex"
              >
                {{ palette.colors.primary }}
              </button>
            </p>
          </div>
          <div
            class="flex flex-col items-center justify-center w-1/4 h-32 hover:w-3/4 transform duration-150 ease-in-out group hover:cursor-pointer"
            :style="{ 'background-color': palette.colors.secondary }"
          >
            <p
              class="flex-col items-center hidden p-3 mb-0 bg-black rounded-md group-hover:flex bg-opacity-10"
            >
              <button
                class="hidden mt-0 mb-0 font-semibold text-white group-hover:flex"
              >
                {{ palette.colors.secondary }}
              </button>
            </p>
          </div>
          <div
            class="flex flex-col items-center justify-center w-1/4 h-32 hover:w-3/4 transform duration-150 ease-in-out group hover:cursor-pointer"
            :style="{ 'background-color': palette.colors.tertiary }"
          >
            <p
              class="flex-col items-center hidden p-3 mb-0 bg-black rounded-md group-hover:flex bg-opacity-10"
            >
              <button
                class="hidden mt-0 mb-0 font-semibold text-white group-hover:flex"
              >
                {{ palette.colors.tertiary }}
              </button>
            </p>
          </div>
        </div>
        <div class="w-full p-3">
          <div class="flex items-center w-full">
            <p class="mb-2.5 text-base font-semibold">{{ palette.title }}</p>
          </div>
          <button
            @click="openPalette(palette.id)"
            class="flex items-center border border-slate-200 hover:border-slate-400 rounded-md px-2 py-1"
          >
            <svg
              class="w-5 h-5 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              ></path></svg
            >View palette
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="">
    <div class="modal-backdrop relative" v-if="showPalette">
    </div>
  </div>

  <transition name="appear">
    <Palette v-if="showPalette" :id="currentId" @close="openPalette" />
  </transition>
</template>

<script>
import { mapGetters } from "vuex";
import { mapState } from "vuex";
import Palette from "../components/Palette.vue";
export default {
  components: { Palette },
  data() {
    return {
      new: [],
      showPalette: false,
      currentId: null,
    };
  },
  computed: mapGetters(["allPalettes"]),
  methods: {
    openPalette(i) {
      this.showPalette = !this.showPalette;
      this.currentId = i;
    },
  },
};
</script>

<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(34, 34, 34, 0.647);
  /* z-index: 5; */
  transition: 0.39s;
}
appear-enter-from{
  /* transform: translateY(-75px); */
  opacity: 0;
}
appear-enter-to{
  /* transform: translateY(0); */
  opacity: 1;
}
appear-enter-active{
  transition: all 4s ease;
}
</style>
