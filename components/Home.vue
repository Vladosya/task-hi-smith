<template>
  <div class="home">
    <div>
      <Header />
    </div>
    <div>
      <FilterBlock />
    </div>
    <div>
      <News />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import FilterBlock from '@/components/FilterBlock.vue'
import News from '@/components/News.vue'

export default {
  components: {
    Header,
    FilterBlock,
    News,
  },
}
</script>

<style lang="scss" scoped>
.home {
  margin: 0 auto;
  max-width: 1200px;
}
</style>