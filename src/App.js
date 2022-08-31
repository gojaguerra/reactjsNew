import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/Greeting';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
        <ItemListContainer Saludo="Hola Profe" />
    </div>
  );
}

export default App;
