import {combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "./CounterReducer";
import {saveState} from "../../localStorage";

const rootReducer=combineReducers({
    counter:counterReducer,
})
export const store=legacy_createStore(rootReducer)
export type AppRootStateType=ReturnType<typeof rootReducer>//тип root store

store.subscribe(()=>{
    saveState(store.getState().counter);
})