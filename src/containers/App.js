import './App.css';
import NavBar from '../components/NavBar';
import ItemListContainer from './ItemListContainer';
import Loader from '../components/LoaderItem';

function App() {

  return (
    <>
    
    <NavBar/>
    <ItemListContainer greeting = "Bienvenidos a Game Zone"/>
   
    </>
  );
}

export default App;
