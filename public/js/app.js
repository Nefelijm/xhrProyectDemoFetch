
//Elementos del DOM que utilizaremos
// const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchText}&api-key=91e23984f8e5409081ea47215e9e61c3`;
const form = document.getElementById('search-form');
const label = document.getElementById('search-label');
const input = document.getElementById('search-keyword');
const inputBtn = document.getElementById('submit-btn');
const div = document.getElementById('response');
const ul = document.getElementById('response-container');
let  searchText ;


form.addEventListener('submit',function(e){
e.preventDefault();
  fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchText}&api-key=91e23984f8e5409081ea47215e9e61c3`)
.then(handleErrors)
.then(parseJSON)
.then(addNews)
.catch(displayErrors);
});

function handleErrors(res) {
    if (!res.ok) {
        throw Error(res.status);
    }
    return res;
}

function parseJSON(res){
    return res.json()
        .then(function (parsedData) {
              console.log(parsedData)
            return parsedData          
        }       

        )};

function addNews(data) {

    // const data = JSON.parse(this.responseText);
    const article = data.response.docs[0];
    const title = article.headline.main;
    const snippet = article.snippet;

    let li = document.createElement('li');
    li.innerText = snippet;
    div.appendChild(li);
}

function displayErrors(err) {
    console.log("INSIDE displayErrors!");
    console.log(err);
}


