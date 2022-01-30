import { useState } from "react";
import "./Meme.css";
import memesData from "./memesData.js";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function getRandomInt(min, max) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  function getMeme() {
    const memesArray = allMemeImages.data.memes;
    const imgIndex = getRandomInt(0, memesArray.length);
    setMeme((prevMeme) => ({ ...prevMeme, randomImage: memesArray[imgIndex].url }));
  }

  return (
    <main>
      <div className="meme-form">
        <input type="text" name="upper-txt" id="upper-txt" placeholder="Top text" />
        <input type="text" name="lower-txt" id="lower-txt" placeholder="Bottom text" />
        <button className="btn-meme" onClick={getMeme}>
          Get a new meme image 🖼
        </button>
      </div>
      <img className="meme-image" src={meme.randomImage} alt="Your meme" />
    </main>
  );
}
