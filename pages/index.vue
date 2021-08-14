<template>
  <div class="container">
    <Home />
  </div>
</template>

<script>
import Home from '@/components/Home.vue'

export default {
  components: {
    Home,
  },
}
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  max-width: 100%;
}
</style>