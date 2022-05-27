import { createStore } from "vuex";
import assets from './modules/assets'
import palette from './modules/palette'

const store = createStore({
  modules: {
      palette,
      assets
  }
});

export default store;
