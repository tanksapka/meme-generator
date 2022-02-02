import { useState, useEffect } from "react";
import "./Meme.css";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemeImages] = useState([]);

  function getRandomInt(min, max) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  function getMeme() {
    const imgIndex = getRandomInt(0, allMemeImages.length);
    setMeme((prevMeme) => ({ ...prevMeme, randomImage: allMemeImages[imgIndex].url }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({ ...prevMeme, [name]: value }));
  }

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((resp) => resp.json())
      .then((data) => setAllMemeImages(data.data.memes));
  }, []);

  return (
    <main>
      <div className="meme-form">
        <input
          type="text"
          name="topText"
          id="upper-txt"
          placeholder="Top text"
          onChange={handleChange}
          value={meme.topText}
        />
        <input
          type="text"
          name="bottomText"
          id="lower-txt"
          placeholder="Bottom text"
          onChange={handleChange}
          value={meme.bottomText}
        />
        <button className="btn-meme" onClick={getMeme}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme-container">
        <img className="meme-image" src={meme.randomImage} alt="Your meme" />
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
