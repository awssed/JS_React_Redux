import React, {useState} from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import Product from "./Product";
interface filterableProductTableProps {
    products: Product[];
}
function FilterableProductTable({products}:filterableProductTableProps)
{
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);

    const handleFilterTextChange = (filterText:string) => {
        setFilterText(filterText);
    };

    const handleInStockChange = (inStockOnly:boolean) => {
        setInStockOnly(inStockOnly);
    };
    return(
        <div>
            <SearchBar filterText={filterText} isStockOnly={inStockOnly} onFilterTextChange={handleFilterTextChange} onInStockChange={handleInStockChange}/>
            <ProductTable products={products} isStockOnly={inStockOnly} filterText={filterText}/>
        </div>
    )
}
export default FilterableProductTable;