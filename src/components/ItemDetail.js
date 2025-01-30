import { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import ItemCount from '../components/ItemCount';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { cartContext } from './CartContext';

function ItemDetail({ item }) {

const {addItem, inCart, deleteProduct } = useContext(cartContext)

function addProduct(count){
        alert(`Has agregado ${count} producto/s a tu carrito `)
        addItem(item, count)
    }

return(
<>
<Link to = "/"><Button id='buttonGoInicio' className="buttonGoInicio">Volver al Inicio</Button></Link>
    <section className='container-products'>
    <div>
    <img className='imgDetail' src={item.image} alt=""></img>
    </div>
    <div>
      <Card.Body className='cardBodyDetail'>
        <Card.Title className='cardTitleDetail'>{item.title}</Card.Title>
        <Card.Text className='cardDescriptionDetail'>
          {item.description}
        </Card.Text>
        <Card.Text className='cardPriceDetail'> ${item.price}</Card.Text>
        
        <div>
          
        {inCart(item.id) &&
        <p className='productIsInCart'>Este producto ya esta en el carrito</p> }
    
        { (inCart(item.id)) ?  <Link to = "/cart"><Button className='buttonGoCart'>Ir al carrito</Button></Link> :  <ItemCount stock={item.stock} initial={0} addProduct={addProduct}/>}
        {inCart(item.id) &&
          <div className='itemButtonCart'>
          <Button className='buttonGoCart' onClick={()=> deleteProduct(item.id)}>Borrar del Carrito</Button>
          </div>
        }
        </div> 
      </Card.Body>
    </div>
  </section>
</>
)
}

export default ItemDetail

