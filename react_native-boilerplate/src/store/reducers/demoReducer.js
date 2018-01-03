import ActionTypes from '../ActionTypes';

const INITIAL_STATE = {

}

function DemoReducer(state = INITIAL_STATE, action) {
    switch (action.type) {

        case ActionTypes.DEMO_ACTION:
            return {...state, action.payload};

        default:
            return state;
    }
}

export default DemoReducer;
