
import { Button, Card, Col } from "react-bootstrap"

import { Result } from "../interfaces/IArticles";
import { Link } from "react-router-dom";


interface SingleArticleProps {
    art: Result
}
const MyArticles = (props:SingleArticleProps) => {
    
    
    return (<>
       
        <Col xs={1} md={4}>
        <Card >
      <Card.Img  variant="top" src={props.art.image_url} />
      <Card.Body>
        <Card.Title>{props.art.title}</Card.Title>
        <Card.Text>
          {props.art.summary}
          
        </Card.Text>
        <Link to={`/article/${props.art.id}`} > <Button variant="primary">Vai all'articolo</Button></Link>
      </Card.Body>
    </Card>
        </Col>
        </>
    )

}
export default MyArticles