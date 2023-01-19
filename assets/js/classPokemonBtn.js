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

//creation des variables
const btnContainer = document.getElementById('btnContainer');

//declaration de fonction
async function classPokemons(types){
types.forEach(type => {
    //creation des variables
    const typeDivElement = document.createElement('div');
    const typeBtnElement = document.createElement('button');
    //creation du contenu
    const typeBtn = document.createTextNode(type.name);
    //creation des attributs
    typeBtnElement.setAttribute('class', 'typeBtn');
    //creation des noeuds
    btnContainer.appendChild(typeDivElement);
    typeDivElement.appendChild(typeBtnElement);
    typeBtnElement.appendChild(typeBtn);
    
    return typeBtn;
})
}

getPokemonByType().then(/*actions*/types => classPokemons(types));


export{getPokemonByType, classPokemons};