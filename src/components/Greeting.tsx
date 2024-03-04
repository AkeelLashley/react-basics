import "./Greeting.css";

interface GreetingProps {
  name: string;
  age: number;
  isMale: boolean;
  handleClick: () => void;
}

const Greeting = ({ name, age, isMale, handleClick }: GreetingProps) => {
  return (
    <>
      <h1 className="heading">Welcome to my app</h1>
      <p>my name is {name}</p>
      <p>Your age is {age}</p>
      {/* <p>You are a {isMale}</p> */}
      {/* {isMale ? <p>You are a Male</p> : <p>You are a female</p>} */}
      {/* if(isMale === true) {
        <p>You are a Male</p>
      } else {
        <p>You are a female</p>
      } */}

      {/* {age >= 18 ? (
        <p>You are eligible to vote</p>
      ) : (
        <p>You are not eligible to vote</p>
      )} */}
      {isMale && <p>You are a male</p>}

      <button onClick={handleClick}>Click me</button>
    </>
  );
};

// const Greeting = (props: GreetingProps) => {
//   // const { name, age } = props;
//   // const name = props.name;
//   // const age = props.age;
//   return (
//     <>
//       <h1 className="heading">Welcome to my app</h1>
//       <p>my name is {name}</p>
//       <p>Your age is {age}</p>
//       <button onClick={props.handleClick}>Click me</button>
//     </>
//   );
// };
export default Greeting;

// Props
// Interface
//  Passing Events as props
// destructing
// Conditional Rendering
// useState
