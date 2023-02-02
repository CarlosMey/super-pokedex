import { defineStore } from "pinia";
//import {reactive} from "vue";
//import { v4 as uuidv4 } from 'uuid';
export const usePokemonStore = defineStore("PokemonStore", {
  state: () => {
    return {
        pokemons:[],
        image:"",
        pokedex:[],
        pokemonsPlayerUno:[],
        hp:0,
        pokemonesAleatorios:[],
        resultados: [],
        resultadoss: [],
        derecha: 0,
        izquierda: 0,
        gop: '',
        types: '',
    };
  },
  getters:{
    pokemonesDelRival(){
        this.pokemonsRival()
    },
    pokemonesAleatorio(){
        for (let index = 3; index < this.pokemonsPlayerUno.length; index++) {
            var x = Math.floor(Math.random()*this.pokemons.length);
            this.pokemonesAleatorios.push(this.pokemons[x])
            this.pokemons.splice(x,1);
        }
        return this.pokemonesAleatorios;
    },
    combate(){
      this.resultados = [];
      for (let index = 0; index < this.pokemonsPlayerUno.length; index++) {  
        if(this.pokemons[index].hp < this.pokemonsPlayerUno[index].hp){
          this.resultados.push('2');
          this.resultadoss.push('2')
        }else if(this.pokemons[index].hp > this.pokemonsPlayerUno[index].hp){
          this.resultados.push('1')
          this.resultadoss.push('1');
        }else if(this.pokemons[index].hp == this.pokemonsPlayerUno[index].hp){
          this.resultados.push('3')
          this.resultadoss.push('3')
        }
      }
      return this.resultados
    },
    ganadorOPerdedor(){
      for (let index = 0; index < this.pokemonsPlayerUno.length; index++){
        if(this.resultados[index] == false){
          this.derecha++
        }else if(this.resultados[index] == true){
          this.izquierda++
        }
      }
      if(this.derecha > this.izquierda){
        this.gop = '1'
        console.log(this.derecha)
        console.log(this.izquierda)
      }else if(this.derecha < this.izquierda){
        this.gop = '2'
      }else if(this.derecha == this.izquierda){
        this.gop = '3'
      }
    },
  },
  actions: {
    async findPokemon(pokemon){
        await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        .then(response => response.json())
        .then(data => {
            const {id,name,sprites,stats,types } = data
            this.pokemons.push({
                id,
                name,
                image:sprites.front_default,
                url: pokemon.url,
                hp: stats[0].base_stat,
                types: types[0].type.name,
                // species: species.name,
            })
        });
    },
    async fetchPokemon() {
      this.pokemons = [];
      const res = await fetch(
        "https://pokeapi.co/api/v2/pokemon-species?offset=0&limit=15"
      );
      const {results} = await res.json();
      results.forEach( (item) => this.findPokemon(item))
      console.log(this.pokemons)
    },
    setPokemon(pokemon){
        const index = this.pokemons.indexOf(pokemon);
            if (index > -1 && this.pokedex.length < 6) {
                this.pokemons.splice(index, 1);
                if(this.pokedex.length < 6) {
                    this.pokedex.push(pokemon);
                    if (this.pokedex.length == 6) {
                        try {
                          localStorage.removeItem('pokedexPlayerUno');
                          localStorage.removeItem('pokedexPlayerDos');
                          localStorage.setItem('pokedexPlayerUno',JSON.stringify(this.pokedex))
                          localStorage.setItem('pokedexPlayerDos',JSON.stringify(this.pokemons))
                        } catch(e) {
                          localStorage.removeItem('pokedexPlayerUno');
                          localStorage.removeItem('pokedexPlayerDos');
                        }
                      }
                }
                console.log(pokemon)
            }
    },
    async borrar(){
        this.pokemons.forEach(pokemon => this.pokemons.splice(pokemon))
        this.pokedex.forEach(pokemon => this.pokedex.splice(pokemon))
        this.fetchPokemon()
    },
    pokemonsRival(){
        this.pokemonsPlayerUno = JSON.parse(localStorage.getItem('pokedexPlayerUno'));
        this.pokemons = JSON.parse(localStorage.getItem('pokedexPlayerDos'));
    },
  },
});

