
import { ImStarFull,ImStarEmpty} from "react-icons/im";
import { Package, Container, Title, Star } from "./styles";
import { ButtonAddition } from "../../components/ButtonAddition";
import { Tagging } from "../../components/Tagging";
import { Header } from "../../components/Header";

export function Home(){
    return(
        <Container>
            <Header/>
            <Title>
            Meus filmes
           <ButtonAddition/>
            </Title>
            <Package>
                <subtitle>Extraordinário</subtitle>
                <Star>
                    {Array(4).fill(<ImStarFull/>)}
                <ImStarEmpty/>
                </Star>
                
                 <p>O filme Extraordinário nos provoca a pensar na possibilidade de construirmos uma outra sociedade, 
                 na qual “talvez possamos mudar nosso jeito de ver” o ser humano. Sem essa postura, nossos conteúdos são vazios,
                  sem sentido e destinados ao esquecimento pelos próprios estudantes.</p>
    
            <Tagging/>
            </Package>
        
        </Container>
    )
}