import React from "react";
import {Wrapper} from "./Checkbox.styles"
import { Indicator } from "./Checkbox.styles";

function Checkbox({value,title, onClick}){
    return <Wrapper onClick={onClick} >
  <Indicator value={value} />
  {title}
    </Wrapper>
}
 export default Checkbox