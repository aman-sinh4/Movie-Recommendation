import React, {useState} from 'react'
import './movie.css'


const movieDb= {
    comedy: {
        one:
        {
        image:"https://m.media-amazon.com/images/M/MV5BOTY2NzFjODctOWUzMC00MGZhLTlhNjMtM2Y2ODBiNGY1ZWRiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UY720_.jpg",
        title:"Free Guy",
        rating: "⭐⭐⭐⭐"
        },
        two:
        {
            image:"https://occ-0-2061-300.1.nflxso.net/dnm/api/v6/Da_vleYcahiCE7JMYt8LJRyoenc/AAAABeNI4s8ncJt_ieI3dkIwQl9FnQ8yp5Klwa5FCzUzsRowyrGoSm6vxyOFrsljUxElLIJ7i58mSFXmzZYjeZ_M1b8Bfa9aIQTqa-UI-dhChXAchPtORhoTc7EgLmypAQ.jpg",
            title:"Vivo",
            rating:"⭐⭐⭐"
        },
        three:{
            image:"https://m.media-amazon.com/images/M/MV5BZTRhNzg0ZTgtZmMyYy00Yjc5LTkyNTAtNzEzODIyZDE5NTNmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
            title:"Ted Lasso",
            rating:"⭐⭐⭐⭐⭐"
        }
    },
    horror:{
        one:{
            image:"https://m.media-amazon.com/images/M/MV5BZTM4YjEwMGItNTYzNy00OTZmLTk0NzgtZTE1YzM3ZDczYjRlXkEyXkFqcGdeQXVyNDAwNDcxNg@@._V1_.jpg",
            title:"Aftermath",
            rating: "⭐⭐⭐"
        },
        two:
        {
            image:"https://i.ytimg.com/vi/vJo2YkK2-tg/movieposter_en.jpg",
            title:"Conjuring 2021",
            rating:"⭐⭐⭐⭐⭐"
        },
        three:{
            image:"https://resizing.flixster.com/p6rarYySyS45qeSE0jQInAhwb3A=/206x305/v2/https://resizing.flixster.com/tk9oHi1zkKsMPekdMVJgjz39Lws=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc2YjEzNWIxLTk5NjItNDM5ZC1iZjBlLWIxZmVjMzZkZDVkOC53ZWJw",
            title:"Don't Breathe ",
            rating:"⭐⭐"
        }
    },
    scifi:{
        one:{
            image:"https://m.media-amazon.com/images/M/MV5BNTI2YTI0MWEtNGQ4OS00ODIzLWE1MWEtZGJiN2E3ZmM1OWI1XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg",
            title:"Tomorrow War",
            rating: "⭐⭐⭐⭐"
        },
        two:
        {
            image:"https://images-na.ssl-images-amazon.com/images/I/914MHuDfMSL.jpg",
            title:"Black Widow",
            rating:"⭐⭐⭐⭐⭐"
        },
        three:{
            image:"https://i.gadgets360cdn.com/large/loki_poster_1622796985059.jpeg",
            title:"Loki",
            rating:"⭐⭐⭐"
        }
    }
}

function Movie({image,title,rating}) {
    const[genre, setGenre]= useState("")
    
    return (
        <div className="movie">

            <h2>Movies</h2>

            <div className="btn">
            <button onClick={()=>setGenre("comedy")}>Comedy</button>
            <button onClick={()=>setGenre("horror")}>Horror</button>
            <button onClick={()=>setGenre("sci-fi")}>Sci-Fi</button>
            </div>
            {
                
                genre==="comedy"?
                <div className="movie-info">

                <div className="movie-container">
                <img src={movieDb.comedy.one.image} alt=""></img>
                <h2 className="title">{movieDb.comedy.one.title}</h2>
                <span>{movieDb.comedy.one.rating}</span>
                </div>
                
                

                <div className="movie-container">
                <img src={movieDb.comedy.two.image} alt=""></img>
                <h2 className="title">{movieDb.comedy.two.title}</h2>
                <span className="rating">{movieDb.comedy.two.rating}</span>
                </div>
                

                <div className="movie-container">
                <img src={movieDb.comedy.three.image} alt=""></img>
                <h2 className="title">{movieDb.comedy.three.title}</h2>
                <span className="rating">{movieDb.comedy.three.rating}</span>
                </div>
                
                
                </div>:

                genre==="horror"?
                <div className="movie-info">

                <div className="movie-container">
                <img src={movieDb.horror.one.image} alt=""></img>
                <h2 className="title">{movieDb.horror.one.title}</h2>
                <span className="rating">{movieDb.horror.one.rating}</span>
                </div>
                
                

                <div className="movie-container">
                <img src={movieDb.horror.two.image} alt=""></img>
                <h2 className="title">{movieDb.horror.two.title}</h2>
                <span className="rating">{movieDb.horror.two.rating}</span>
                </div>
                

                <div className="movie-container">
                <img src={movieDb.horror.three.image} alt=""></img>
                <h2 className="title">{movieDb.horror.three.title}</h2>
                <span className="rating">{movieDb.horror.three.rating}</span>
                </div>
                
                
                </div>:

                genre==="sci-fi"?
                <div className="movie-info">

                <div className="movie-container">
                <img src={movieDb.scifi.one.image} alt=""></img>
                <h2 className="title">{movieDb.scifi.one.title}</h2>
                <span className="rating">{movieDb.scifi.one.rating}</span>
                </div>
                
                

                <div className="movie-container">
                <img src={movieDb.scifi.two.image} alt=""></img>
                <h2 className="title">{movieDb.scifi.two.title}</h2>
                <span className="rating">{movieDb.scifi.two.rating}</span>
                </div>
                

                <div className="movie-container">
                <img src={movieDb.scifi.three.image} alt=""></img>
                <h2 className="title">{movieDb.scifi.three.title}</h2>
                <span className="rating">{movieDb.scifi.three.rating}</span>
                </div>
                
                
                </div>:
                <div><br /><br /><h5>TAP YOUR FAVOURITE GENRE</h5></div>

                
            }
            
           
        </div>
    )
}

export default Movie
