import {Container} from "./styles"

export function Button({...rest}){
    return(
        <Container
            type="button"
           {...rest}
        >
            Salvar
        </Container>
    )
}