<template>
  <div class="container mx-auto bg-cd-light-100">
    <h1 class="text-5xl md:w-2/4 sm:w-3/4 w-full">Color Palette</h1>
    <div class="border-b-2 border-slate-300 p-2 flex justify-end">
      <button
        @click="addNewPalette"
        class="bg-cd-light-200 p-2 rounded-xl hover:text-white"
      >
        Add New
      </button>
    </div>
    <div class="mt-4" v-for="palette in allPalettes" :key="palette.id">
      <div
        class="px-2.5 flex flex-col w-full overflow-hidden border-b-2 border-slate-300"
      >
        <div class="w-full p-3 flex items-center">
          <p class="mr-2">{{ palette.id }}.</p>
          <div class="flex items-center w-full justify-between">
            <div class="flex w-2/6 overflow-hidden">
              <div
                class="flex flex-col items-center justify-center w-1/4 h-24"
                :style="{ 'background-color': palette.colors.main }"
              ></div>
              <div
                class="flex flex-col items-center justify-center w-1/4 h-24"
                :style="{ 'background-color': palette.colors.primary }"
              ></div>
              <div
                class="flex flex-col items-center justify-center w-1/4 h-24"
                :style="{ 'background-color': palette.colors.secondary }"
              ></div>
              <div
                class="flex flex-col items-center justify-center w-1/4 h-24"
                :style="{ 'background-color': palette.colors.tertiary }"
              ></div>
            </div>
            <p class="mb-2.5 text-base font-semibold">{{ palette.title }}</p>
            <div class="">
              <button
                class="bg-cd-light-200 p-2 mr-2 rounded-xl hover:text-white"
              >
                Edit
              </button>
              <button class="bg-cd-light-200 p-2 rounded-xl hover:text-white">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    @click="addNewPalette"
    class="modal-backdrop"
    :class="showAddPalette ? 'visible opacity-100' : 'invisible opacity-0'"
  ></div>
  <div
    class="add-palette-popup bg-unify-dark-300 fixed top-5 left-0 w-3/4 h-95% flex justify-center transfrom duration-150 ease-in-out"
    :class="
      showAddPalette
        ? 'visible opacity-100 translate-x-0'
        : 'invisible opacity-0 translate-x-l999'
    "
  >
    <h1
      @click="addNewPalette"
      class="absolute top-2 right-10 z-50 text-5xl cursor-pointer text-white hover:text-yellow-300"
    >
      x
    </h1>
    <div class="popup-content p-8 w-4/5 ">
      <h2 class="text-3xl text-white my-6 text-center">Add new Palette</h2>

      <form @submit.prevent="addNewRecipe">
        <div class="group">
          <label class="text-white text-lg block">Title</label>
          <input
            class="w-full rounded-lg outline-none px-2 py-1"
            type="text"
            v-model="newPalette.title"
          />
        </div>

        <div class="group mt-6">
          <h1 class="text-2xl text-white mb-2">Colors</h1>
          <div class="flex items-center mb-2">
            <label class="text-white text-lg block">Color #1 (Main)</label>
            <div
              class="bg-white ml-4 h-4 w-4"
              :style="{ 'background-color': newPalette.colors.main }"
            ></div>
          </div>
          <input
            class="w-full rounded-lg mb-2 outline-none px-2 py-1"
            type="text"
            v-model="newPalette.colors.main"
          />
          <div class="flex items-center mb-2">
            <label class="text-white block text-lg">Color #2 (Primary)</label>
            <div
              class="bg-white ml-4 h-4 w-4"
              :style="{ 'background-color': newPalette.colors.primary }"
            ></div>
          </div>
          <input
            class="w-full rounded-lg mb-2 outline-none px-2 py-1"
            type="text"
            v-model="newPalette.colors.primary"
          />
          <div class="flex items-center mb-2">
            <label class="text-white block text-lg">Color #3 (Secondary)</label>
            <div
              class="bg-white ml-4 h-4 w-4"
              :style="{ 'background-color': newPalette.colors.secondary }"
            ></div>
          </div>
          <input
            class="w-full rounded-lg mb-2 outline-none px-2 py-1"
            type="text"
            v-model="newPalette.colors.secondary"
          />
          <div class="flex items-center mb-2">
            <label class="text-white block text-lg">Color #4 (Tertiary)</label>
            <div
              class="bg-white ml-4 h-4 w-4"
              :style="{ 'background-color': newPalette.colors.tertiary }"
            ></div>
          </div>
          <input
            class="w-full rounded-lg mb-2 outline-none px-2 py-1"
            type="text"
            v-model="newPalette.colors.tertiary"
          />
        </div>

        <button class="bg-cd-light-200 p-2 mr-2 rounded-xl mt-4 hover:text-white" type="submit">Add Palette</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapState } from "vuex";
export default {
  data() {
    return {
      new: [],
      showAddPalette: false,
      currentId: null,
      newPalette: {
        title: "",
        colors: {
          main: "",
          primary: "",
          secondary: "",
          tertiary: "",
        },
      },
    };
  },
  computed: mapGetters(["allPalettes"]),
  methods: {
    addNewPalette() {
      this.showAddPalette = !this.showAddPalette;
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
</style>
