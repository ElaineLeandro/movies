import { Container, Content, ContentTitle,Icon,Tags, ContentDateTime} from "./styles";
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
               <span className="avatar">
                 Por Elaine Leandro
                <img src="https://github.com/ElaineLeandro.png" alt="Avatar do usúario" />
                </span>
                <span className="time">
                    <BiTime/>
                </span>
        

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
           


             </Container>
        </>
       
    )
}