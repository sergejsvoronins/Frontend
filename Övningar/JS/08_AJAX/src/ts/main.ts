import axios from "axios";
import { IMovies } from "./models/imovies";
import { IOmdb } from "./models/iomdb";





// let userInput = document.createElement("input") as HTMLInputElement;
// userInput.placeholder = "Sök film"
// let searchBtn = document.createElement("button") as HTMLButtonElement;
// let moviesContainer = document.createElement("div") as HTMLDivElement;
// document.body.append(userInput);
// document.body.append(searchBtn);
// document.body.append(moviesContainer);
// searchBtn.innerHTML = "Sök";


(document.getElementById("searchForm") as HTMLFormElement).addEventListener("submit", (event)=>{
    event.preventDefault();



    
    let searchText = getSearchText();
    
    axios
    .get<IOmdb>(`http://www.omdbapi.com/?apikey=316a571c&s=${searchText}`)
    .then((response)=>{
        console.log(response.data);
        console.log(response.data.Search);
        // let movieList : Movies [] = response.data.Search.map((movie: Movies)=>{
        //     return new Movies(movie.Title, movie.Poster, movie.Year);
        // });
        createHtml(response.data.Search);

    })
    function getSearchText () : string {
        let inputEl = document.getElementById("searchText") as HTMLInputElement;
        let searchText = inputEl.value;
        inputEl.value = "";
        return searchText;
    }

    function createHtml (movies: IMovies []){

        let moviesContainer : HTMLDivElement = document.getElementById("moviesContainer") as HTMLDivElement;
        moviesContainer.innerHTML="";
        for(let i=0; i<movies.length; i++){
            let container : HTMLDivElement = document.createElement("div");
            let title : HTMLHeadingElement = document.createElement ("h3");
            let img : HTMLImageElement = document.createElement ("img");
            let year :HTMLParagraphElement = document.createElement ("p");
    
            title.innerHTML = movies[i].Title;
            img.src = movies[i].Poster;
            year.innerHTML = movies[i].Year;
            moviesContainer.appendChild(container);
            container.appendChild(title);
            container.appendChild(img);
            container.appendChild(year);
    
        }
    }
})

// searchBtn.addEventListener("click", ()=>{
//     moviesContainer.innerHTML = "";
//     let searchValue:string = userInput.value;
    // fetch("http://www.omdbapi.com/?apikey=316a571c&s="+searchValue)
    // .then((response)=>response.json())
    // .then((data)=> {
    //     console.log(data.Search);
        
    //     let movieList : Movies [] = data.Search.map((movie: Movies)=>{
    //         return new Movies(movie.Title, movie.Poster, movie.Year);
    //     });
        
    //     createHtml(movieList);

    // });





