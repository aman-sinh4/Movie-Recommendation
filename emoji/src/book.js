import React, { useState } from "react";
import "./book.css";


const bookdb = {
  Productivity: [
    {
      image:
        "https://images-na.ssl-images-amazon.com/images/I/415Ouyv5poL.jpg",
      title: "Living in the Light",
      rating: "4/5",
    },

    {
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51DwJ-pSRwL.jpg",
      title: "5 Second Rule",
      rating: "2/5",
    },

    {
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71tbalAHYCL.jpg",
      title: "Ikigai",
      rating: "5/5",
    }
  ],
  Fiction: [
    {
      image:
        "https://images-na.ssl-images-amazon.com/images/I/91MbZ+Vbv4L.jpg",
      title: "Kingdom of Ash",
      rating: "3/5",
    },

    {
      image:
        "https://images-na.ssl-images-amazon.com/images/I/817FNKcZ1pL.jpg",
      title: "The Tiger's Wife",
      rating: "2/5",
    },

    {
      image:
        "https://s26162.pcdn.co/wp-content/uploads/2015/08/The-Sympathizer-by-Viet-Thanh-Nguyen.jpg",
      title: "The Sympathizer",
      rating: "4/5",
    }
  ],
  Javascript: [
    {
      image:
        "https://images-na.ssl-images-amazon.com/images/I/91asIC1fRwL.jpg",
      title: "Eloquent javascript",
      rating: "5/5",
    },

    {
      image:
        "https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX381_BO1,204,203,200_.jpg",
      title: "JavaScript-The Good Parts",
      rating: "3/5",
    },

    {
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg",
      title: "JS- The Definitive Guide",
      rating: "2/5",
    }
  ]
};



function Books() {
  const [gen, setGen] = useState("Productivity");
  
  const bookObj = Object.keys(bookdb);
  function genreClickHandler(genre) {
    setGen(genre);
  }
  

  return (

    <div className="books">
      <div className="genre" >
        {bookObj.map(function (genre) {
          return (
            <button onClick={() => genreClickHandler(genre)}>{genre}</button>
          );
        })}
        
        <div className="book-info">
          {
           bookdb[gen].map(function (book){
             return(<li key={book.title} className="booklist">
               <img src={book.image} alt="" className="book-img"/>
               <div>{book.title}</div>
               <span>{book.rating}</span>
               </li>)
           })
          }
          </div>
        
      
        
      </div>
    </div>
  );
}

export default Books;
