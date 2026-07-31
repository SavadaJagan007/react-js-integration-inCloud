import { createStore } from "redux";

const initial_state={
    cartValues:0,
    totalPrice:0,
    Products:[]

}
function aa(state=initial_state,action){
 if(action.type==="Inc")
 {
    return {...state,cartValues:state.cartValues+action.payload}
 }
 else if(action.type==="Dec")
 {
    return {...state,cartValues:state.cartValues-action.payload};
 }
 else{
    return state;
 }

}