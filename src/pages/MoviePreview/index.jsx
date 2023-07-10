import { Container, Content, ContentTitle,Icon,Tags, ContentDateTime, ContentDescription, Description} from "./styles";
import { Header } from "../../components/Header";
import {BiArrowBack, BiTime} from "react-icons/bi"
import { ImStarFull,ImStarEmpty} from "react-icons/im";
import { Tagging } from "../../components/Tagging";


export function MoviePreview({Icon: icon}){
    return(
        <>
            <Header/>
            <Container>
                <Content>
                <BiArrowBack color="#06b6d4" size={24}/>  
                Voltar
                </Content>
            
            <ContentTitle>
                Extraordinário
                <Icon>
                    {icon} 
                    
                    {Array(4).fill(<ImStarFull size={45}/>)}

                    <ImStarEmpty size={45}/>               
                </Icon>
                </ContentTitle>

                <ContentDateTime>
                <span>
                    <img src="https://github.com/ElaineLeandro.png" alt="Avatar do usúario" />
                    Por Elaine Leandro
                    </span>
                    <strong>
                        <BiTime color="#22d3ee" size={20}/>
                        23/05/22 às 08:00
                    </strong>
            

                </ContentDateTime>
                <Tags>
                <Tagging
                tag="Ficção Científica"
                />
                <Tagging
                tag="Drama"
                />
                <Tagging
                tag="Famila"
                />
                </Tags>
            <ContentDescription>
                <Description>
          
                    Um dos aspectos mais interessantes do filme é que ele conta a mesma narrativa a partir de vários pontos de vista. 
                    Embora August seja o protagonista, conseguimos perceber que o enredo afeta todos à sua volta: a mãe que parou de trabalhar, a irmã que não tem atenção, etc.
                    Isso nos ajuda a perceber que cada história tem, pelo menos, duas versões. Na visão de Auggie, Jack fingiu ser seu amigo, mas nunca gostou dele.
                    Quando assistimos à sua versão dos fatos, percebemos que ele também era discriminado por ter menos dinheiro que os colegas e que estava tentando 
                    se "enturmar" quando fez piadas sobre o garoto novo.
                </Description>
                <Description>
                    Na escola, a turma está estudando preceitos e reflete sobre a antiga citação egípcia: “seus feitos são seus monumentos”.
                    Ela significa que aquilo que mais importa, e o motivo pelo qual somos lembrados, são as ações que praticamos.
                    Mais do que aquilo que pensamos ou dizemos, é o que fazemos pelos outros que pode transformar o mundo.
                    Auggie está totalmente isolado dos colegas e sofre bullying de um deles, Julian. Na prova de Ciências, percebe que Jack Will,
                    o colega do lado, não sabe as respostas edá cola para ele: desse ato nasce uma amizade. Mais para a frente, Auggie escuta Jack
                    falando mal dele com o resto da classe e fica sozinho de novo.
                </Description>
            </ContentDescription>
            
           
            
           
            </Container>
        </>
       
    )
}