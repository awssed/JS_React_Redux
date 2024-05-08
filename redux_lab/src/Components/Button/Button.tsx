import React from "react";
function CustomButton(title:string,callback:()=>void,disabled=false)
{
    return <button onClick={callback} disabled={disabled}>
        {title}
    </button>
}
export default CustomButton