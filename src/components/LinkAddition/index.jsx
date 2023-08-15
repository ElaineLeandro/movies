import {Container} from './styles'
import { BiPlus } from 'react-icons/bi';


export function LinkAddition({icone, to, text}){
    return(
        <Container to={to}> 
            < BiPlus icon={icone} />
            {text}

        </Container>
    )
}