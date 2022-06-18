<template>
  <div class="container">
    <the-navigation />
    <the-header />
    <the-category />
    <the-about />
    <the-popular />
  </div>

</template>

<script >
import TheNavigation from './components/TheNavigation.vue'
import TheHeader from './components/TheHeader.vue'
import TheCategory from './components/TheCategory.vue'
import TheAbout from './components/TheAbout.vue'
import ThePopular from './components/ThePopular.vue'
export default {
  components: { TheNavigation, TheHeader, TheCategory, TheAbout, ThePopular },


}
</script>

<style>
</style>