import { createStore , applyMiddleware } from "redux";
import logger from 'redux-logger';
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducer';

const initialState = {

}

export const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(logger , thunk))
    
)