import "./Greeting.css";

const Greeting = (props) => {
  return (
    <>
      <h1 className="heading">Welcome to my app</h1>
      <p>my name is {props.gender}</p>
      <p>Your age is {props.age}</p>
      <button>Click me</button>
    </>
  );
};

export default Greeting;
