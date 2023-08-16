const searchBook=()=>{
  const searchField=document.getElementById('search-field');
  const searchText=searchField.value;
  console.log(searchText);
  searchField.value='';
  const url=`https://openlibrary.org/search.json?q=${searchText}.docs`;
  fetch(url)
  .then(res=>res.json())
  .then(data=>displaySearchResult(data));
}

const displaySearchResult= docs =>{
  const searchResult=document.getElementById('search-result');
  console.log(docs);
  const div=document.createElement('div');
    div.classList.add('col');
    
    div.innerHTML=`
    <div onclick="loadMealDetail()" class="card h-100">
    
    <div class="card-body">
      <p class="card-title">Similar Book Found: ${docs.numFound}</p>
      <p>Start: ${docs.start}</p>
      <p>
     ${docs.title}
      </p>
      <img src="https://covers.openlibrary.org/b/id/554106-M.jpg" class="w-20 h-20" alt="...">
      
     
    </div>
  </div>`
 
searchResult.appendChild(div);




 

}


