import './App.css';
import NavBar from '../components/NavBar';
import ItemDetailContainer from '../components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './ItemListContainer';
import Cart from '../components/Cart';
function App() {

  return (
    
    <BrowserRouter>
    <NavBar/>
    <Routes>
        <Route path='/' element= {<ItemListContainer/>} > </Route>
        <Route path='/category/:id' element= {<ItemListContainer/>}> </Route>
        <Route path='/item/:id' element= {<ItemDetailContainer/> }> </Route>
        <Route path='/cart' element= {<Cart/>}> </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
