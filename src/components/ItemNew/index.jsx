import {BiX , BiPlus} from 'react-icons/bi'

import { Container } from './styles'


export function ItemNew({isNew, value, onClick, ...rest}){
    return(
        <Container isNew={isNew} >
            <input
                type="text"
                value={value}
                readOnly={isNew}
                {...rest}
            />
            <button
                type="button"
                onClick={onClick}
            >
                
                {isNew ? <BiPlus/> : <BiX/>}

            </button>
        </Container>
    )
}