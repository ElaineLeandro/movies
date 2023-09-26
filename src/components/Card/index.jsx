/* eslint-disable react/prop-types */
import { Tagging } from "../Tagging";
import { Container, Title, Icon,Content, Flags} from "./styles";
import { ImStarFull,ImStarEmpty} from "react-icons/im";


    export function Card({title, icon , paragraph}) {
    return(
        <Container>
            
            <Title>
                {title}
            </Title>
            <Icon>
                {icon} 
                
                {Array(4).fill(<ImStarFull/>)}

                <ImStarEmpty/>               
            </Icon>
            <Content>
                {paragraph}
            </Content>
            
            <Flags>
            <Tagging />
            
            
            </Flags>
           
        </Container>
    )
}