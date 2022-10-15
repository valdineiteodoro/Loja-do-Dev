import React from "react";
import{ProgressBar, Wrapper} from "./LineChart.styles"

function LineChart({title,percentege,color}){
     return <Wrapper>
        <span>
            {title}
        </span>
        <ProgressBar
        color={color}
        percentege={percentege}
        />
     </Wrapper>
}

export default LineChart
