import logo from './logo.svg';
import './App.css';
import CounterApp from './counter_app';
import ParentComponent from './props';
import UsersList from './users_list';
function App() {
  const name = "Counter App";
  return (
    <div className="App">
      {/* <CounterApp /> */}
      {/* <ParentComponent /> */}
      <UsersList/>
    </div>
  );
}

export default App;

/*



JSX -> JavaScript XML -> syntax extension for JS that allows us to write HTML in our JS files.


//Component is a reusable, self- contained piece of code that defines how a part of a UI should look and behave.

Types of Components:
1. Functional Components
2. Class Components 

 Functional Components:
  This is simple JS function that return JSX
  Functional components are typically used for
   components that don't require state management or life cycle methods
   React Hooks, introcued in React 16.8, allow functional components to manage state  

  import React from 'react';

  function MyComponent() {
   return (
     <div>
     <h1>Hello, World!</h1>
     
     </div>);
  }
export default MyComponent;

const MyComponent = () => {
  
   return (
     <div>
     <h1>Hello, World!</h1>
     
     </div>);
  
  }

  export default MyComponent;

  classComponent : Class components have more features like local state and lifecycle methods. 

  While functional components are now more commonly used in react, 
  class component are still widely used in older react codebase .

class MyCompnent extends React.component {

render() {
<div>
     <h1>Hello, World!</h1>
     
     </div>
}

}
export default MyComponent;

*/