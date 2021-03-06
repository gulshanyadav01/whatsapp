import Login from "./Login"
import React from "react"; 
import useLocalStorage from "../hooks/useLocalStorage";

function App() {
  const [id, setId ] = useLocalStorage()

  return (
    <>
      {id}
      <Login onIdSubmit = {setId}/>
    </>
  );
}

export default App
