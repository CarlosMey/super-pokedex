"use strict";(self["webpackChunksuper_pokedex"]=self["webpackChunksuper_pokedex"]||[]).push([[974],{6686:function(e,s,o){o.d(s,{Q:function(){return t}});o(7658);var a=o(7562);const t=(0,a.Q_)("PokemonStore",{state:()=>({pokemons:[],image:"",pokedex:[],pokemonsPlayerUno:[],hp:0,pokemonesAleatorios:[],resultados:[],resultadoss:[],derecha:0,izquierda:0,gop:"",types:""}),getters:{pokemonesDelRival(){this.pokemonsRival()},pokemonesAleatorio(){for(let s=3;s<this.pokemonsPlayerUno.length;s++){var e=Math.floor(Math.random()*this.pokemons.length);this.pokemonesAleatorios.push(this.pokemons[e]),this.pokemons.splice(e,1)}return this.pokemonesAleatorios},combate(){this.resultados=[];for(let e=0;e<this.pokemonsPlayerUno.length;e++)this.pokemons[e].hp<this.pokemonsPlayerUno[e].hp?(this.resultados.push("2"),this.resultadoss.push("2")):this.pokemons[e].hp>this.pokemonsPlayerUno[e].hp?(this.resultados.push("1"),this.resultadoss.push("1")):this.pokemons[e].hp==this.pokemonsPlayerUno[e].hp&&(this.resultados.push("3"),this.resultadoss.push("3"));return this.resultados},ganadorOPerdedor(){for(let e=0;e<this.pokemonsPlayerUno.length;e++)0==this.resultados[e]?this.derecha++:1==this.resultados[e]&&this.izquierda++;this.derecha>this.izquierda?(this.gop="1",console.log(this.derecha),console.log(this.izquierda)):this.derecha<this.izquierda?this.gop="2":this.derecha==this.izquierda&&(this.gop="3")}},actions:{async findPokemon(e){await fetch(`https://pokeapi.co/api/v2/pokemon/${e.name}`).then((e=>e.json())).then((s=>{const{id:o,name:a,sprites:t,stats:i,types:l}=s;this.pokemons.push({id:o,name:a,image:t.front_default,url:e.url,hp:i[0].base_stat,types:l[0].type.name})}))},async fetchPokemon(){this.pokemons=[];const e=await fetch("https://pokeapi.co/api/v2/pokemon-species?offset=0&limit=15"),{results:s}=await e.json();s.forEach((e=>this.findPokemon(e))),console.log(this.pokemons)},setPokemon(e){const s=this.pokemons.indexOf(e);if(s>-1&&this.pokedex.length<6){if(this.pokemons.splice(s,1),this.pokedex.length<6&&(this.pokedex.push(e),6==this.pokedex.length))try{localStorage.removeItem("pokedexPlayerUno"),localStorage.removeItem("pokedexPlayerDos"),localStorage.setItem("pokedexPlayerUno",JSON.stringify(this.pokedex)),localStorage.setItem("pokedexPlayerDos",JSON.stringify(this.pokemons))}catch(o){localStorage.removeItem("pokedexPlayerUno"),localStorage.removeItem("pokedexPlayerDos")}console.log(e)}},async borrar(){this.pokemons.forEach((e=>this.pokemons.splice(e))),this.pokedex.forEach((e=>this.pokedex.splice(e))),this.fetchPokemon()},pokemonsRival(){this.pokemonsPlayerUno=JSON.parse(localStorage.getItem("pokedexPlayerUno")),this.pokemons=JSON.parse(localStorage.getItem("pokedexPlayerDos"))}}})},5974:function(e,s,o){o.r(s),o.d(s,{default:function(){return P}});var a=o(3396),t=o(4870),i=o(6686);const l={class:""},r={class:"gra tamano mx-5"},n={class:"flex justify-center"},p=["src"],h=["src"],d=["src"],c={class:"flex justify-center"},m=["src"],k=["src"],v=["src"],f=(0,a.uE)('<div class="firefly" data-v-638ab02e></div><div class="firefly" data-v-638ab02e></div><div class="firefly" data-v-638ab02e></div><div class="firefly" data-v-638ab02e></div><div class="firefly" data-v-638ab02e></div><div class="firefly" data-v-638ab02e></div><div class="firefly" data-v-638ab02e></div><div class="firefly" data-v-638ab02e></div><div class="firefly" data-v-638ab02e></div><div class="firefly" data-v-638ab02e></div><div class="firefly" data-v-638ab02e></div><div class="firefly" data-v-638ab02e></div><div class="firefly" data-v-638ab02e></div><div class="firefly" data-v-638ab02e></div>',14);var u={__name:"Fame",setup(e){const s=(0,i.Q)();return s.pokemonsRival(),console.log(s.pokemonsPlayerUno),(e,o)=>((0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",l,[(0,a._)("div",r,[(0,a._)("div",n,[(0,a._)("img",{src:(0,t.SU)(s).pokemonsPlayerUno[0].image,class:"w-60 mr-16"},null,8,p),(0,a._)("img",{src:(0,t.SU)(s).pokemonsPlayerUno[1].image,class:"w-60 mr-16"},null,8,h),(0,a._)("img",{src:(0,t.SU)(s).pokemonsPlayerUno[2].image,class:"w-60 mr-16"},null,8,d)]),(0,a._)("div",c,[(0,a._)("img",{src:(0,t.SU)(s).pokemonsPlayerUno[3].image,class:"w-60 ml-16"},null,8,m),(0,a._)("img",{src:(0,t.SU)(s).pokemonsPlayerUno[4].image,class:"w-60 ml-16"},null,8,k),(0,a._)("img",{src:(0,t.SU)(s).pokemonsPlayerUno[5].image,class:"w-60 ml-16"},null,8,v)])])]),f],64))}},y=o(89);const g=(0,y.Z)(u,[["__scopeId","data-v-638ab02e"]]);var P=g}}]);
//# sourceMappingURL=974.45c88c02.js.map