// declaration de fonction//////////////////////////////////////////////////
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

getPokemon().then(/*actions*/pokemons => showPokemons(pokemons));
//une fois que la function getPokemon est chargée; recuperes pokemon et envoie le comme parametre dans la function showpokemon


// declaration de la fonction showPokemons//////////////////////////////////////////////////


async function showPokemons(pokemons){
    //Creation de variables
    //button
    const btnContainer = document.getElementById('btnContainer');
    const pkmContainer = document.getElementById('pkmContainer');
    const btnDivElement = document.createElement('div');
    const typeBtnAllElement = document.createElement('button');
    const typeBtnFeuElement = document.createElement('button');
    typeBtnFeuElement.setAttribute('class', 'feu')
    const typeBtnEauElement = document.createElement('button');
    typeBtnEauElement.setAttribute('class', 'eau')
    const typeBtnPlanteElement = document.createElement('button');
    typeBtnPlanteElement.setAttribute('class', 'plante')
    const typeBtnNormalElement = document.createElement('button');
    typeBtnNormalElement.setAttribute('class', 'normal')
    const typeBtnCombatElement = document.createElement('button');
    typeBtnCombatElement.setAttribute('class', 'combat')
    const typeBtnVolElement = document.createElement('button');
    typeBtnVolElement.setAttribute('class', 'vol')
    const typeBtnPoisonElement = document.createElement('button');
    typeBtnPoisonElement.setAttribute('class', 'poison')
    const typeBtnSolElement = document.createElement('button');
    typeBtnSolElement.setAttribute('class', 'sol')
    const typeBtnRocheElement = document.createElement('button');
    typeBtnRocheElement.setAttribute('class', 'roche')
    const typeBtnInsecteElement = document.createElement('button');
    typeBtnInsecteElement.setAttribute('class', 'insecte')
    const typeBtnSpectreElement = document.createElement('button');
    typeBtnSpectreElement.setAttribute('class', 'spectre')
    const typeBtnAcierElement = document.createElement('button');
    typeBtnAcierElement.setAttribute('class', 'acier')
    const typeBtnElectricElement = document.createElement('button');
    typeBtnElectricElement.setAttribute('class', 'electric')
    const typeBtnGlaceElement = document.createElement('button');
    typeBtnGlaceElement.setAttribute('class', 'glace')
    const typeBtnDragonElement = document.createElement('button');
    typeBtnDragonElement.setAttribute('class', 'dragon')
    const typeBtnTenebreElement = document.createElement('button');
    typeBtnTenebreElement.setAttribute('class', 'tenebre')
    const typeBtnFeeElement = document.createElement('button');
    typeBtnFeeElement.setAttribute('class', 'fee')
    const typeBtnPsyElement = document.createElement('button');
    typeBtnPsyElement.setAttribute('class', 'psy')
//Creation de contenu
//button
    const typeBtnAll = document.createTextNode('All');
    const typeBtnFeu = document.createTextNode('Feu');
    const typeBtnEau = document.createTextNode('Eau');
    const typeBtnPlante = document.createTextNode('Plante');
    const typeBtnNormal = document.createTextNode('Normal');
    const typeBtnCombat = document.createTextNode('Combat');
    const typeBtnVol = document.createTextNode('Vol');
    const typeBtnPoison = document.createTextNode('Poison');
    const typeBtnSol = document.createTextNode('Sol');
    const typeBtnRoche = document.createTextNode('Roche');
    const typeBtnInsecte = document.createTextNode('Insecte');
    const typeBtnSpectre = document.createTextNode('Spectre');
    const typeBtnAcier = document.createTextNode('Acier');
    const typeBtnElectric = document.createTextNode('Electric');
    const typeBtnGlace = document.createTextNode('Glace');
    const typeBtnDragon = document.createTextNode('Dragon');
    const typeBtnTenebre = document.createTextNode('Tenebre');
    const typeBtnFee = document.createTextNode('Fee');
    const typeBtnPsy = document.createTextNode('Psy');

    //Creation des noeuds
    //button
    btnContainer.appendChild(btnDivElement);
    btnDivElement.appendChild(typeBtnAllElement)
    btnDivElement.appendChild(typeBtnFeuElement);
    btnDivElement.appendChild(typeBtnEauElement);
    btnDivElement.appendChild(typeBtnPlanteElement);
    btnDivElement.appendChild(typeBtnNormalElement);
    btnDivElement.appendChild(typeBtnVolElement);
    btnDivElement.appendChild(typeBtnPoisonElement);
    btnDivElement.appendChild(typeBtnSolElement);
    btnDivElement.appendChild(typeBtnRocheElement);
    btnDivElement.appendChild(typeBtnInsecteElement);
    btnDivElement.appendChild(typeBtnSpectreElement);
    btnDivElement.appendChild(typeBtnAcierElement);
    btnDivElement.appendChild(typeBtnElectricElement);
    btnDivElement.appendChild(typeBtnGlaceElement);
    btnDivElement.appendChild(typeBtnDragonElement);
    btnDivElement.appendChild(typeBtnTenebreElement);
    btnDivElement.appendChild(typeBtnFeeElement);
    btnDivElement.appendChild(typeBtnPsyElement);
    btnDivElement.appendChild(typeBtnCombatElement);
    
    typeBtnAllElement.appendChild(typeBtnAll);
    typeBtnFeuElement.appendChild(typeBtnFeu);
    typeBtnEauElement.appendChild(typeBtnEau);
    typeBtnPlanteElement.appendChild(typeBtnPlante);
    typeBtnNormalElement.appendChild(typeBtnNormal);
    typeBtnCombatElement.appendChild(typeBtnCombat);
    typeBtnVolElement.appendChild(typeBtnVol);
    typeBtnPoisonElement.appendChild(typeBtnPoison);
    typeBtnSolElement.appendChild(typeBtnSol);
    typeBtnRocheElement.appendChild(typeBtnRoche);
    typeBtnInsecteElement.appendChild(typeBtnInsecte);
    typeBtnSpectreElement.appendChild(typeBtnSpectre);
    typeBtnAcierElement.appendChild(typeBtnAcier);
    typeBtnElectricElement.appendChild(typeBtnElectric);
    typeBtnGlaceElement.appendChild(typeBtnGlace);
    typeBtnDragonElement.appendChild(typeBtnDragon);
    typeBtnTenebreElement.appendChild(typeBtnTenebre);
    typeBtnFeeElement.appendChild(typeBtnFee);
    typeBtnPsyElement.appendChild(typeBtnPsy);

    
    
    //boucle FOR EACH Pokemon
    pokemons.forEach(pokemon => {
        
        // //creation des variables
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

        divElement.classList.add("displayNone");

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


       // //au click aller sur une page d'un pokemon
       divElement.addEventListener('click', ()=>{
           document.location.href ="modal.html";
           
           localStorage.setItem("pokemonPage", pokemon.id);
        })
        
        
        //*Boucle FOR OF POUR SELECTION PAR TYPE*/
        for(const apiType of pokemon.apiTypes){
                                                                        
    const imgElementType = document.createElement('img');
    imgElementType.setAttribute('src',apiType.image);
    imgElementType.setAttribute('alt','type du pokemon : ' + apiType.name);
    imgElementType.setAttribute('class', 'typeImg');
    divElementType.setAttribute('class', 'typeDiv')
    divElementType.appendChild(imgElementType);
                                                                        
    /*******condition********/
    typeBtnFeuElement.addEventListener('click', ()=>{
    if (divElement.classList.contains('feu')) {
    divElement.classList.remove("displayNone");
    }  
    else{
    divElement.classList.add("displayNone");
    //toggle ne fonctionne pas car pour les pokemons à double type, on boucle deux fois et le displaynone s'enleve au second tour de boucle
    } 
    })
         typeBtnEauElement.addEventListener('click', ()=>{
     if (divElement.classList.contains('eau')) {
     divElement.classList.remove("displayNone");
    }   
    else{
     divElement.classList.add("displayNone");
    }
    })
    typeBtnPlanteElement.addEventListener('click', ()=>{
            if (divElement.classList.contains('plante')) {
                divElement.classList.remove("displayNone");
            }   
            else{
                divElement.classList.add("displayNone");
            }
         })
    typeBtnNormalElement.addEventListener('click', ()=>{
             if (divElement.classList.contains('normal')) {
                divElement.classList.remove("displayNone");
            }     
            else{
                divElement.classList.add("displayNone");
            }
        })
    typeBtnCombatElement.addEventListener('click', ()=>{   
            if (divElement.classList.contains('combat')) {
                divElement.classList.remove("displayNone");
            }   
            else{
                divElement.classList.add("displayNone");
            }
        })
    typeBtnVolElement.addEventListener('click', ()=>{
            if (divElement.classList.contains('vol')) {
                divElement.classList.remove("displayNone");
            }   
            else{
                divElement.classList.add("displayNone");
            }
        })
    typeBtnPoisonElement.addEventListener('click', ()=>{
            if (divElement.classList.contains('poison')) {
                divElement.classList.remove("displayNone");
            }  
            else{
                divElement.classList.add("displayNone");
            }
        })
    typeBtnSolElement.addEventListener('click', ()=>{
            if (divElement.classList.contains('sol')) {
                divElement.classList.remove("displayNone");
            }   
            else{
                divElement.classList.add("displayNone");
            }
        })
    typeBtnRocheElement.addEventListener('click', ()=>{            
            if (divElement.classList.contains('roche')) {
            divElement.classList.remove("displayNone");
        }   
        else{
            divElement.classList.add("displayNone");
        } 
    })
    typeBtnAcierElement.addEventListener('click', ()=>{
            if (divElement.classList.contains('acier')) {
                divElement.classList.remove("displayNone");
            }  
            else{
                divElement.classList.add("displayNone");
            } 
        })
    typeBtnInsecteElement.addEventListener('click', ()=>{
            if (divElement.classList.contains('insecte')) {
                divElement.classList.remove("displayNone");
            }   
            else{
                divElement.classList.add("displayNone");
            } 
         })
    typeBtnSpectreElement.addEventListener('click', ()=>{
             if (divElement.classList.contains('spectre')) {
                 divElement.classList.remove("displayNone");
                }  
                else{
                    divElement.classList.add("displayNone");
                }
            })
    typeBtnElectricElement.addEventListener('click', ()=>{
                if (divElement.classList.contains('electric')) {
                    divElement.classList.remove("displayNone");
                }  
                else{
                    divElement.classList.add("displayNone");
                } 
            })
    typeBtnGlaceElement.addEventListener('click', ()=>{
                if (divElement.classList.contains('glace')) {
                    divElement.classList.remove("displayNone");
                }   
                else{
                    divElement.classList.add("displayNone");
                }  
            })
    typeBtnDragonElement.addEventListener('click', ()=>{
            if (divElement.classList.contains('dragon')) {
                divElement.classList.remove("displayNone");
            }  
            else{
                divElement.classList.add("displayNone");
            } 
         })
    typeBtnTenebreElement.addEventListener('click', ()=>{
             if (divElement.classList.contains('tenebre')) {
                 divElement.classList.remove("displayNone");
                }  
                // if (  apiType.name === "T\u00e9n\u00e8bres" ){
                    //     divElement.classList.add("tenebre");
                    //     divElement.classList.remove("displayNone");
                    // }  
                    
            else{
                divElement.classList.add("displayNone");
                    } 
                })
    typeBtnFeeElement.addEventListener('click', ()=>{
             if (divElement.classList.contains('fee')) {
                 divElement.classList.remove("displayNone");
                }   
            else{
                    divElement.classList.add("displayNone");
            } 
         })
    typeBtnPsyElement.addEventListener('click', ()=>{
            if (divElement.classList.contains('psy')) {
                divElement.classList.remove("displayNone");
            }  
            else{
                divElement.classList.add("displayNone");
            } 
         })

        
            //Ajout des background-color
            if (  apiType.name == "Feu" ){
                    divElement.classList.add("feu");}
            else if (  apiType.name === "Eau" ){
                        divElement.classList.add("eau");}
            else if (  apiType.name === "Plante" ){
                        divElement.classList.add("plante");}
            else if (  apiType.name === "Normal" ){
                        divElement.classList.add("normal");}
            else if (apiType.name === "Combat"){
                        divElement.classList.add("combat");}
            else if (  apiType.name === "Vol" ){
                        divElement.classList.add("vol");}
            else if (  apiType.name === "Poison" ){
                    divElement.classList.add("poison");}
            else if (  apiType.name === "Sol" ){
                        divElement.classList.add("sol");}
            else if (  apiType.name === "Roche" ){
                    divElement.classList.add("roche");}
            else if (  apiType.name === "Acier" ){
                        divElement.classList.add("acier");}
            else if (  apiType.name === "Insecte" ){
                    divElement.classList.add("insecte");}
            else if (  apiType.name === "Spectre" ){
                    divElement.classList.add("spectre");}
            else if (  apiType.name === "\u00c9lectrik" ){
                        divElement.classList.add("electric");}
            else if (  apiType.name === "Glace" ){
                        divElement.classList.add("glace");}
            else if (  apiType.name === "Dragon" ){
                        divElement.classList.add("dragon");}
            else if (  apiType.name === "T\u00e9n\u00e8bres" ){
                    divElement.classList.add("tenebre");}
            else if (  apiType.name === "F\u00e9e" ){
                        divElement.classList.add("fee");}
            else if (  apiType.name === "Psy" ){
                        divElement.classList.add("psy");}    
            else{}

         //DECLENCHER LE BOUTON TOUS
         typeBtnAllElement.addEventListener('click', ()=>{
            divElement.classList.remove("displayNone");})
        
         typeBtnAllElement.addEventListener('click', ()=>{
    divElement.classList.remove("displayNone");
    if (  apiType.name == "Feu" ){
            divElement.classList.add("feu");}
        else if (  apiType.name === "Eau" ){
            divElement.classList.add("eau");}
        else if (  apiType.name === "Plante" ){
            divElement.classList.add("plante");}
        else if (  apiType.name === "Normal" ){
            divElement.classList.add("normal");}
        else if (apiType.name === "Combat"){
            divElement.classList.add("combat");}
        else if (  apiType.name === "Vol" ){
            divElement.classList.add("vol");}
        else if (  apiType.name === "Poison" ){
            divElement.classList.add("poison");}
            else if (  apiType.name === "Sol" ){
                divElement.classList.add("sol");}
        else if (  apiType.name === "Roche" ){
            divElement.classList.add("roche");}
            else if (  apiType.name === "Acier" ){
                divElement.classList.add("acier");}
        else if (  apiType.name === "Insecte" ){
            divElement.classList.add("insecte");}
        else if (  apiType.name === "Spectre" ){
            divElement.classList.add("spectre");}
        else if (  apiType.name === "\u00c9lectrik" ){
            divElement.classList.add("electric");}
        else if (  apiType.name === "Glace" ){
            divElement.classList.add("glace");}
        else if (  apiType.name === "Dragon" ){
            divElement.classList.add("dragon");}
        else if (  apiType.name === "T\u00e9n\u00e8bres" ){
            divElement.classList.add("tenebre");}
        else if (  apiType.name === "F\u00e9e" ){
            divElement.classList.add("fee");}
        else if (  apiType.name === "Psy" ){
            divElement.classList.add("psy");}    
        else{}
                })
                
            }
        })}
        

    ///////////////////////////////////////////////////////////////////////////////////////////
    