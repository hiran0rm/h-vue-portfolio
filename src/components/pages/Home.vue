<template>
  <section class="home">
    <HomeHero/>
    <HomeAbout/>
  </section>
</template>
<script>
import HomeHero from '../parts/HomeHero.vue'
import HomeAbout from '../parts/HomeAbout.vue'
 
export default {
  components: {
    HomeHero,
    HomeAbout
  }
}
</script>

<style lang="scss" scoped>
.home {
  padding-bottom: 50px;
}
</style>