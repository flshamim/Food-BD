// document.getElementById('search-button').addEventListener('click', function(){
//     const card = document.getElementById('card');
//     card.style.display='none'
// })

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
meals.forEach(meal => {
    console.log(meal)
    const div = document.createElement('div')
    div.innerHTML=`
    <div class="card">
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
  </div>
    `
    searchResult.appendChild(div)

});
}

