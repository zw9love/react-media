/**
 * Created by zw9love on 2017/6/25.
 */

import { routerReducer } from 'react-router-redux'
import { createStore,combineReducers } from 'redux'

function myShadowReducer(state = null,action){
    const {type,value} = action;
    switch (type){
        case 'setMyShadow':
            state = value
            return state
        case 'getMyShadow':
            return state
        default:
            return state
    }
}

function editShadowReducer(state = null,action){
    const {type,value} = action;
    switch (type){
        case 'setEditShadow':
            state = value
            return state
        case 'getEditShadow':
            return state
        default:
            return state
    }
}

const reducers = combineReducers({
    myShadowReducer,
    editShadowReducer,
    routing: routerReducer
})

const store = createStore(reducers)

export default store