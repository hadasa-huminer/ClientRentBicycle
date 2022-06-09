import { actionTypes } from "./actionTypes"

export const setUser = (user) => {
    return {
        type:actionTypes.SET_USER,
        user:user
    }
}
export const seRent = (rent) => {
    return {
        type:actionTypes.SET_USER,
        rent:rent
    }
}