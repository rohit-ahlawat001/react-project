import Card from "./component/banner-card" // Component name should start with an uppercase letter
import AppleCard from "./component/apple_card"; 
import { Bookmark } from 'lucide-react'

function App() {
  return ( // Added opening parenthesis to prevent ASI return bug
    <>
      {/* <h1>setup the React project</h1> */}
    {/* <div className="card-parent-wrapper">
    <Card name='Rohit' age={25} img='https://images.unsplash.com/photo-1580835239846-5bb9ce03c8c3?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'/>
    <Card name='Mohit' age={58} img='https://images.unsplash.com/photo-1631882456892-54a30e92fe4f?q=80&w=726&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'/>
    </div> */}
    <AppleCard />

    
    </>
  );
}

export default App;