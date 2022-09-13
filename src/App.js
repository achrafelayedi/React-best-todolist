import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FormInput from './component/FormInput';
import List from './component/List';
import Footer from './component/Footer';
import { useEffect, useState } from 'react';

function App() {

  const [todos, setTodos] = useState([])
  const [inputTodo, setInputTodo] = useState([])

  const handleTodoInput = (evt) => {
    setInputTodo(evt.target.value)
    //console.log(inputTodo)
  }

  const addTodo = (evt) => {
    evt.preventDefault()
    const newTodo = {
      id: new Date().getTime(),
      name: inputTodo,
      complete: false
    }
    setTodos([...todos, newTodo])
    setInputTodo("")
    //console.log("My todo I just added:", todos)
  }

  return (
    <div className="App">

      <h1>What is it today?</h1>

      <FormInput todos={todos}
                 inputTodo={inputTodo}
                 handleTodoInput={handleTodoInput}
                 addTodo={addTodo}
      />
      <List todos={todos}
            setTodos={setTodos}
      />
      <Footer />

    </div>
  ); 
}

export default App;
