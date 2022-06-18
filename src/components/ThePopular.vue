<template>
    <section class="text-200 pt-48" id="popular">
        <h3 class="font-bold text-6xl pb-16 text-center">Популярне</h3>
        <div class="grid  grid-cols-3 gap-10">
            <v-card
            class="grid place-items-center text-center p-5 pl-4 pr-4 text-200 bg-gradient-to-b from-700/30 to-701/30 rounded-md hover:bg-700/50 transition ease-out cursor-pointer"
            v-for=" pop of pops" 
            :key="pop.title">
                <img class="pb-4" :src="pop.image" alt="popular-1">
                <h3 class="text-3xl font-bold pb-3">{{pop.title}}</h3>
                <p class="text-xs font-normal w-[70%]">{{pop.desc}}</p>
            </v-card>
        </div>
    </section>

</template>

<script setup>
import pops from "../data/popular";
</script>

