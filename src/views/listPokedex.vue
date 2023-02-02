<template>
    <div class="continer">
        <router-link to="Combate" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Ir a pelear :v</router-link>
        <div class="flex mt-2">
            <div class="flex-none w-4/6 m-1 bg-slate-200 rounded-2xl">
                <div class="flex pt-4 pb-4 text-center justify-center flex-wrap">
                    <div @click="pokemonStore.setPokemon(pokemon)" v-for="(pokemon, index) in pokemones" :key="pokemon.id" class=" w-40 p-4 m-2  text-center justify-center border rounded-md shadow mb-5 bg-white ">
                            <img class="m-auto w-40" :src="pokemon.image" />
                            <span class="block text-xl font-semibold">N° {{index+1}}</span>
                            <span class="text-xl font-semibold">{{pokemon.name}}</span>
                    </div>
                </div>
            </div>
            <div class="flex-initial w-2/6 m-1">
                <div @click="pokemonStore.borrar()" class=" focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 mb-1">Borrar</div>
                <div class="flex pt-4 pb-4 text-center justify-center flex-wrap bg-orange-200 rounded-2xl">
                    <div  v-for="(pokemon, index) in pokemonStore.pokedex" :key="pokemon.id" class="w-40 p-4 m-2  text-center justify-center border rounded-md shadow mb-5 bg-white ">
                        <div v-if="pokemonStore.pokedex == tru">Selecciona tus Puchamones</div>
                        <img class="m-auto w-40" :src="pokemon.image" alt="">
                        <span class="block text-xl font-semibold">N° {{index+1}}</span>
                        <span class="text-xl font-semibold">{{pokemon.name}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {usePokemonStore} from '../store/storePokedex';
import {computed} from "vue";

const pokemonStore = usePokemonStore();
pokemonStore.fetchPokemon();

const pokemones = computed(() => {
    return pokemonStore.pokemons
})

</script>