
const loadCatagoris = () =>{
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then(res => res.json())
    .then(data => displayCatagoris(data.categories))
    .catch(error => console.log(error));
};


const displayCatagoris =(categories) =>{
   
    const categoryContainer = document.getElementById("categoris");
     
   categories.forEach((item)=>{
    
    const buttonContainer = document.createElement("div");

   buttonContainer.innerHTML=`<button onclick="loadCardsCatagory('${item.category}')" class="btn"><img class="h-5 w-5" src="${item.category_icon}">
    <p>${item.category}</p></button>
    `
    categoryContainer.append(buttonContainer);
   }
   );
};

loadCatagoris();



 const loadCardsCatagory =(category) =>{
   console.log(category);
    fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`)
   
    .then(res => res.json())
    .then(data =>{
        document.getElementById("cards").innerHTML='';
        document.getElementById('spinner').style.display='block'
        setTimeout(()=>{
            displayCards(data.data)
            document.getElementById('spinner').style.display='none'
        },2000)
    } )
  
    .catch(error => console.log(error));

 }

  const  likedImages=(id)=>{
    fetch(`https://openapi.programming-hero.com/api/peddy/pet/${id}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
       showLikeCard(data.petData);
        
    })
    .catch(error => console.log(error));
  }

function showLikeCard(petData){
    console.log(petData.image);
    const likeImageContainer=document.getElementById("liked-pet")
    const likecard=document.createElement('div')
    likecard.innerHTML=`
    <img src="${petData.image}" alt='no img' class="w-28 h-28 p-2">
    `
    likeImageContainer.appendChild(likecard)
}
function filter(pets){
    //const sorted = numbers.sort((a, b) => a - b);
    pets.sort((a,b)=>(b.price-a.price))
    displayCards(pets);
}
 function sortByPrice(){
    fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then(res => res.json())
    .then(data => {
       
        // displayCards(data.pets); 
        filter(data.pets);
    })
    .catch(error => console.log(error));
}
function timer(){
    let count =document.getElementById('cnt').innerText
    count=parseInt(count)
    count--;
    if(count<=0){
        clearInterval(countDown)
        
    }
    else{
        document.getElementById('cnt').innerText=count
    }
    
}
function ShowAdopt(id){
    my_modal_5.showModal()
    const countDown =setInterval(timer,1000)
    const modalCard =document.getElementById('hid-close')
    setTimeout(()=>{
        modalCard.click()
        document.getElementById(`btn-${id}`).setAttribute('disabled',true)
        
    },3000)
    document.getElementById('cnt').innerText='3';
}
const loadCards = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then(res => res.json())
    .then(data => {
       
        displayCards(data.pets); 
        console.log(data);
    })
    .catch(error => console.log(error));
};

loadCards();

const displayCards = (data) => {
  
    console.log(data);
    const cardContainer = document.getElementById("cards");
         cardContainer.innerHTML='';
         if(data.length==0){
            cardContainer.classList.add('shadow','p-5');
            cardContainer.innerHTML=`
            <img src ="images/error.webp">
            `
            cardContainer.appendChild(card);
         }
          else{
            data.forEach((item) => {
                const card = document.createElement("div");
                card.classList.add("card");
        
                card.innerHTML = `
                   <div class="border p-1 shadow rounded-xl">  <img class="rounded-xl" src="${item.image}" alt="${item.category}">
                    <h3 class="font-bold text-xl">${item.breed?item.breed:'not available'}</h3>
                    <div class="card-info">
                        <p>Breed: ${item.category?item.category:"not found"}</p>
                        <p>Birth: ${item.date_of_birth?item.date_of_birth:'Not found'}</p>
                        <p>Gender: ${item.gender?item.gender:'not found'}</p>
                        <p>Price: $${item.price?item.price:'not available'}</p>
                    </div>
                    <div class="card-buttons items-center justify-center mx-auto  ">
                         <button onclick="likedImages(${item.petId})" class="btn p-1 lg:p-4"><i  class="fa-regular fa-heart "></i></button>
                        <button id="btn-${item.petId}" onclick="ShowAdopt(${item.petId})" class="btn">Adopt</button>
                        <button onclick="showDetails(${item.petId})" class="btn">Details</button>
                    </div><div/>
                `;
        
                cardContainer.appendChild(card);
            });
          }
};

function showDetails(id){
    
    
    fetch(`https://openapi.programming-hero.com/api/peddy/pet/${id}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
     displayDetails(data.petData);
        
    })

    
}

function displayDetails(item){
    const Details=document.getElementById('detailsContent');
    const card =document.createElement('div');
    Details.innerHTML='';
    card.innerHTML=
     `
     <img src="${item.image}" alt="${item.category}">
                    <h3 class="font-bold text-xl">${item.breed?item.breed:'not available'}</h3>
                    <div class="card-info">
                        <p>Breed: ${item.category?item.category:"not found"}</p>
                        <p>Birth: ${item.date_of_birth?item.date_of_birth:'Not found'}</p>
                        <p>Gender: ${item.gender?item.gender:'not found'}</p>
                        <p>Price: $${item.price?item.price:'not available'}</p>
                    </div>
    
    `

    Details.appendChild(card)
    my_modal_7.showModal();
}

