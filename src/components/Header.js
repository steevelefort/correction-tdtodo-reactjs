import logo from '../logo.svg'

const Header = ({todos}) => { 
  return (
      <header>
        <img src={logo} alt="" />

          <h1>TO DO LIST</h1>

          <div>
            <i className="fas fa-tasks"></i>
            <span>{ todos.filter(todo => todo.done).length } / {todos.length}</span>
          </div>
      </header>
  )
}

export default Header
