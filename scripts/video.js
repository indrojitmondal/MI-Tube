// loadData 
const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(res => res.json())
        .then(data => displayData(data.categories))
        .catch(error => console.log(error))
}
// displayData 
const displayData = (categories) => {
 // console.log(categories)
 let ct=0;
    categories.forEach((item) => {

        // console.log(item.category);
        const categoriesContainer = document.getElementById('categories');
        //    console.log(categoriesContainer);
        const button = document.createElement('button');
        button.classList='px-4 rounded-md py-2 border-2 ';
        button.innerText = item.category;
        button.setAttribute('id',`${item.category_id}`);
        categoriesContainer.appendChild(button);

    })

}
loadCategories();

// loadVideos 
const loadVideos = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        .then(res => res.json())
        .then(data => displayVideos(data.videos))
        .catch(error => console.log(error))
}


const displayVideos = (videos,category='allVideos') => {
    console.log(videos);
    const videoContainer = document.getElementById(category);
    // document.getElementById('allVideos').classList.add('hidden');
    videoContainer.innerHTML='';
    
    console.log(videoContainer);
    videos.forEach(video => {
        console.log(video.thumbnail);
        console.log(video.authors[0].profile_picture)
        const card = document.createElement('div');
        card.classList = 'card card-compact';
        card.innerHTML =
            `   
        <figure class='h-[200px] relative'>
        <img
          src=${video.thumbnail}
          class='w-full h-full  object-cover'
          alt="Shoes" />
          <span class='absolute right-2 bottom-2 bg-black text-white'>${video.others.posted_date}</span>
      </figure>
      <div class="px-0 py-2 flex gap-2">
           <div>
                <img class="w-10 h-10 rounded-full object-cover" src="${video.authors[0].profile_picture}" />
           </div>
           <div>
              <h2 class="font-bold">${video.title}</h2>
              <div class="flex items-center gap-2">
                    <p class="text-gray-400">${video.authors[0].profile_name}</p>
                   
                    ${video.authors[0].verified ===true ?
                    '<img class="w-5 " src="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png" />' : ""
                    }
              
                    </div>
              
              <p> </p>
        
           </div>
      
      </div>
        `;

        videoContainer.append(card);


        
    })
}
loadVideos();

function showVideos(category){

}

// Delegation 
document.getElementById('categories').addEventListener('click', async(event)=>{
    // event.stopImmediatePropagation();

    document.getElementById('noData').classList.add ('hidden');
    let current=event.target;
    const id = event.target.getAttribute('id');
    restAllButton();
    // alert(id);

    const res = await fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`);
    const data = await res.json();
    console.log('category',data.category);
    document.getElementById('allVideos').classList.add('hidden');
    document.getElementById('musicVideos').classList.add('hidden');
    document.getElementById('comedyVideos').classList.add('hidden');
    document.getElementById('drawingVideos').classList.add('hidden');
    console.log(event.target);
    event.target.classList.remove('hidden');
   

    if(data.category.length===0){
        // alert('check')
        document.getElementById('noData').classList.remove('hidden');
                
        current.classList.add('active');
        document.getElementById('drawingVideos').classList.remove('hidden');
        document.getElementById('drawingVideos').innerHTML=''; 
       displayVideos(data.category,'drawingVideos');

    }
    
    else if(id==='1001'){
        document.getElementById('musicVideos').classList.remove('hidden');
        current.classList.add('active');
    document.getElementById('musicVideos').innerHTML='';    
    displayVideos(data.category,'musicVideos');

    }
    else if(id==='1003'){
        current.classList.add('active');
       
        document.getElementById('comedyVideos').classList.remove('hidden');
        document.getElementById('comedyVideos').innerHTML='';  
        displayVideos(data.category,'comedyVideos');
    //  alert(displayVideos(data.category,'drawingVideos'))
    }
    else {
        // document.getElementById('allVideos').classList.remove('hidden');
        // document.getElementById('allVideos').innerHTML=''; 
    //    displayVideos(data.category,'allVideos');
    }
 
})

function showAll(){
    document.getElementById('noData').classList.add ('hidden');
    restAllButton();
    document.getElementById('allVideos').classList.remove('hidden'); 
    document.getElementById('musicVideos').classList.add('hidden'); 
    document.getElementById('comedyVideos').classList.add('hidden'); 
    document.getElementById('drawingVideos').classList.add('hidden'); 
    document.getElementById('btn-sort').classList.add('active'); 
 
}
function restAllButton(){
    const allButtons=document.querySelectorAll('button');
    allButtons.forEach(button =>{
        button.classList.remove('active');
    })
    
}

