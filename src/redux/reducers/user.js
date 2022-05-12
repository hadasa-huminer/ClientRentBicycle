import produce from 'immer'
import createReducer from './reducerUtills'

const intioanalState = {
    user: {}
}
const users = {

    setUser(state, action) {
        state.user = action.payload;
    }

}
export default produce((state, action) => createReducer(state, action, users), intioanalState);
