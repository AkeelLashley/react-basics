//A function which returns html
import Counter from "./components/Counter";
import Greeting from "./components/Greeting";

const App = () => {
  const handleClick = () => {
    console.log("Clicked on Button");
  };

  return (
    // React Fragment (<> </>)
    // Create a component named "Image.tsx" which returns an image of a cat. Call this component in the App.tsx
    <>
      <Greeting name="Akeel" age={17} isMale={true} handleClick={handleClick} />
      <Greeting
        name="Jessica"
        age={23}
        isMale={false}
        handleClick={handleClick}
      />
      <Counter />
    </>
  );
};

export default App;
