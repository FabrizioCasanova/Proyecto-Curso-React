import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
function App() {

  return (
    <>
    <NavBar/>
    <ItemListContainer greeting = "Bienvenidos a Gaming Zone"/>
    <ItemCount/>
    </>
  );
}

export default App;
