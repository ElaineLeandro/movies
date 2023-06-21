import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";

export function MoviePreview(){
    return(
        <>
            <Header/>
            <Container>
                <h1>Interestellar</h1>

                <Button type="Salvar"/>
             </Container>
        </>
       
    )
}