import { Container, Row } from "react-bootstrap"
import MyArticles from "./MyArticles"
import { useEffect, useState } from "react";
import { Articles } from "../interfaces/IArticles";

const MyHomePage = () =>{
    const [articles, setArticles]= useState<Articles>()

    const FetchForArticles = async () => {
    
    try {
      const resp = await fetch("https://api.spaceflightnewsapi.net/v4/articles")
      if (resp.ok) {
        const ObjOfArt = await resp.json();
        setArticles(ObjOfArt);
       
      } else {
        throw new Error("Errore nel reperire gli articoli");
      }
    } catch (error) {
      console.log(error);
    }
    };
    
    useEffect(() => {
        FetchForArticles();
      }, []);
    

return (

    <Container className="mt-5">
        <Row >
            <div className="text-center">
            <h1>I nostri Articoli</h1>
            </div>
            {articles?.results.map((art) => {
                return(
            <MyArticles key={art.id} art={art}/>
        ) })}
        </Row>
    </Container>
)


}
export default MyHomePage