
import { Package, Container, Title} from "./styles";
import { ButtonAddition } from "../../components/ButtonAddition";
import { Header } from "../../components/Header";
import { Card} from "../../components/Card";


export function Home(){
 
    return(
        <>
        <Header/>
        <Container>
            <Title>
            Meus filmes 
           <ButtonAddition/>
          
            </Title>
           
            <Package>
                <Card
                    title="Extraordinário"
                    icon=" "
                    paragraph="O filme Extraordinário nos provoca a pensar na possibilidade de construirmos uma outra sociedade, 
                    na qual talvez possamos mudar nosso jeito de ver o ser humano. Sem essa postura, nossos conteúdos são vazios,
                    sem sentido e destinados ao esquecimento pelos próprios estudantes."
                   
                />
                
                 <Card
                    title="Diamante de Sangue"
                    icon=" "
                    paragraph="O filme o filme retrata um país dilacerado pela luta entre partidários do governo e forças insurgentes.
                    Tendo como principal o caos e a guerra civil que dominou Serra Leoa, África, na década de 1990, Diamante de Sangue 
                    conta a história de Danny Archer, um mercenário do Zimbábue."
                />
                <Card
                    title="O Menino do Pijama Listrado"
                    icon=" "
                    paragraph="Durante a Segunda Guerra Mundial, Bruno, um garoto de oito anos, e sua família saem de Berlim para residir 
                    próximo a um campo de concentração, onde seu pai acaba de se tornar comandante. Infeliz e solitário, ele vagueia fora
                    de sua casa e certo dia encontra Shmuel, um menino judeu de sua idade."             
                />
                <Card
                    title="O Menino do Pijama Listrado"
                    icon=" "
                    paragraph="Durante a Segunda Guerra Mundial, Bruno, um garoto de oito anos, e sua família saem de Berlim para residir 
                    próximo a um campo de concentração, onde seu pai acaba de se tornar comandante. Infeliz e solitário, ele vagueia fora
                    de sua casa e certo dia encontra Shmuel, um menino judeu de sua idade."             
                />
            </Package>          
        
        </Container>
        </>
           
    )
}