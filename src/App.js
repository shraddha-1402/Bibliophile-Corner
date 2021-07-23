import { useState } from "react";
import './App.css';
import headerImg from "./undraw_Bibliophile_hwqc.svg";
import { data } from "./data.js";

function App() {
  const [bookData, setBookData] = useState([]);

  const clickHandler = (e) => {
    setBookData([...data[e.target.innerText]]);
  };

  return (
    <div className="App">
      <nav className="nav-bar">
        <h1>Bibliophile's Corner</h1>
      </nav>
      <div className="container">
        <img src={headerImg} className="header-image" alt="bibliophile"></img>
        <div className="header-content">
          <div className="search-options">
            <button className="search-button" onClick={clickHandler}>
              Rom-Com
            </button>
            <button className="search-button" onClick={clickHandler}>
              Thriller
            </button>
            <button className="search-button" onClick={clickHandler}>
              Fantasy
            </button>
          </div>
          <div className="search-results">
            {bookData.map((book, index) => {
              return (
                <div key={index} className="card">
                  <img
                    src={book.image}
                    className="card-image"
                    alt="book-cover"
                  />
                  <div className="card-detail">
                    <h3 className="card-title">{book.name}</h3>
                    <p className="card-paragraph">
                      By: <strong>{book.author}</strong>
                    </p>
                    <p className="card-paragraph">{book.description}</p>
                    {/* creates an array of book.rating times undefined*/}
                    {[...Array(book.rating)].map((rate, index) => {
                      return (
                        <span
                          key={index}
                          className="card-rating"
                          role="img"
                          aria-label="star-rating"
                        >
                          ⭐
                        </span>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

