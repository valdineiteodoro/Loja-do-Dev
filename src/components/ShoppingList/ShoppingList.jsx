import React from "react"
import Checkbox from "../../shered/Checkbox"
import {Wrapper,Title,Array} from "./ShoppingList.styles"


  function ShoppingList({title,products,onToggle}) {
    return <Wrapper>
       <Title> 
        {title}:
        </Title> 

        <Array>
       {
        products.map(product => 
        <Checkbox
        key={product.id}
        value={product.checked}
        title={product.name}
       onClick={() => onToggle(product.id, product.checked, product.name)}
       /> 
       )
      }
        </Array>
         </Wrapper>  
        }

 export default ShoppingList