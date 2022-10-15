import React from "react"
import Checkbox from "../../shered/Checkbox"
import {Wrapper,Title,Array} from "./ShoppingList.styles"


  function ShoppingList({title}) {
    return <Wrapper>
       <Title> 
        {title}:
        </Title> 

        <Array>
       <Checkbox value={true} title="alface"/>       
       <Checkbox value={true} title="arroz"/>
       <Checkbox value={true} title="alface"/>       
       <Checkbox value={true} title="arroz"/>
       <Checkbox value={true} title="alface"/>       
       <Checkbox value={true} title="arroz"/>
       <Checkbox value={true} title="alface"/>       
       <Checkbox value={true} title="arroz"/>
       <Checkbox value={true} title="alface"/>       
       <Checkbox value={true} title="arroz"/>
       <Checkbox value={true} title="alface"/>       
       <Checkbox value={true} title="arroz"/>
       <Checkbox value={true} title="alface"/>       
       <Checkbox value={true} title="arroz"/>
       <Checkbox value={true} title="alface"/>       
       <Checkbox value={true} title="arroz"/>


        </Array>
         </Wrapper>  
  }

 export default ShoppingList