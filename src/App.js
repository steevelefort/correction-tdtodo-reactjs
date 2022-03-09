import './App.css';
import { Fragment, useEffect, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import Form from './components/Form'
import List from './components/List'
import Footer from './components/Footer'
import Header from 'components/Header';

function App() {
  

  const [todos, setTodos] = useState([]);

  useEffect( () => { 
    const dataJSON = localStorage.getItem("todos") ;
    const newTodos = JSON.parse(dataJSON || "[]");
    setTodos(newTodos);
  }, [] )

  useEffect( () => { 
    const dataJSON = JSON.stringify(todos)
    localStorage.setItem('todos',dataJSON);
  } )

  const addTodo = (todo) => { 
    const newTodos = [...todos];
    const newTodo = { done: false, description: todo};
    newTodos.push(newTodo);
    setTodos(newTodos);
  }

  const removeTodo =(index)=>  {
    const newTodos = [...todos];
    newTodos.splice(index,1)
    setTodos(newTodos);
  }

  const toggleTodo =(index)=>  {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  }
  return (
    <Fragment>
      <Header todos={todos}></Header>      
      <main>
        <Form addTodo={addTodo} />
        <List todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} setTodos={setTodos} />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
