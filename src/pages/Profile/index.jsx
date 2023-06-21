import {ContainerProfile,Form} from './styles'
import { BiArrowBack,BiCamera, BiUser, BiLock,BiEnvelope} from 'react-icons/bi';
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Profile(){
    return(
        <ContainerProfile>
            <header>
               <BiArrowBack color="#FF859B" size={24}/>
                <a href="/">
                    Voltar
                </a>
            </header>
            
       <Form>
          <Input
          placeholder="Nome"
          type="text"
          icon={BiUser}
        />
        <Input
          placeholder="E-mail"
          type="text"
          icon={BiEnvelope}
        />
        <Input
          placeholder="Senha Atual"
          type="password"
          icon={BiLock}
        />

        <Input
          placeholder="Nova senha"
          type="password"
          icon={BiLock}
        />

        <Button title="Salvar"/>
    
      </Form>

            
        </ContainerProfile>
    )
}