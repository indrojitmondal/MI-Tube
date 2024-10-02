// loadData 
const loadCategories = () =>{
      fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
      .then (res => res.json())
      .then (data => displayData(data.categories))
      .catch (error => console.log(error))
}
// displayData 
const displayData = (categories) =>{

   
    
    console.log(categories)
    categories.forEach((item) =>{
        
        console.log(item.category);
        const categoriesContainer = document.getElementById('categories');
       console.log(categoriesContainer);
        const button = document.createElement('button');
        button.classList.add('btn');
        button.innerText=item.category;
        categoriesContainer.appendChild(button);
        

    })
    
    
   
}

loadCategories();
