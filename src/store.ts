import { createStore } from 'redux';

const initalState = {user : 'user name'}
const rootReducer = (state = initalState) => {
    return state
}
export const store = createStore(rootReducer);