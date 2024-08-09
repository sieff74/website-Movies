let api;

async function myApi(){
    let Res =await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=d903bcdae97d41411a8e54f49fb3b5d0`)
    let finalRes = await Res.json()
    // console.log(finalRes);
    Api =finalRes.results
    displayMovies()
}
myApi()

function displayMovies(){
    let cartona =``
    for( let i=0 ;i<Api.length ;i++){
        cartona+=` <div class="col-md-3">
        <div class="movies position-relative shadow-lg rounded">
          <div class="reat position-absolute end-0 top-0">
            <span>${Api[i].vote_average}</span>
          </div>
          <img class=" w-100" src="https://image.tmdb.org/t/p/w500/${Api[i].poster_path}" alt="">
        </div>
      </div>`
    }
    document.getElementById(`showData`).innerHTML=cartona
}

$(document).ready(()=>$('body').css('overflow', 'auto'))