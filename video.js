
const loadCatagoris = () =>{
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then(res => res.json())
    .then(data => displayCatagoris(data.categories))
    .catch(error => console.log(error));
};

loadCatagoris();

const displayCatagoris =(categories) =>{
    const categoryContainer = document.getElementById("categoris");
     
   categories.forEach((item)=>{
    console.log(item);

    const button = document.createElement("button");
    button.classList="btn";
    button.innerText=item.category;
 
    categoryContainer.append(button);
   }
   );
};

const loadVideos = () =>{
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then(res => res.json())
    .then(data => displayVideos(data.videos))
    .catch(error => console.log(error));
};

const carddemo={
    
        "category_id": "1003",
        "video_id": "aaai",
        "thumbnail": "https://i.ibb.co/kc8CCFs/30-rock.png",
        "title": "30 Rock",
        "authors": [
            {
                "profile_picture": "https://i.ibb.co/YZN9rQZ/tina.jpg",
                "profile_name": "Tina Fey",
                "verified": false
            }
        ],
        "others": {
            "views": "4.5K",
            "posted_date": "14800"
        },
        "description": "'30 Rock,' led by Tina Fey, is a comedy series that has garnered 4.5K views. The show is a witty and humorous take on the behind-the-scenes antics of a fictional live comedy show. With its sharp writing and unforgettable characters, '30 Rock' is perfect for fans of smart, satirical humor and engaging storylines."
    
}
const displayVideos = (videos) =>{
    const videoContainer = document.getElementById("videos");
    videos.forEach((video)=>{
        console.log(video);
        const card =document.createElement("div");
        card.classList="card card-compact ";
           card.innerHTML =`
                <figure class="h-[200px]">
          <img
            src=${video.thumbnail}
            class="h-full w-full object-cover"
            alt="Shoes" />
        </figure>
        <div class=" px-0 py-2 flex gap-2">
           <div>
           <img class=" w-10 h-10 rounded-full object-cover" src=${video.authors[0].profile_picture} alt="" />
           </div>
           <div>
           <h2 class="font-bold"> ${video.title}
          
           </h2>
            <div>
           <p class="text-gray-400">${video.authors[0].profile_name}</p>
           <img src"https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png"/>
           </div>
           
           <p></p>
         
           </div>
        </div>
      
           `;
           videoContainer.append(card);
    })
 
};

loadVideos();
