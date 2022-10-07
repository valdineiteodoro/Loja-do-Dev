import React from "react"
import Checkbox from "../../shered/Checkbox"
import AppContainer from "../AppContainer"
import AppHeader from "../AppHeader"
import { Wrapper, Container} from './App.styles'
import { useState } from "react"

function App (){
      const [lettuce,setlettuce] = React.useState(true)
      const [rice, setRice] =React.useState(false)
    return <Wrapper>
        <Container>
            <AppHeader/>
            <AppContainer
            left={<div>
                produtos disponiveis 
                <Checkbox
                value={lettuce}
                title="alface"
                onClick= {()=> setlettuce(!lettuce)}/>
        
                <Checkbox
                value={rice}
                title="arroz"
                onClick= {()=>setRice(!rice)}/>
                
                   </div>}
            middle={<div>
                sua lista de compras
                <Checkbox/>
                    </div>}
            right={<div >estatisticas
                <Checkbox/>
                    </div>}

            />                   
     </Container>
    </Wrapper>
}

export default App