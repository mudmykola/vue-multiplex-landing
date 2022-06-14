<template>
<div class="container">

  <the-navigation />
  <section class="  flex items-centr justify-between pt-10 px-10" id="home">
    <div class="  flex justify-center items-center"  >
      <div class="text-200 ">
        <h2 class=" font-black text-6xl">Movies in original
          version</h2>
          <p class="text-xl pt-5 max-w-md">Improve your English by enjoying the best brand-new movies!</p>
      </div>
      <v-image>
        <img class=" w-3/3" src="./assets/img/home-img.png">
      </v-image>
            
    </div>
  </section>
</div>

</template>

<script >
import TheNavigation from './components/TheNavigation.vue'
export default {
  components: { TheNavigation },


}
</script>

<style>
</style>