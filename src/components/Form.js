import { useState } from "react"

const Form = ({ addTodo }) => {
  const [todo, setTodo] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    console.log('Add todo : '+ todo);
    addTodo(todo); // On ajoute le todo à App en appelant la méthode addTodo
    setTodo(''); // On efface le contenu du champ
  };

  return (

    <form onSubmit={handleAddTodo}>
      <input type="text"
        onChange={(e) => { setTodo(e.target.value); }}
        value={todo}
        placeholder="Ajouter une tâche" />
      <button>Ajouter</button>
    </form>

  )
}
export default Form
