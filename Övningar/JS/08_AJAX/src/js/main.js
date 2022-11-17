class Movies {
    constructor(title, poster, year){
        this.Title = title;
        this.Poster = poster;
        this.Year = year;
    }
}

let userInput = document.createElement("input");
userInput.placeholder = "Sök film"
let searchBtn = document.createElement("button");
let moviesContainer = document.createElement("div");
document.body.append(userInput);
document.body.append(searchBtn);
document.body.append(moviesContainer);
searchBtn.innerHTML = "Sök";

searchBtn.addEventListener("click", ()=>{
    moviesContainer.innerHTML = "";
    let searchValue = userInput.value;
    fetch("http://www.omdbapi.com/?apikey=316a571c&s="+searchValue)
    .then((response)=>response.json())
    .then((data)=> {
        console.log(data.Search);
        
        let movieList = data.Search.map((movie)=>{
            return new Movies(movie.Title, movie.Poster, movie.Year);
        });
        
        createHtml(movieList);

    });

function createHtml (movies){

    for(let i=0; i<movies.length; i++){
        let container = document.createElement ("div")
        let title = document.createElement ("h3");
        let img = document.createElement ("img");
        let year = document.createElement ("p");

        title.innerHTML = movies[i].Title;
        img.src = movies[i].Poster;
        year.innerHTML = movies[i].Year;

        container.appendChild(title);
        container.appendChild(img);
        container.appendChild(year);

        moviesContainer.appendChild(container);
    }
}


})

