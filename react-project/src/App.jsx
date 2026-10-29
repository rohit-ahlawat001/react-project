import card from "./component/banner-card" // Component name should start with an uppercase letter

function App() {
  return ( // Added opening parenthesis to prevent ASI return bug
    <>
      {/* <h1>setup the React project</h1> */}
    {card()}
    </>
  );
}

export default App;