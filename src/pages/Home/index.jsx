
import { Package, Container, Title} from "./styles";
import { ButtonAddition } from "../../components/ButtonAddition";
import { Header } from "../../components/Header";
import { Card} from "../../components/Card";
import { BiArrowBack } from 'react-icons/bi';

export function Home(){
 
    return(
        <Container>
            <Header/>
            <Title>
            Meus filmes 
           <ButtonAddition/>
          
            </Title>
            <Package >
                <Card
                    title="Extraordinário"
                    icon=" "
                    paragraph="O filme Extraordinário nos provoca a pensar na possibilidade de construirmos uma outra sociedade, 
                    na qual talvez possamos mudar nosso jeito de ver o ser humano. Sem essa postura, nossos conteúdos são vazios,
                    sem sentido e destinados ao esquecimento pelos próprios estudantes"
                   
                />
                
                 <Card
                    title="Extraordinário"
                    icon=" "
                    paragraph="O filme Extraordinário nos provoca a pensar na possibilidade de construirmos uma outra sociedade, 
                    na qual talvez possamos mudar nosso jeito de ver o ser humano. Sem essa postura, nossos conteúdos são vazios,
                    sem sentido e destinados ao esquecimento pelos próprios estudantes"
                />

            
            </Package>
           
            
        
        </Container>
    )
}