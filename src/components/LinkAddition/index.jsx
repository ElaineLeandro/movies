import {Container} from './styles'



export function LinkAddition({icon, to, text}){
    return(
        <Container 
            to={to}
        > 
            {icon}
            {text}

        </Container>
    )
}