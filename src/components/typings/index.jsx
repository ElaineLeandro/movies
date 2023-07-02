import { Container } from "styles"
import { ImStarFull,ImStarEmpty} from "react-icons/im";


    export function Typings({title, description, icon }) {
    return(
        <Container>
            <h1>{title}</h1>
            <p>{description}</p>
            <Star >
            {icon}
                {Array(4).fill(<ImStarFull/>)}
                <ImStarEmpty/>
            </Star> 

        </Container>
    )
}