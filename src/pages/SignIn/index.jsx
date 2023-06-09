import {BiLogIn, BiEnvelope, BiLockAlt} from 'react-icons/bi'
import {Container,Form ,GroupImge} from './styles'


import {Input} from '../../components/Input'
import {Button} from '../../components/Button'

export function SingIn(){
    return(
        <Container>
         
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <h2>Faça seu login</h2>
                <Input
                    placeholder='E-mail'
                    type="text"
                    icon={BiEnvelope}
                />
                <Input
                    placeholder='Senha'
                    type="password"
                    icon={BiLockAlt}
                />
                  

             <Button type="Cadastrar"/>

             <a href="#">Criar conta</a>

            </Form>

            <GroupImge/>
        </Container>
    )
}