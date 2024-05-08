import {StateCounterType} from "./Components/Store/CounterReducer";

export const  loadState=()=>
{
    try {
        const serializedState=localStorage.getItem('state');
        if(serializedState===null)
        {
            return null;
        }
        return JSON.parse(serializedState);
    }
    catch (e)
    {
        return null;
    }
}
export const saveState=(state:StateCounterType)=>{
    try{
        const serializedState=JSON.stringify(state);
        localStorage.setItem('state',serializedState);
    }
    catch (e)
    {

    }
}