import { actionTypes } from '../action/actionTypes';

const initnalState = {
    rent: {
       bicycle_Id:"",
       start_time:"",
        end_time:""
    }
}
export const rentReducer = (state = initnalState, action) => {
    if (typeof state === undefined) {
        return initnalState;
    }
    switch(action.type){
        case(actionTypes.SET_RENT):
            return {...state,rent:{...state.rent,...action.rent}}

    }
    return state;
}
