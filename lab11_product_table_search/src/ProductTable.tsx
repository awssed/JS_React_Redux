import React from "react";
import ProductRow from "./ProductRow";
import ProductCategoryRow from "./ProductCategoryRow";
import Product from "./Product";
interface ProductTableProps
{
    products:Product[]
    isStockOnly:boolean;
    filterText:string;
}
function ProductTable(props:ProductTableProps)
{
    const rows:JSX.Element[]=[];
    let lastCategory:String="";
    let filterText=props.filterText;
    let inStockOnly=props.isStockOnly;

    props.products.forEach((product)=>
    {
        if (product.name.indexOf(filterText) === -1) {
            return;
        }
        if (inStockOnly && !product.stocked) {
            return;
        }
        if(product.category!==lastCategory)
        {
            rows.push(
                <ProductCategoryRow category={product.category}/>
            )
        }
        rows.push(
            <ProductRow product={product}/>
        )
        lastCategory=product.category;
    })
    return(
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>
            {rows}
            </tbody>
        </table>
    )
}
export default ProductTable;