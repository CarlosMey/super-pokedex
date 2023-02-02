<template>
    <div class="text-center justify-center w-1/2 mx-auto my-5" >
      <router-link to="pokedex" class="flex justify-center text-center bg-purple-400 rounded-2xl w-48 m-auto">Arma tu propia Pokedex</router-link>
    </div>

  <div class="flex flex-wrap pt-4 pb-4 text-center justify-center bg-slate-200 rounded-2xl">
      <div v-for="(dato, index) in pokemonStore.pokemons" :key="dato.id" class="w-40 p-4 m-2  text-center justify-center border rounded-md shadow mb-5 bg-white">
          <router-link class="" :to="{name:'pokemon', params:{id: index+1}}">
            <img class="m-auto w-40" :src="`https:raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`" />
            <p>{{dato.name}}</p>
            <span class="block text-xl font-semibold">N° {{index+1}}</span>
            <span class="text-xl font-semibold">{{dato.name}}</span>
          </router-link>
      </div>
  </div>
</template>

<script setup>
import {usePokemonStore} from '../store/storePokedex';

const pokemonStore = usePokemonStore();
pokemonStore.fetchPokemon();




</script>