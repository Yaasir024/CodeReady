<template>
<Hero1 />
</template>

<script setup>
import Hero1 from '../components/Hero1.vue'
</script>

<style scoped>
.home-intro {
  padding: 80px 0 100px;
}
.container {
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.container .text-content {
  width: 50%;
}
.container .image-wrapper {
  width: 40%;
}
</style>