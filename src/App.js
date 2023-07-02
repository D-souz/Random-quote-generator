import React from "react";
import { useState, useEffect} from "react";
// import ReactDOM from 'react-dom/client';
import twitter from "./assets/twit.svg";
import tumblr from "./assets/tumblr.svg";



function App() {

  // creating state to store the quotes and authors
  const [quoteData, setQuateData] = useState({});

  // using useEffect to fetch the data from the API
  useEffect(() => {
    quoteGenerator();
  },[])
  // console.log(quoteData);
 
  // Quote generator
const quoteGenerator = () => {
  fetch("https://api.quotable.io/random")
  .then(res => res.json())
  .then(data => setQuateData({
      text: data.content,
      author: data.author
  }));

   // colors 
   let colors = [
                    '#16a085', '#27ae60', '#2c3e50', 
                    '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', 
                    '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"
                  ];

    // getting a randon color from the array of colors
    let color = Math.floor(Math.random() * colors.length);
    let randomColor = colors[color];
    console.log(randomColor);
    // let bodyElem = document.getElementsByTagName("body");
    // bodyElem.Style.backgroundColor = randomColor;
    // let style = {
    //   backgroundColor: randomColor
    // }
}
 

  return (
    <div id="wrapper">
      <div id="quote-box">
        {/* quote container */}
        <div id="text">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-quote" viewBox="0 0 16 16">
          <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/>
        </svg>
          <span>{quoteData.text}</span>
        </div>

        {/* The quote author */}
        <div  id="author">
        <span> - {quoteData.author}</span>
        </div>

        {/* social media links */}
        <div>
          {/* twitter */}
          <a href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22We%20can%20easily%20forgive%20a%20child%20who%20is%20afraid%20of%20the%20dark%3B%20the%20real%20tragedy%20of%20life%20is%20when%20men%20are%20afraid%20of%20the%20light.%22%20Plato" id="tweet-quote" target="_blank" rel="noreferrer" >
            <img src={twitter} alt="twitter icon" className="social-icons"/>
            <i class="fa fa-tumblr"></i>
          </a>
          {/* tumblr */}
          <a href="https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=Plato&content=We%20can%20easily%20forgive%20a%20child%20who%20is%20afraid%20of%20the%20dark%3B%20the%20real%20tragedy%20of%20life%20is%20when%20men%20are%20afraid%20of%20the%20light.&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button" target="_blank" rel="noreferrer" >
            <img src={tumblr} alt="tumblr icon" className="social-icons"/>
          </a>
                 
            {/* quote generator */}
          <button id="new-quote" onClick={quoteGenerator}>New quote</button>
        </div>
      </div>
      <div className="footer">
          by
          <a href="https://github.com/D-souz" target="_blank" rel="noreferrer">D'souza</a>
        </div>
    </div>
  );
}

export default App;
