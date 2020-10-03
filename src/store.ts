import { createStore } from 'redux';

const initialState = {user : 'user name'}
const rootReducer = (state = initialState) => {
    return state
}
export const store = createStore(rootReducer);