import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ItemCount from '../components/ItemCount';
function Item({product}){
    return(

      <section className='cardsProducts'>
        
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text className='textDescription'>
          {product.description}
        </Card.Text>
        <Card.Text className='price'> ${product.price}</Card.Text>
        <ItemCount/>
      </Card.Body>
    </Card>
   
    </section>
    )
} 

export default Item