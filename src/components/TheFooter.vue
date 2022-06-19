<template>
    <footer class="">
        <div class="flex justify-between">
            <div>
                <h1 class="uppercase text-100 font-bold text-2xl">multiplex</h1>
                <p class="text-200 leading-loose tracking-wide max-w-lg text-lg pt-4">Lorem ipsum dolor sit amet,
                    consectetur adipiscing
                    elit.
                    Elementum fringilla ultricies eget amet blandit quis sit duis. Suspendisse fames venenatis volutpat
                    urna
                    dui. Quisque non diam mi ullamcorper.</p>
            </div>
            <v-list class="text-200 flex">
                <div>
                    <h3 class="pb-4 font-bold text-xl">About</h3>
                    <div class="flex flex-col">
                        <a class="pb-2 text-sm text-200/60 hover:text-300 transition-all ease-out" href="#">About Us</a>
                        <a class="pb-2 text-sm text-200/60 hover:text-300 transition-all ease-out" href="#">Feature</a>
                        <a class=" text-sm text-200/60 hover:text-300 transition-all ease-out" href="#">Career</a>

                    </div>
                </div>
                <div class="px-20">
                    <h3 class="pb-4 font-bold text-xl">Company</h3>
                    <div class="flex flex-col">
                        <a class="pb-2 text-sm text-200/60 hover:text-300 transition-all ease-out" href="#">Our Team</a>
                        <a class="pb-2 text-sm text-200/60 hover:text-300 transition-all ease-out" href="#">Partnert</a>
                        <a class="text-sm text-200/60 hover:text-300 transition-all ease-out" href="#">Question</a>

                    </div>
                </div>
                <div>
                    <h3 class="pb-4 font-bold text-xl">Service</h3>
                    <div class="flex flex-col">
                        <a class="pb-2 text-sm text-200/60 hover:text-300 transition-all ease-out" href="#">Support</a>
                        <a class="pb-2 text-sm text-200/60 hover:text-300 transition-all ease-out" href="#">Feedback</a>
                        <a class="text-sm text-200/60 hover:text-300 transition-all ease-out" href="#">Contact</a>
                    </div>
                </div>
            </v-list>
        </div>

        <v-social class="grid place-items-center mt-32">
            <div class="flex items-center gap-5">
                <a class="bg-300 p-2 rounded-md h-12 w-12 grid place-items-center hover:bg-701/60 transition-all ease-out" href="#">
                    <img class="h-full" src="../assets/img/social/fb-img.svg" alt="fb">
                </a>
                <a class="bg-300 p-2 rounded-md h-12 w-12 grid place-items-center hover:bg-701/60 transition-all ease-out" href="#">
                    <img class="h-full" src="../assets/img/social/insta-img.svg" alt="insta">
                </a>
                <a class="bg-300 p-2 rounded-md h-12 w-12 grid place-items-center hover:bg-701/60 transition-all ease-out" href="#">
                    <img class="h-full" src="../assets/img/social/twitter-img.svg" alt="twitter">
                </a>
            </div>
            <p class="text-200 pt-10 pb-20 text-xl font-medium "> &copy; Copyright, Multiplex 2021, All rights reserved.</p>
        </v-social>
    </footer>

</template>

