

async function getPokemon(){
    //connexion qui attend une promise
    let promise = await fetch("https://pokebuildapi.fr/api/v1/pokemon");
    //verif si co ok
    if(promise.ok == true){
        //transformation en tableau json
        let pokemons =  await promise.json();
        //je return mon tableau json poke
        return pokemons;
    }else{
        // si error
    }
}

async function getPokemonByType(){
    //connexion qui attend une promise
    let promise = await fetch("https://pokebuildapi.fr/api/v1/types");
    //verif si co ok
    if(promise.ok == true){
        //transformation en tableau json
        let types =  await promise.json();
        //je return mon tableau json poke
        return types;
    }else{
        // si error
    }
}

const pkmContainer = document.getElementById('pkmContainer');

async function showPokemons(pokemons){
    pokemons.forEach(pokemon => {
        //creation des variables
        const divElement = document.createElement('div');
        const h3Element = document.createElement('h3');
        const imgElement = document.createElement('img');
        const divElementType = document.createElement('div');
        const divElementStat = document.createElement('div');
        const pElementHP = document.createElement('p');
        const pElementAtt = document.createElement('p');
        const pElementDef = document.createElement('p');
        const pElementAttSpe = document.createElement('p');
        const pElementDefSpe = document.createElement('p');
        const pElementSp = document.createElement('p');
        //creation du contenu
        const pokemonName = document.createTextNode(pokemon.name + ' (' + pokemon.id + ')');
        const pokemonStatHP = document.createTextNode('Points de vie : ' + pokemon.stats.HP);
        const pokemonStatAtt = document.createTextNode('Attaque :' + pokemon.stats.attack);
        const pokemonStatAttSpe = document.createTextNode('Attaque Spéciale :' + pokemon.stats.special_attack);
        const pokemonStatDef = document.createTextNode(' Defense : ' + pokemon.stats.defense);
        const pokemonStatDefSpe = document.createTextNode('Defense Spéciale : ' + pokemon.stats.special_defense);
        const pokemonStatSp = document.createTextNode('Vitesse :' + pokemon.stats.speed);

        //creation des attributs
        h3Element.setAttribute('class', 'pokemonName');
        divElementStat.setAttribute('class', 'pokemonStat');
        imgElement.setAttribute('src',pokemon.image);
        imgElement.setAttribute('alt','image de ' + pokemon.name);

        for(const apiType of pokemon.apiTypes){
        const imgElementType = document.createElement('img');
        imgElementType.setAttribute('src',apiType.image);
        imgElementType.setAttribute('alt','type du pokemon : ' + apiType.name);
        imgElementType.setAttribute('class', 'typeImg');
        divElementType.setAttribute('class', 'typeDiv')
        divElementType.appendChild(imgElementType);
    }

        //creation des noeuds
        pkmContainer.appendChild(divElement);
        divElement.appendChild(pokemonName);
        divElement.appendChild(h3Element);
        h3Element.appendChild(pokemonName);
        divElement.appendChild(imgElement);
        divElement.appendChild(divElementType);
        divElement.appendChild(pElementHP);
        divElement.appendChild(pElementAtt);
        divElement.appendChild(pElementDef);
        divElement.appendChild(pElementAttSpe);
        divElement.appendChild(pElementDefSpe);
        divElement.appendChild(pElementSp);
        pElementHP.appendChild(pokemonStatHP);
        pElementAtt.appendChild(pokemonStatAtt);
        pElementAttSpe.appendChild(pokemonStatAttSpe);
        pElementDef.appendChild(pokemonStatDef);
        pElementDefSpe.appendChild(pokemonStatDefSpe);
        pElementSp.appendChild(pokemonStatSp);

    
    });

}



getPokemon().then(/*actions*/pokemons => showPokemons(pokemons));
//une fois que la function getPokemon est chargée; recuperes pokemon et envoie le comme parametre dans la function showpokemon



const btnContainer = document.getElementById('btnContainer');
async function classPokemons(types){
types.forEach(type => {
    //creation des variables
    const typeDivElement = document.createElement('div');
    const typeBtnElement = document.createElement('button');
    //creation du contenu
    const typeBtn = document.createTextNode(type.name);
    //creation des attributs

    //creation des noeuds
    btnContainer.appendChild(typeDivElement);
    typeDivElement.appendChild(typeBtnElement);
    typeBtnElement.appendChild(typeBtn);

    typeBtn.addEventListener('click', ()=>{
        divElement.setAttribute('class', 'displayNone');
        
     })   
})
}

getPokemonByType().then(/*actions*/types => classPokemons(types));



// function choicePoke() {
    
//     for(const pokemon of pokemons){
//         const choicepkm = showPokemons(pokemon.name);
//         console.log(choicepkm)
//     }
//     }
    
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
        // addEventListener('click', choicePoke);