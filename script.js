const pokeimagefront = document.getElementById("fotito-front")
const pokeimageback = document.getElementById("fotito-back")
const pokename = document.getElementById("nombre")
const pokehp = document.getElementById("vida")
const pokeattack = document.getElementById("ataque")
const pokedefence = document.getElementById("defensa")
const pokespecialattack = document.getElementById("ataque-especial")
const pokespecialdefence = document.getElementById("defensa-especial")
const pokespeed = document.getElementById("velocidad")

const colores = {
    electric: '#FFEA70',
    normal: '#B09398',
    ice: '#AFEAFD',
    fire: '#FF675C',
    water: '#0596C7',
    rock: '#999799',
    flying: '#7AE7C7',
    grass: '#4A9681',
    psychic: '#FFC6D9',
    ghost: '#561D25',
    bug: '#A2FAA3',
    poison: '#795663',
    ground: '#D2B074',
    dragon: '#DA627D',
    steel: '#1D8A99',
    fighting: '#2F2F2F',
    default: '#2A1A1F',
}
//funcion que llama el fetch cuando haces submit en el form
const searchPokemon = event =>
{   //event prevent Default es para que el form no haga reset a la pagina
    event.preventDefault();
    //aqui llamamos al input en el form para convertirlo en value y hacer el fetch
    const  { value }  = event.target.pokemon;
    fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
    .then(data=> data.json())
    .then(response => renderpokemonData(response))
}

const renderpokemonData = data => {
    console.log(data)
const sprite_front = data.sprites.front_default;
    pokeimagefront.innerHTML="<img src='"+ sprite_front +"' alt='test' width='150px' height='150px'>";
const sprite_back = data.sprites.back_default;
    pokeimageback.innerHTML="<img src='"+ sprite_back +"' alt='test' width='150px' height='150px'>";
const pokenombre = data.name;
    pokename.innerHTML=pokenombre;
const pokevida = data.stats[0].base_stat;
    pokehp.innerHTML=pokevida;
const pokeataque= data.stats[1].base_stat;
    pokeattack.innerHTML= pokeataque;
const pokedefensa= data.stats[2].base_stat;
    pokedefence.innerHTML= pokedefensa;
const pokeataqueespecial= data.stats[3].base_stat;
    pokespecialattack.innerHTML= pokeataqueespecial;
const pokedefensaespecial= data.stats[4].base_stat;
    pokespecialdefence.innerHTML= pokedefensaespecial;
const pokevelocidad= data.stats[5].base_stat;
    pokespeed.innerHTML= pokevelocidad;
}
