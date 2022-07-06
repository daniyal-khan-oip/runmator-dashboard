import {combineReducers,compose,createStore,applyMiddleware} from "redux";
import ReduxThunk from "redux-thunk";
import {
    userAuthReducer, 
} from './Reducers/userAuthReducer'
// import {userGets, getNearMeUsers} from './Reducers/InAppReducer'

const reducers = combineReducers({
    userAuthReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store =createStore(reducers,{},composeEnhancers(applyMiddleware(ReduxThunk)));


export default store;