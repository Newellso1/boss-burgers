import Building from "./Assets/Building.jpeg";

export default function Contact() {
  return (
    <div className="contact page">
      <h3>Got Something to Say?</h3>
      <form>
        <input type="text" id="text" placeholder="Name"></input>
        <input type="email" id="email" placeholder="Email"></input>
        <textarea></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
}
