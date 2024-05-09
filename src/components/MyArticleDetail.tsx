import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap"
import { useParams } from "react-router-dom";
import { Detail } from "../interfaces/IArticles";
const MyArticleDetail = () => {
    const params = useParams()
    const [detail, setDetail]= useState<Detail>()
    const FetchForDetail = async () => {
    console.log(params)
        try {
          const resp = await fetch("https://api.spaceflightnewsapi.net/v4/articles/"+ params.artid)
          if (resp.ok) {
            const ObjOfArt = await resp.json();
            setDetail(ObjOfArt);
           
          } else {
            throw new Error("Errore nel reperire gli articoli");
          }
        } catch (error) {
          console.log(error);
        }
        };
        
        useEffect(() => {
            FetchForDetail();
          }, []);
return(

    <Container>
        <Row>
            <Col >
                <div>
                <h2>{detail?.title}</h2>
                <p>{detail?.published_at}</p>
            </div>
            <div>
            <img src={detail?.image_url} className="rounded w-100" />
            </div>
            <div>
            <div>
                <h4>{detail?.summary}</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime voluptatibus tempore officiis adipisci dicta repellat nobis quia, laboriosam fugiat vel aliquam quas ducimus sint cum veniam nostrum doloremque quos incidunt!</p>
            </div>
            </div>
            </Col>
        </Row>
    </Container>
)

}
export default MyArticleDetail