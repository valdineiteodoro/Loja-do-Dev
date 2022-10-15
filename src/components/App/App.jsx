import React, {useState } from "react"
import AppContainer from "../AppContainer"
import AppHeader from "../AppHeader"
import { Wrapper, Container} from './App.styles'
import LineChart from "../../shered/LineChart"
import ShoppingList from "../ShoppingList"
import productsMock from "../../mocks/products.json"




function App (){
      const [products, setProducts] = useState(productsMock.products)

      const colors =["#62CBC6","#00ABAD","#00B5BC","#006073","#004D61"]    
      
    return <Wrapper>
        <Container>
            <AppHeader/>
            <AppContainer
            left={<ShoppingList
               title="Produtos disponíveis"
               products={products}
               />}
            middle={<ShoppingList 
              title="Sua lista de compras"
              products={products}
              />}
            right={<div>
                estatisticas

                <LineChart color={colors[0]} title="Saudavel"percentege={80}/>
                <LineChart color={colors[1]} title="Não tao saudavel assim "percentege={20}/>
                <LineChart color={colors[2]} title="Limpeza"percentege={35}/>
                <LineChart color={colors[3]} title="Outros"percentege={15}/>

              </div>}

            />                   
     </Container>
    </Wrapper>
}

export default App