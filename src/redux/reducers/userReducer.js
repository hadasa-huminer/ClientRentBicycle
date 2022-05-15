import { actionTypes } from './actionTypes';

const initnalState = {
    user: {}
}
export const userReducer = (state = initnalState, action) => {
    if (!action) {
        return state;
    }
    switch(action.type){
        case(actionTypes.SET_USER):
            return {...state,user:{...state.user,...action.user}}

    }
    return state;
}
