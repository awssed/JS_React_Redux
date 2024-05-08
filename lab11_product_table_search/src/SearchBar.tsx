import React, {ChangeEvent} from "react";
interface SearchBarProps{
    filterText:string;
    isStockOnly:boolean;
    onFilterTextChange: Function;
    onInStockChange:Function;
}
function SearchBar(props:SearchBarProps)
{
    const handleFilterTextChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log("hello")
        props.onFilterTextChange(event.target.value);
    };

    const handleInStockChange = (event: ChangeEvent<HTMLInputElement>) => {
        props.onInStockChange(event.target.checked);
    };
    return(
        <form>
            <input type="text" placeholder="Seatch..." value={props.filterText} onChange={handleFilterTextChange}/>
            <p>
                <input type="checkbox" onChange={handleInStockChange}/>
                {' '}
                Only show products in stock
            </p>
        </form>
    )
}

export default SearchBar;