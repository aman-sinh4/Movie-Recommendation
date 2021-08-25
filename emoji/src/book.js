import React ,{useState} from 'react'
import './book.css'

function Books() {
    
    const[gen, setGen]= useState(null);
    
    const bookdb = 
    [
        {
            image:"https://i.ytimg.com/an_webp/Wn_9rR65MGE/mqdefault_6s.webp?du=3000&sqp=CLvVl4kG&rs=AOn4CLDLMCKEzmW34RAy3DHsc-KIdDd6WQ",
            title:"ABCD",
            rating: "4/5",
            
        },

        {
            image:"https://i.ytimg.com/an_webp/Wn_9rR65MGE/mqdefault_6s.webp?du=3000&sqp=CLvVl4kG&rs=AOn4CLDLMCKEzmW34RAy3DHsc-KIdDd6WQ",
            title:"XYZABC",
            rating: "2/5",
            
        },

        {
            image:"https://i.ytimg.com/an_webp/Wn_9rR65MGE/mqdefault_6s.webp?du=3000&sqp=CLvVl4kG&rs=AOn4CLDLMCKEzmW34RAy3DHsc-KIdDd6WQ",
            title:"XYZABC",
            rating: "2/5",
            
        }
    ]   

    return (

        <div className="books">
            <button onClick={()=>{setGen("fiction")}}>Fiction</button>
            <button onClick={()=>{setGen("poetry")}}>Poetry</button>
            <div className="book-info">
                {
                    
                }
            </div>
            
        </div>
    )
}

export default Books;
