<template>
    <section id="soon" class="pt-24">
        <h1 class="text-200 font-bold text-center text-6xl">Скоро в кіно</h1>
        <div class="flex w-full justify-between">
            <div v-for="category of categories" :key="category.title" class="flex pt-24">
                <v-card class="text-200 w-60 text-center cursor-pointer ">
                    <img class="w-full" :src="category.image" alt="category1">
                    <h2 class="font-semibold text-3xl pt-3">{{ category.title }}</h2>
                    <p class="pt-2 text-xs">{{ category.desc }}</p>
                </v-card>
            </div>
        </div>

    </section>
</template>

<script setup>
import category1 from "../assets/img/category1-img.png"
import category2 from "../assets/img/category2-img.png"
import category3 from "../assets/img/category3-img.png"

const categories = [
    {
        title: 'Я - Панда',
        image: category1,
        desc: 'Нова анімація «Я – панда» від Disney та Pixar розповідає історію про тринадцятирічну Мей Лі. Щоразу, коли дівчинка занадто хвилюється '
    },
    {
        title: 'Камон Камон',
        image: category2,
        desc: '«Камон камон» – зворушлива історія про порозуміння дитини та дорослого.У радіожурналіста Джонні (Гоакін Фенікс) немає сім’ї й весь свій час він присвячує роботі. '
    },
    {
        title: 'Альфа Код',
        image: category3,
        desc: 'Втративши дружину і доньку в серії загадкових зникнень, чоловік починає бачити дивний символ усюди, куди б він не пішов. '
    },
]
</script>


