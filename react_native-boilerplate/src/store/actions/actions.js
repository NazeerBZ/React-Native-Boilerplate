import ActionType from '../ActionTypes';

class Actions {

    static demoaAction(payload) {
        return {
            type: ActionType.DEMO_ACTION,
            payload: payload
        }
    }
}

export default Actions;