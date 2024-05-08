import {useState} from "react";
import React from "react";
import CustomButton from "../Button/Button";
import {useDispatch,useSelector} from "react-redux"
import {AppRootStateType} from "../Store/store";
import {incrementCounterAC, resetCounterAC, StateCounterType} from "../Store/CounterReducer";

function Counter()
{
    let inctTitle='inc';
    let resTitle='res';
    let counter= useSelector<AppRootStateType, StateCounterType>(
        (state)=>state.counter
    )

    const dispatch=useDispatch()
    const increment=()=>{
        dispatch(incrementCounterAC(++counterValue))
    }

    const reset=()=>{
            dispatch(resetCounterAC())
    }
    let counterValue=counter.value
    let disabledIncBtn=(counter.value >= 5);
    let disabledResBtn=(counter.value === 0);

    return<>
        <h1 >{counterValue}</h1>
        {CustomButton('increase', increment, disabledIncBtn)}
        {CustomButton('reset', reset,disabledResBtn )}
    </>
}
export default Counter;