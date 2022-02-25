document.getElementById('search-button').addEventListener('click', function(){
    const card = document.getElementById('card');
    card.style.display='none'
    const category = document.getElementById('category')
    category.style.display='none'
    
})

const searchFood = () =>{
    const searchfeild = document.getElementById('search-field');
    const searchText = searchfeild.value;
    
    searchfeild.value = ''
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

    fetch(url)
    .then(res => res.json())
    .then(data => displaysearchResult(data.meals));
}


const displaysearchResult=  meals => {
const searchResult = document.getElementById('search-result')
searchResult.textContent='';
// if(searchText ){
//     const errormassage = document.getElementById('error')
//     errormassage.style.display='block'
    
// }
// else{
    meals.forEach(meal => {
        console.log(meal)
        const div = document.createElement('div')
        div.innerHTML=`
        <div class="card-group card-all-body ">
        <div class="card m-3 text-danger">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
        <div class="d-flex justify-content-around align-item-center"
          <h1 class="card-title fs-1">${meal.strMeal}</h1>
          <button type="button" class="btn btn-outline-danger">Order Now</button>
        </div>
        <h4> Weight: ${meal.strMeasure3}</h4>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
        </div>
        </div>
      </div>
        `
        searchResult.appendChild(div)
    
    });
// }

}

