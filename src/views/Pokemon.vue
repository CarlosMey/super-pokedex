<template>
    <div class="text-center bac0">
      <div class="w-64 m-auto ">
          <div class="flex justify-center text-center bg-sky-300 rounded-2xl m-3 bc1">
              <span class="text-xl">Puchamon : <span class="text-xl font-semibold">{{name}}</span></span>
          </div>
        </div>
        <div class="sm:w-[32rem] w-96 flex justify-center m-auto  rounded-2xl my-2 bc2">      
            <div class="flex justify-center m-3"> 
                <img class=" w-48" :src="image" alt="">
            </div>
          </div>
        <div class="sm:w-[32rem] w-96 m-auto bg-teal-400 rounded-2xl"> 
          <div class="flex items-center justify-center m-auto ">
            <div class="flex justify-center text-centerm-auto">
                <span class="text-xl block">{{name}} <span class="font-bold">Forma Shiny</span></span> 
            </div>
            <div class="flex justify-center">
                <img class="w-48" :src="shiny.front" alt="">
            </div>
            <div class="flex justify-center">
                <img class="w-48" :src="shiny.back" alt="">
            </div>
          </div>
          <div class="flex items-center justify-center m-auto">
            <div class="flex justify-center text-centerm-auto">
                <span class="text-xl block">{{name}} <span class="font-bold">Forma Normal</span></span> 
            </div>
            <div class="flex justify-center  ">
                <img class="w-48" :src="male.front" alt="">
            </div>
            <div class="flex justify-center ">
                <img class="w-48" :src="male.back" alt="">
            </div>
          </div>
    </div>
    <div class="sm:w-[32rem] w-96 flex m-auto bg-violet-300 rounded-2xl my-2">
      <div class="float-left p-1 w-80 sm:ml-2 mx-auto my-2 flex-col">
          <span class="float-left text-xl old">Tipo del Puchamon:  <span class="text-xl font-semibold">{{ types }}</span></span>
          <span class="float-left text-xl">Poder Principal:   <span class="text-xl font-semibold">{{ moves }}</span></span>
          <p class="float-left text-xl ">Habilidad:  <span class="text-xl font-semibold">{{ abilityUno }}</span></p>
      </div>
    </div>
  </div>
</template>

<script >
export default {
  name: "Pokemon",
  data() {
    return {
      id: this.$route.params.id,
      image:"",
      name:"",
      base_experience:0,
      shiny:{
        front:"",
        back:""
      },
      height:0,
      order:0,
      male:{
        front:"",
        back:"",
      },
      poderes:[],
      podere:[],
      types:"",
      moves:"",
      peso:0,
      altura:0,
      abilityUno:"",
      abilityDos:"",
    };
  },
  methods: {
    async fetchPokemon(){
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}/`);
        const data = await res.json()
        this.name = data.name
        this.image = data.sprites.front_default
        this.base_experience = data.base_experience
        this.shiny.front = data.sprites.front_shiny
        this.shiny.back = data.sprites.back_shiny
        this.height = data.height
        this.order =  data.order
        this.male.front = data.sprites.front_default
        this.male.back = data.sprites.back_default
        this.types = data.types[0].type.name,
        this.moves = data.moves[0].move.name,
        this.peso = data.weight,
        this.altura = data.height,
        this.abilityUno = data.abilities[0].ability.name
        this.abilityDos = data.abilities[1].ability.name
        console.log(data)
    },

    async evolucionPokemon(){
      const res = await fetch(`https://pokeapi.co/api/v2/evolution-chain/${this.id}/`);
      const data = await res.json()
      console.log(data);
    }
  },
  async created() {
    await this.fetchPokemon()
    await this.evolucionPokemon()
  },
}


</script>


<style scoped>

.bc1{
  background: rgb(185,182,235);
background: linear-gradient(90deg, rgba(185,182,235,1) 0%, rgba(103,103,223,1) 26%, rgba(0,212,255,1) 100%);
}
.bc2{
  background: rgb(217,217,217);
background: linear-gradient(90deg, rgba(217,217,217,1) 0%, rgba(202,202,255,1) 26%, rgba(165,240,255,1) 100%);
}

</style>