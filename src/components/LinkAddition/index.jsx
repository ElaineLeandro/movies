import {Container} from './styles'
import { BiPlus } from 'react-icons/bi';


export function LinkAddition({to, text}){
    return(
        <Container to={to}> 
            < BiPlus />
            {text}

        </Container>
    )
}