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
     Title: ${docs.docs[0].title}
      </p>
      <p>
      Type: ${docs.docs[0].type}
       </p>
       <p>
       Publish Year: ${docs.docs[0].publish_year}
        </p>
      <img src="https://covers.openlibrary.org/b/id/${docs.docs[0].isbn}-M.jpg" class="w-20 h-20" alt="...">
      
     
    </div>
  </div>`
 
searchResult.appendChild(div);




 

}


