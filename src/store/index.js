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
        default:
            return state
    }
}

function editTargetReducer(state = null,action){
    const {type,value} = action;
    switch (type){
        case 'setEditTarget':
            state = value
            return state
        default:
            return state
    }
}

function maskReducer(state = null,action){
    const {type,value} = action;
    switch (type){
        case 'setMask':
            state = value
            return state
        default:
            return state
    }
}

function maskLockReducer(state = false,action){
    const {type,value} = action;
    switch (type){
        case 'setMaskLock':
            state = value
            return state
        default:
            return state
    }
}

function showTargetReducer(state = null,action){
    const {type,value} = action;
    switch (type){
        case 'setShowTarget':
            state = value
            return state
        default:
            return state
    }
}

function commentTargetReducer(state = null,action){
    const {type,value} = action;
    switch (type){
        case 'setCommentTarget':
            state = value
            return state
        default:
            return state
    }
}



const reducers = combineReducers({
    myShadowReducer,
    editTargetReducer,
    maskReducer,
    maskLockReducer,
    showTargetReducer,
    commentTargetReducer,
    routing: routerReducer
})

const store = createStore(reducers)

export default store