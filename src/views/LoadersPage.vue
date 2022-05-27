<template>
  <div class="loader-section">
    <div class="hero text-center">
      <h1 class="text-5xl text-white">CSS L<span>O</span>ADERS</h1>
      <p class="text-xl text-white mt-3 font-light tracking-0.01">
        Simple and dev-friendly ready-made CSS loading animation
      </p>
    </div>
    <div class="loaders mt-30px">
      <div class="loader-box">
        <div class="loader-1">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p
          class="source text-white font-bold cursor-pointer"
          @click="openModal(1)"
        >
          &lt;/source>
        </p>
      </div>
      <div class="loader-box">
        <div class="loader-2"></div>
        <p
          class="source text-white font-bold cursor-pointer"
          @click="openModal(2)"
        >
          &lt;/source>
        </p>
      </div>
      <div class="loader-box">
        <div class="loader-3"></div>
        <p
          class="source text-white font-bold cursor-pointer"
          @click="openModal(3)"
        >
          &lt;/source>
        </p>
      </div>
      <div class="loader-box">
        <div class="circle-loader">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p
          class="source text-white font-bold cursor-pointer"
          @click="openModal(4)"
        >
          &lt;/source>
        </p>
      </div>
      <div class="loader-box">
        <div class="loader-2"></div>
        <p
          class="source text-white font-bold cursor-pointer"
          @click="openModal(2)"
        >
          &lt;/source>
        </p>
      </div>
      <div class="loader-box">
        <div class="loader-3"></div>
        <p
          class="source text-white font-bold cursor-pointer"
          @click="openModal(3)"
        >
          &lt;/source>
        </p>
      </div>
      <div class="loader-box">
        <div class="loader-2"></div>
        <p
          class="source text-white font-bold cursor-pointer"
          @click="openModal(2)"
        >
          &lt;/source>
        </p>
      </div>
      <div class="loader-box">
        <div class="loader-1">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p
          class="source text-white font-bold cursor-pointer"
          @click="openModal(1)"
        >
          &lt;/source>
        </p>
      </div>
      <div class="loader-box">
        <div class="circle-loader">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p
          class="source text-white font-bold cursor-pointer"
          @click="openModal(4)"
        >
          &lt;/source>
        </p>
      </div>
      <div class="loader-box">
        <div class="loader-1">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p
          class="source text-white font-bold cursor-pointer"
          @click="openModal(1)"
        >
          &lt;/source>
        </p>
      </div>
      <div class="loader-box">
        <div class="loader-3"></div>
        <p
          class="source text-white font-bold cursor-pointer"
          @click="openModal(3)"
        >
          &lt;/source>
        </p>
      </div>
      <div class="loader-box">
        <div class="circle-loader">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p
          class="source text-white font-bold cursor-pointer"
          @click="openModal(4)"
        >
          &lt;/source>
        </p>
      </div>
    </div>

    <div
      class="modal-backdrop"
      :class="showModal ? 'visible opacity-100' : 'invisible opacity-0'"
    ></div>
    <div
      class="modal-container"
      :class="
        showModal
          ? 'visible opacity-100 scale-100'
          : 'invisible opacity-0 scale-75'
      "
    >
      <div class="modal-content">
        <span class="close-modal" @click="openModal">x</span>
        <h1 class="modal-htmlbg">HTML</h1>
        <h1 class="modal-cssbg">CSS</h1>
        <div class="source-1 h-full" v-if="codeIndex == 1">
          <textarea readonly class="modal-html">
            <div class="loader"><div></div><div></div><div></div></div>
            </textarea
          >
          <textarea readonly class="modal-css">
    .loader {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.loader div {
  display: inline-block;
  position: absolute;
  left: 8px;
  width: 16px;
  background: #fff;
  animation: loader 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.loader div:nth-child(1) {
  left: 8px;
  animation-delay: -0.24s;
}
.loader div:nth-child(2) {
  left: 32px;
  animation-delay: -0.12s;
}
.loader div:nth-child(3) {
  left: 56px;
  animation-delay: 0;
}
@keyframes loader {
  0% {
    top: 8px;
    height: 64px;
  }
  50%, 100% {
    top: 24px;
    height: 32px;
  }
} 
            </textarea
          >
        </div>
        <div class="source-2 h-full" v-if="codeIndex == 2">
          <textarea readonly class="modal-html">
            <div class="loader"></div>
            </textarea
          >
          <textarea readonly class="modal-css">
    .loader {
  height: 150px;
  width: 150px;
  border: 3px solid transparent;
  border-radius: 50%;
  border-top: 4px solid #f15e41;
  -webkit-animation: loader 4s linear infinite;
  animation: loader 4s linear infinite;
  position: relative;
}

.loader::before,
.loader::after {
  content: "";
  position: absolute;
  top: 6px;
  bottom: 6px;
  left: 6px;
  right: 6px;
  border-radius: 50%;
  border: 4px solid transparent;
}

.loader::before {
  border-top-color: #bad375;
  -webkit-animation: 3s loader linear infinite;
  animation: 3s loader linear infinite;
}

.loader::after {
  border-top-color: #26a9e0;
  -webkit-animation: loader 1.5s linear infinite;
  animation: loader 1.5s linear infinite;
}   
             
@-webkit-keyframes loader {
    from {
        -webkit-transform: rotate(0deg);
         transform: rotate(0deg);
    }
    to {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}   
        
@keyframes loader {
    from {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    to {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
} 
            </textarea
          >
        </div>
        <div class="source-3 h-full" v-if="codeIndex == 3">
          <textarea readonly class="modal-html">
            <div class="loader"></div>
            </textarea
          >
          <textarea readonly class="modal-css">
    .loader {
    width: 75pxx;
    height: 75px;
    margin: 0;
    background: transparent;
    border-top: 4px solid #03A9F4;
    border-right: 4px solid transparent;
    border-radius: 50%;
    -webkit-animation: 1s loader linear infinite;
    animation: 1s loader linear infinite;
}
    
@-webkit-keyframes loader {
    from {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    to {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
          
@keyframes loader {
    from {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    to {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
            </textarea
          >
        </div>
        <div class="source-4 h-full" v-if="codeIndex == 4">
          <textarea readonly class="modal-html">
            <div class="circle-loader"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </div>
            </textarea
          >
          <textarea readonly class="modal-css">
          
.circle-loader {
    position: relative;

}

.circle-loader div {
    height: 10px;
    width: 10px;
    background-color: #03A9F4;
    border-radius: 50%;
    position: absolute;
    -webkit-animation: 1.3s opaque ease-in-out infinite both;
    animation: 1.3s opaque ease-in-out infinite both;
}

.circle-loader > div:nth-child(1) {
    top: -25px;
    left: 0;
}

.circle-loader > div:nth-child(2) {
    top: -17px;
    left: 17px;
    -webkit-animation-delay: .15s;
    animation-delay: .15s;
}

.circle-loader > div:nth-child(3) {
    top: 0;
    left: 25px;
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
}

.circle-loader > div:nth-child(4) {
    top: 17px;
    left: 17px;
    -webkit-animation-delay: 0.45s;
    animation-delay: 0.45s;
}

.circle-loader > div:nth-child(5) {
    top: 25px;
    left: 0;
    -webkit-animation-delay: 0.6s;
    animation-delay: 0.6s;
}

.circle-loader > div:nth-child(6) {
    top: 17px;
    left: -17px;
    -webkit-animation-delay: 0.75s;
    animation-delay: 0.75s;
}

.circle-loader > div:nth-child(7) {
    top: 0;
    left: -25px;
    -webkit-animation-delay: .9s;
    animation-delay: .9s;
}

.circle-loader > div:nth-child(8) {
    top: -17px;
    left: -17px;
    -webkit-animation-delay: 1.05s;
    animation-delay: 1.05s;
}

@-webkit-keyframes opaque {
    0%, 40%, 100% {
      opacity: 0.1;
    }
    40% {
      opacity: 1;
    }
}

@keyframes opaque {
    0%, 40%, 100% {
      opacity: 0.1;
    }
    40% {
      opacity: 1;
    }
}
            </textarea
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    const showModal = ref(false);
    const codeIndex = ref("");
    const openModal = (i) => {
      showModal.value = !showModal.value;
      codeIndex.value = i;
    };
    return { showModal, openModal, codeIndex };
  },
};
</script>

<style scoped>
.loader-section {
  background: #222;
  min-height: 100vh;
  padding: 60px 0;
}
.loaders {
  display: flex;
  flex-wrap: wrap;
}
.loader-box {
  flex: 0 0 25%;
  width: 25%;
  height: 250px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: 1px solid #111;
  position: relative;
}
.source {
  position: absolute;
  bottom: 10px;
}

/* Modal */
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(34, 34, 34, 0.647);
  z-index: 5;
  transition: 0.39s;
}
.modal-container {
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  transition: 0.4s all cubic-bezier(0.57, -0.26, 0, 1.02);
}
/* Modal Content/Box */
.modal-content {
  background-color: #222;
  margin: 15% auto;
  border: 1px solid #111;
  width: 60%; 
  height: 60%;
  position: relative;
}
.modal-content .modal-html {
  background: #222;
  color: white;
  width: 100%;
  height: 20%;
  padding: 10px;
  resize: none;
  border: none;
  outline: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}
.modal-content .modal-css {
  background: #222;
  color: white;
  width: 100%;
  height: 80%;
  padding: 12px;
  resize: none;
  border: none;
  outline: none;
}
.close-modal {
  position: absolute;
  font-weight: bold;
  font-size: 46px;
  right: 10px;
  top: -48px;
  color: #fefefe;
  cursor: pointer;
}
.modal-htmlbg {
  position: absolute;
  right: 40px;
  top: 4px;
  font-size: 22px;
  color: rgba(255, 255, 255, 0.2);
}
.modal-cssbg {
  position: absolute;
  font-size: 22px;
  right: 52px;
  top: 90px;
  color: rgba(255, 255, 255, 0.2);
}

/* Loaders */
/* Loader-1 */
.loader-1 {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.loader-1 div {
  display: inline-block;
  position: absolute;
  left: 8px;
  width: 16px;
  background: #fff;
  animation: loader-1 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.loader-1 div:nth-child(1) {
  left: 8px;
  animation-delay: -0.24s;
}
.loader-1 div:nth-child(2) {
  left: 32px;
  animation-delay: -0.12s;
}
.loader-1 div:nth-child(3) {
  left: 56px;
  animation-delay: 0;
}
@keyframes loader-1 {
  0% {
    top: 8px;
    height: 64px;
  }
  50%,
  100% {
    top: 24px;
    height: 32px;
  }
}
/* Loader-2 */
.loader-2 {
  height: 150px;
  width: 150px;
  border: 3px solid transparent;
  border-radius: 50%;
  border-top: 4px solid #f15e41;
  -webkit-animation: loader-2 4s linear infinite;
  animation: loader-2 4s linear infinite;
  position: relative;
}

.loader-2::before,
.loader-2::after {
  content: "";
  position: absolute;
  top: 6px;
  bottom: 6px;
  left: 6px;
  right: 6px;
  border-radius: 50%;
  border: 4px solid transparent;
}

.loader-2::before {
  border-top-color: #bad375;
  -webkit-animation: 3s loader-2 linear infinite;
  animation: 3s loader-2 linear infinite;
}

.loader-2::after {
  border-top-color: #26a9e0;
  -webkit-animation: loader-2 1.5s linear infinite;
  animation: loader-2 1.5s linear infinite;
}

@-webkit-keyframes loader-2 {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loader-2 {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

/* Loader-3 */
.loader-3 {
  width: 75px;
  height: 75px;
  margin: 0;
  background: transparent;
  border-top: 4px solid #03a9f4;
  border-right: 4px solid transparent;
  border-radius: 50%;
  -webkit-animation: 1s loader-3 linear infinite;
  animation: 1s loader-3 linear infinite;
}

@-webkit-keyframes loader-3 {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loader-3 {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

/* Loader 4 */
      
.circle-loader {
    position: relative;

}

.circle-loader div {
    height: 10px;
    width: 10px;
    background-color: #03A9F4;
    border-radius: 50%;
    position: absolute;
    -webkit-animation: 1.3s opaque ease-in-out infinite both;
    animation: 1.3s opaque ease-in-out infinite both;
}

.circle-loader > div:nth-child(1) {
    top: -25px;
    left: 0;
}

.circle-loader > div:nth-child(2) {
    top: -17px;
    left: 17px;
    -webkit-animation-delay: .15s;
    animation-delay: .15s;
}

.circle-loader > div:nth-child(3) {
    top: 0;
    left: 25px;
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
}

.circle-loader > div:nth-child(4) {
    top: 17px;
    left: 17px;
    -webkit-animation-delay: 0.45s;
    animation-delay: 0.45s;
}

.circle-loader > div:nth-child(5) {
    top: 25px;
    left: 0;
    -webkit-animation-delay: 0.6s;
    animation-delay: 0.6s;
}

.circle-loader > div:nth-child(6) {
    top: 17px;
    left: -17px;
    -webkit-animation-delay: 0.75s;
    animation-delay: 0.75s;
}

.circle-loader > div:nth-child(7) {
    top: 0;
    left: -25px;
    -webkit-animation-delay: .9s;
    animation-delay: .9s;
}

.circle-loader > div:nth-child(8) {
    top: -17px;
    left: -17px;
    -webkit-animation-delay: 1.05s;
    animation-delay: 1.05s;
}

@-webkit-keyframes opaque {
    0%, 40%, 100% {
      opacity: 0.1;
    }
    40% {
      opacity: 1;
    }
}

@keyframes opaque {
    0%, 40%, 100% {
      opacity: 0.1;
    }
    40% {
      opacity: 1;
    }
}


/* Media Query */
@media only screen and (max-width: 950px) {
    .loader-box {
  flex: 0 0 33.33%;
  width: 33.33%;
}
}
@media only screen and (max-width: 760px) {
    .loader-box {
  flex: 0 0 50%;
  width: 50%;
}
.modal-content {
  width: 80%;
}
}
</style>
