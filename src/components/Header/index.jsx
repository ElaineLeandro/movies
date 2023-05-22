import { Brand, Container, Profile, Input } from "./styles";

export function Header(){
    return(
        
        <Container> 

            <Brand>
             RocketMovies
            </Brand> 

            <Input placeholder="Pesquisar pelo título"/>
                      
            <Profile>

                <div>
                    <strong>Elaine Leandro</strong>
                    <span>Sair</span>
                </div>

                <img 
                    src="https://github.com/ElaineLeandro.png"
                    alt="Foto do usuário"
                />
                   
            </Profile>
        </Container>
    )
}