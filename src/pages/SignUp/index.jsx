import {BiUser, BiEnvelope, BiLockAlt,BiArrowBack} from 'react-icons/bi'
import {Container,Form ,GroupImge} from './styles'


import {Input} from '../../components/Input'
import {Button} from '../../components/Button'

export function SignUp(){
    return(
        <Container>
         
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <h2>Crie a sua conta</h2>
                <Input
                    placeholder="Login"
                    type="text"
                    icon={BiUser}
                />
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

             <a href="#">
                <BiArrowBack/>

                <p>Voltar para o login</p>
             </a>

            </Form>

            <GroupImge/>
        </Container>
    )
}