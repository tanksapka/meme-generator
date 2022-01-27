import "./Meme.css";

export default function Meme() {
  return (
    <main>
      <form className="meme-form">
        <input type="text" name="upper-txt" id="upper-txt" placeholder="Top text" />
        <input type="text" name="lower-txt" id="lower-txt" placeholder="Bottom text" />
        <button className="btn-meme">Get a new meme image 🖼</button>
      </form>
    </main>
  );
}
