import {Container} from './styles'
import { BiPlus } from 'react-icons/bi';


export function LinkAddition({icon, to, text}){
    return(
        <Container to={to}> 
            {icon && <BiPlus icon={icon}/>}
            {text}

        </Container>
    )
}