import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";
function Item({product}){
    return(

      <section className='seccionCardProducts'>
      <section className='cardsProducts'>
        <Card className='CardItemContainer' >
      <Card.Img variant="top" src={product.image} />
      <Card.Body className='cardBodyItemContainer'>
        <Card.Title className='cardTitleItemContainer'>{product.title}</Card.Title>
        <Card.Text className='cardDescriptionItemContainer'> {product.description}</Card.Text>
        <div className='buttonDetailContainer'>
        <Link to = {"/item/" + product.id}><Button className='detailProductsButton' type="submit">Detalles del Producto</Button></Link>
        </div>      
      </Card.Body>
    </Card>
    </section>
    </section>
    )
} 

export default Item