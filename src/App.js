import { useState } from "react";
import './App.css';
import headerImg from "./header-image.svg";
import data from "./data";

function App() {
  const [bookData, setBookData] = useState([...data["Sci-Fi"]]);

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
              Sci-Fi
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
                  <div className="card-image-container">
                    <img
                      src={book.image}
                      className="card-image"
                      alt="book-cover"
                    />
                  </div>
                  <div className="card-detail">
                    <h3 className="card-title">{book.name}</h3>
                    <p className="card-paragraph">
                      By: <strong>{book.author}</strong>
                    </p>
                    <p className="card-paragraph">{book.description}</p>
                    <div className="card-rating">
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
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <footer>
        <h3>Connect On</h3>
        <a href="https://github.com/shraddha-1402" rel="noreferrer noopener" target="_blank" className="link">
          <span className="fa fa-github" aria-hidden="true"></span>
        </a>
        <a href="https://twitter.com/ShraddhaGupta08" rel="noreferrer noopener" target="_blank" className="link">
          <span className="fa fa-twitter" aria-hidden="true"></span>
        </a>
        <a href="https://www.linkedin.com/in/shraddha-1402/" rel="noreferrer noopener" target="_blank" className="link">
          <span className="fa fa-linkedin" aria-hidden="true"></span>
        </a>
      </footer>
    </div>
  );
}

export default App;