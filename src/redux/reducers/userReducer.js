import { actionTypes } from '../action/actionTypes';

const initnalState = {
    user: {
        email:"",
        password:"",
        num_of_credit:"",
        cvv:"",
        validity:""
    }
}
export const userReducer = (state = initnalState, action) => {
    if (typeof state === undefined) {
        return initnalState;
    }
    switch(action.type){
        case(actionTypes.SET_USER):
            return {...state,user:{...state.user,...action.user}}

    }
    return state;
}
