import './App.css';
import logoApp from "./acess/image/logo.png"
import ListaDeTareas from './components/listOfTask';

function App() {
  return (
    <div className="aplicacionToDo">
      <div className="logoToDo">
        <img
          src={logoApp}
          className="logo"
          alt="Logo"
        />
      </div>
      <div className="contentTareas">
        <h1>Mis tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
