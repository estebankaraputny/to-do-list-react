import './App.css';
import logoApp from "./acess/image/logo.png"
import ListaDeTareas from './components/listOfTask';

function App() {
  return (
    <div className="aplicacionToDo">
      <header className='header'>
        <nav className='contentNav'>
          <img
            src={logoApp}
            className='logo'
            alt='logo de la app'
          />
          <h2 className='titleApp'>To Do List</h2>
        </nav>
      </header>
      <main className='main'>
        <div className="contentTareas">
          <ListaDeTareas />
        </div>
      </main>
    </div>
  );
}

export default App;
