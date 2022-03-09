const List = ({ todos, setTodos, removeTodo,toggleTodo }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
          <li className="done" key={index}>
            <i onClick={ () => { toggleTodo(index) } } 
            className={ 'far '+(todo.done ? 'fa-check-square' : 'fa-square') + ' fa-2x'}></i>
            <span>{todo.description}</span>
            
            <button onClick={ () => { removeTodo(index) } }><i className="fas fa-trash fa-2x"></i></button>
          </li>
  ) )
}
        </ul >
  )
}

export default List
