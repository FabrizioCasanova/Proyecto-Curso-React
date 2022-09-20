import Card from 'react-bootstrap/Card';
import ItemCount from '../components/ItemCount';
import Accordion from 'react-bootstrap/Accordion';


function ItemDetail({ item }) {

return(
<>
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
        <div className='itemCountStyle'>
        <ItemCount/>
        </div> 
      </Card.Body>
     {/* <Accordion className='acordion' defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>ESPECIFICACIONES Y DETALLES</Accordion.Header>
        <Accordion.Body>

         <p> Longitud: 194 mm </p>
         <p> Ancho: 190 mm </p>
         <p> Profundidad: 83 mm </p>
         <p> Peso: 278 g </p>

        <h5>AUDÍFONO</h5>

        <p>Transductor: PRO-G 40 mm </p>
        <p>Respuesta de frecuencia: 20Hz-20KHz </p>
        <p>Impedancia: 39 ohmios (pasiva), 5 kilohmios (activa) </p>
        <p>Sensibilidad: 87,5 dB SPL/mW </p>

        <h5>MICRÓFONO (VARILLA)</h5>

        <p>Patrón de captación de micrófono: Cardioide (unidireccional)</p>
        <p>Tamaño: 6 mm </p>
        <p>Respuesta de frecuencia: 100Hz-10KHz </p>
        <p>Radio de acción inalámbrico: Hasta 20 m 1Depende del uso y de los dispositivos.</p>
        <p>La duración de la batería se basa en un volumen de audífonos configurado en 50%.</p>
        <p>Tipo de conexión: Tecnología inalámbrica LIGHTSPEED a través de USB </p>

        <h5>DURACIÓN DE LA BATERÍA (RECARGABLE)</h5>

          <p> Sin iluminación: 29 h </p>
          <p> Iluminación predeterminada: 20 horas </p>
          
          <h5>INFORMACIÓN DE GARANTÍA </h5>

          <p>Dos años de garantía de hardware limitada </p>

          <h5>COLORES DISPONIBLES</h5>
          
          <p>Lila, Azul, Blanco, Negro, KDA</p>

        </Accordion.Body>
      </Accordion.Item>
</Accordion>*/}
    </div>
  </section>

</>
)

}

export default ItemDetail

