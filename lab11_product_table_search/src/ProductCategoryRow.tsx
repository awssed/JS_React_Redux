import React from "react";
interface ProductCategoryRowProps{
    category:String;
}
function ProductCategoryRow({category}:ProductCategoryRowProps) {
    return <tr>
        <th colSpan={2}>
            {category}
        </th>
    </tr>
}
export default ProductCategoryRow;