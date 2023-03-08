let main_url='https://www.superheroapi.com/api.php/740410120974456/';
let RandomBtn=document.getElementById("randombtn")
let SearchBtn=document.getElementById("searchbtn")
let power=document.getElementById("stat5")
let combat=document.getElementById("stat6")
let intelligence=document.getElementById("stat1")
let durability=document.getElementById("stat3")
let speed=document.getElementById("stat2")
let strength=document.getElementById("stat4")
const main_image=document.getElementById("img")
let input=document.getElementById("user-input");



const SearchHero=()=>{
    main_image.classList.remove("imgnone");
    let search_name=input.value;
    fetch(`${main_url}/search/${search_name}`).then(response=> response.json()).then(json => {
            let flag=0;
            json.results.forEach(result=>
                {
                // console.log(result.name);
                // console.log(input.value);
                    if(result.name==input.value && flag==0){
                        flag=1;
                        console.log(result)
                        main_image.innerHTML=`<img src="${result.image.url}" />
                                                <h1 class="name" id="name"> ${result.name}<br>
                                                <span id="fullname" > ${result.biography["full-name"]}</h1>`;
                        power.innerText=`${result.powerstats.power}`
                        combat.innerText=`${result.powerstats.combat}`
                        speed.innerText=`${result.powerstats.speed}`
                        strength.innerText=`${result.powerstats.strength}`
                        durability.innerText=`${result.powerstats.durability}`
                        intelligence.innerText=`${result.powerstats.intelligence}`
                    }
                    else{
                        // alert('Not Found!')
                    }
                }
            )}
        )

}

SearchBtn.onclick=()=> SearchHero();

const getRandom=() =>{
    let random_number=Math.ceil(Math.random()*731)
    fetch(`${main_url}${random_number}`)
    .then(response => response.json())
    .then(json => {
        // console.log(json.biography["full-name"])
        main_image.innerHTML=`<img src="${json.image.url}" />
                                <h1 class="name" id="name"> ${json.name}<br> 
                                <span id="fullname"> ${json.biography["full-name"]}
                                </h1>`;
        power.innerText=`${json.powerstats.power}`
        combat.innerText=`${json.powerstats.combat}`
        speed.innerText=`${json.powerstats.speed}`
        strength.innerText=`${json.powerstats.strength}`
        durability.innerText=`${json.powerstats.durability}`
        intelligence.innerText=`${json.powerstats.intelligence}`
        
    }

)

}

RandomBtn.onclick=() => getRandom();
