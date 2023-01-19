const store = localStorage.getItem("pokemonPage");
const modalContainer = document.getElementById('modalContainer')

async function getPokemonById(){
    //connexion qui attend une promise
    let promise = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/${store}`);
    //verif si co ok
    if(promise.ok == true){
        //transformation en tableau json
        let pokemon =  await promise.json();
        //je return mon tableau json pokemons
        return pokemon;
    }else{
        // si error
    }
}
async function showPokemon(pokemon){
    //declaration variable
    const modalContainer = document.getElementById('modalContainer')
    const titleh3Element = document.createElement('h3');
    const imgElement= document.createElement('img');
    const ulElement = document.createElement('ul');
    const liPresentationElement = document.createElement('li');
    const liStatsElement = document.createElement('li');

    //declaration contenu
    const titleh3 = document.createTextNode(pokemon.name);
    //declaration attribut
    imgElement.setAttribute('src', pokemon.image);
    imgElement.setAttribute('alt', 'Image de ' + pokemon.name);
    //declaration noeuds
    modalContainer.appendChild(titleh3Element);
    titleh3Element.appendChild(titleh3);
    modalContainer.appendChild(imgElement);
    modalContainer.appendChild(ulElement);
    ulElement.appendChild(liElementPresentation);

}
getPokemonById().then(/*actions*/pokemon => showPokemon(pokemon));