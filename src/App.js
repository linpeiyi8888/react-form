import { useState } from "react";
import "./App.css";

const Input = ({ id, title }) => {
  const [text, setText] = useState("");
  const onChangeHandler = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <label htmlFor={id}>{title}</label>
      <br />
      <input type="" id={id} value={text} onChange={onChangeHandler}></input>
    </>
  );
};

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setName(e.target.name.value);
    setEmail(e.target.email.value);
  };

  return (
    <div className="container">
      <form onSubmit={onSubmitHandler}>
        <h1>My First React App</h1>
        <Input id="name" title="Name:"></Input>
        <br />
        <br />
        <Input id="email" title="Email:"></Input>
        <br />
        <br />
        <button>Submit</button>
      </form>
      <div>
        <p>{name}</p>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default App;
