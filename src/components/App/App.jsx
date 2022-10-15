import React, {useState,useEffect } from "react"
import AppContainer from "../AppContainer"
import AppHeader from "../AppHeader"
import { Wrapper, Container} from './App.styles'
import LineChart from "../../shered/LineChart"
import ShoppingList from "../ShoppingList"
import productsMock from "../../mocks/products.json"




function App (){
      const colors =["#62CBC6","#00ABAD","#00B5BC","#006073","#004D61"] 

      const [products, setProducts] = useState(productsMock.products)
      const[selectedProducts,setSelectedProducts] =useState([])
      
        useEffect(()=>{
          const newSelectedProducts=products
            .filter(product => product.checked)


        setSelectedProducts(newSelectedProducts)
      
       },[products])

      function handleToggle(id,checked,name){
      const newProducts = products.map(product => 
                 product.id === id
               ? {...product,checked:!product.checked}
               : product
        
      )
      
      setProducts(newProducts)
      }

      
    return <Wrapper>
        <Container>
            <AppHeader/>
            <AppContainer
            left={<ShoppingList
               title="Produtos disponíveis"
               products={products}
               onToggle={handleToggle}
               />}
            middle={<ShoppingList 
              title="Sua lista de compras"
              products={selectedProducts}
              onToggle={handleToggle}
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