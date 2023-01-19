import { getPokemon, showPokemons } from "./showPokemon.js"
import { getPokemonByType, classPokemons } from "./classPokemonBtn.js";





//creation des variables
const pkmContainer = document.getElementById('pkmContainer');
const btnContainer = document.getElementById('btnContainer');
// const typeBtn = document.querySelectorAll('typeBtn');

function choiceTypePoke() {
//     apiTypes.forEach(apiType => {
    const choicepkm = showPokemons('toto');
    console.log(choicepkm)
}

    // })
    // for(const type of types){
    // const choicepkm = getPokemon(type);
    // alert(choicepkm)
    // const choicePoke = showPokemons(divElement);
    // console.log(choicePoke);
    // const choicebtn = classPokemons(apiType.name);

    // divElement.setAttribute('class', 'displayNone');

    // pkmContainer.appendChild(choicePoke);
    // btnContainer.appendChild(choicebtn);


// }
// }
    // au click
    addEventListener('click', choiceTypePoke);