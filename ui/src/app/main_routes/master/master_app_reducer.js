import objectAssign from 'object-assign';
import deepFreeze from 'deep-freeze';
import * as Actions from './master_app_actions';

const initialState = deepFreeze({
    notification: {
        show: false, 
        message: ''
    },
    loader: {
        status: 'hide'
    }
});

//IMPORTANT: Note that with Redux, state should NEVER be changed.
//State is considered immutable. Instead, create a copy of the state passed and set new values on the copy.
export default function masterAppState(state = initialState, action) {
    switch (action.type) {
    // NOTIFICATIONS
    case Actions.SHOW_NOTIFICATION: {
        let newState = objectAssign({}, state);
        newState.notification = {show: true, message: action.message};
        return newState;
    }
    case Actions.HIDE_NOTIFICATION: {
        let newState = objectAssign({}, state);
        newState.notification = initialState.notification;
        return newState;
    }
    // LOADERS
    case Actions.SHOW_LOADER: {
        let newState = objectAssign({}, state);
        newState.loader = {...state.loader, ...{status: 'loading'}};
        return newState;
    }
    case Actions.HIDE_LOADER: {
        let newState = objectAssign({}, state);
        newState.loader = initialState.loader;
        return newState;
    }
    default:
        return state;
    }
}
