import React, { useState } from "react";
import "./book.css";

const bookdb = {
  fiction: [
    {
      image:
        "https://cdn.asaha.com/assets/thumbs/95f/95f873565f638bf31c58361f6201d109.jpg",
      title: "ABCD",
      rating: "4/5",
    },

    {
      image:
        "https://i.ytimg.com/an_webp/Wn_9rR65MGE/mqdefault_6s.webp?du=3000&sqp=CLvVl4kG&rs=AOn4CLDLMCKEzmW34RAy3DHsc-KIdDd6WQ",
      title: "XYZABC",
      rating: "2/5",
    },

    {
      image:
        "https://i.ytimg.com/an_webp/Wn_9rR65MGE/mqdefault_6s.webp?du=3000&sqp=CLvVl4kG&rs=AOn4CLDLMCKEzmW34RAy3DHsc-KIdDd6WQ",
      title: "XYZABC",
      rating: "2/5",
    }
  ],
  poetry: [
    {
      image:
        "https://i.ytimg.com/an_webp/Wn_9rR65MGE/mqdefault_6s.webp?du=3000&sqp=CLvVl4kG&rs=AOn4CLDLMCKEzmW34RAy3DHsc-KIdDd6WQ",
      title: "ABCD",
      rating: "4/5",
    },

    {
      image:
        "https://i.ytimg.com/an_webp/Wn_9rR65MGE/mqdefault_6s.webp?du=3000&sqp=CLvVl4kG&rs=AOn4CLDLMCKEzmW34RAy3DHsc-KIdDd6WQ",
      title: "XYZABC",
      rating: "2/5",
    },

    {
      image:
        "https://i.ytimg.com/an_webp/Wn_9rR65MGE/mqdefault_6s.webp?du=3000&sqp=CLvVl4kG&rs=AOn4CLDLMCKEzmW34RAy3DHsc-KIdDd6WQ",
      title: "XYZABC",
      rating: "2/5",
    }
  ]
};


function Books() {
  const [gen, setGen] = useState(null);
  const bookObj = Object.keys(bookdb);
  function genreClickHandler(genre) {
    setGen(genre);
  }
  

  return (
    <div className="books">
      <div className="book-info">
        {bookObj.map(function (genre) {
          return (
            <button onClick={() => genreClickHandler(genre)}>{genre}</button>
          );
        })}
      <ul>
        {
        bookdb[gen].map(function (book){
          return(console.log(book.name)) 
            
        }
        )
        }
        </ul>
      </div>
    </div>
  );
}

export default Books;
