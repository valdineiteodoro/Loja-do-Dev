import React from "react"
import AppContainer from "../AppContainer"
import AppHeader from "../AppHeader"
import { Wrapper, Container} from './App.styles'

function App (){
    return <Wrapper>
        <Container>
            <AppHeader/>
            <AppContainer
            left={<div style={{backgroundColor:"red"}}>
                produtos disponiveis 
                   </div>}
            middle={<div style={{backgroundColor:"green"}}>
                sua lista de compras
                    </div>}
            right={<div style={{backgroundColor:"red"}}>estatisticas
                    </div>}

            />                   
     </Container>
    </Wrapper>
}

export default App