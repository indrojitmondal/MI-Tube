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
    categories.forEach((item) => {

        // console.log(item.category);
        const categoriesContainer = document.getElementById('categories');
        //    console.log(categoriesContainer);
        const button = document.createElement('button');
        button.classList.add('btn');
        button.innerText = item.category;
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

const displayVideos = (videos) => {
    console.log(videos);
    const videoContainer = document.getElementById('videos');
    videos.forEach(video => {
        console.log(video.thumbnail);
        const card = document.createElement('div');
        card.classList = 'card card-compact';
        card.innerHTML =
            `   
        <figure>
        <img
          src=${video.thumbnail}
          alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
        `;

        videoContainer.append(card);


        
    })
}
loadVideos();

