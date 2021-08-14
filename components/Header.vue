<template>
  <div class="header">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: this.$store.state.title,
    }
  },
}
</script>

<style lang="scss" scoped>
.header {
  text-align: center;
  background-color: #dcdcdc;

  h1 {
    padding: 30px;
    font-size: 30px;
  }
}
</style>