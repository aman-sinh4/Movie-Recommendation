import React, {useState} from 'react'
import './movie.css'


const movieDb= {
    action: {
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
            image:"https://m.media-amazon.com/images/M/MV5BOTY2NzFjODctOWUzMC00MGZhLTlhNjMtM2Y2ODBiNGY1ZWRiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UY720_.jpg",
            title:"Free Guy",
            rating: "⭐⭐⭐⭐"
        }
    }
}

function Movie({image,title,rating}) {
    const[genre, setGenre]= useState("action")
    
    return (
        <div className="movie">

            <h2>Movies</h2>

            <div className="btn">
            <button onClick={()=>setGenre("action")}>Action</button>
            <button onClick={()=>setGenre("horror")}>Horror</button>
            <button onClick={()=>setGenre("horror")}>Sci-Fi</button>
            </div>
            
            
            {
                
                genre==="action"?
                <div className="movie-info">
                <div className="movie-container">
                <img src={movieDb.action.one.image} alt=""></img>
                <h2 className="title">{movieDb.action.one.title}</h2>
                <span className="rating">{movieDb.action.one.rating}</span>
                </div>
                
                

                <div className="movie-container">
                <img src={movieDb.action.two.image} alt=""></img>
                <h2 className="title">{movieDb.action.two.title}</h2>
                <span className="rating">{movieDb.action.two.rating}</span>
                </div>
                

                <div className="movie-container">
                <img src={movieDb.action.three.image} alt=""></img>
                <h2 className="title">{movieDb.action.three.title}</h2>
                <span className="rating">{movieDb.action.three.rating}</span>
                </div>
                
                
                </div>:null
                
            }
            
           
        </div>
    )
}

export default Movie
